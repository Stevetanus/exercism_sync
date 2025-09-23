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

def get_hundred(number_str):
    hundreds_digit = int(number_str[0])
    hundreds_str = f"{number_map[hundreds_digit]} hundred " if hundreds_digit else ""
    last_two_number = int(number_str[1:])
    if last_two_number == 0 and hundreds_str:
        return f"{hundreds_str[:-1]}"
    if number_map.get(last_two_number):
        return f"{hundreds_str}{number_map.get(last_two_number)}"
    tens_digit = int(number_str[1]) * 10
    ones_digit = int(number_str[2])
    tens_str = f"{number_map[tens_digit]}-" if tens_digit else ""
    ones_str = number_map[ones_digit]
    return f"{hundreds_str}{tens_str}{ones_str}"
    
def say(number):
    if number >= 10 ** 12 or number < 0:
        raise ValueError("input out of range")
    number_str_rev = str(number)[::-1]
    number_slices = [number_str_rev[i:i+3][::-1].zfill(3) for i in range(0, len(number_str_rev), 3)][::-1]
    answer = ""
    for index, slice in enumerate(number_slices):
        unit_add = unit_list[len(number_slices) - index -1]
        to_add_str = get_hundred(slice)
        if answer:
            if to_add_str != "zero":
                answer += " " + get_hundred(slice)
        else:
            answer = get_hundred(slice)
        if unit_add and to_add_str != "zero":
            answer += " " + unit_add
    return answer
    