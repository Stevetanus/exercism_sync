number_map = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety"
}
unit_list = ["", "thousand", "million", "billion"]


def get_tens_and_ones(last_two_number):
    if last_two_number == 0:
        return ""
    if last_two_number in number_map:
        return number_map[last_two_number]
    tens, ones = divmod(last_two_number, 10)
    return f"{number_map[tens * 10]}-{number_map[ones]}"
    
def get_hundreds(number):
    if number == 0: 
        return ""
    parts = []
    hundreds_digit = number // 100
    if hundreds_digit:
        parts.append(f"{number_map[hundreds_digit]} hundred")
    last_two_digits = number % 100
    if last_two_digits:
        parts.append(get_tens_and_ones(last_two_digits))
    return " ".join(parts)
    
def say(number):
    if number >= 10 ** 12 or number < 0:
        raise ValueError("input out of range")
    if number == 0:
        return "zero"
    chunks = []
    # ex: number = 987,654,321,123
    while number > 0:
        chunks.append(number % 1000)
        number //= 1000
    # ex: chunks = [123, 321, 654, 987]
    answer_list = []
    for index, chunk in enumerate(chunks[::-1]):
        unit = unit_list[len(chunks) - index -1]
        to_add_str = get_hundreds(chunk)
        if to_add_str and unit:
            to_add_str += " " + unit
        if to_add_str:
            answer_list.append(to_add_str)
    return " ".join(answer_list)
    