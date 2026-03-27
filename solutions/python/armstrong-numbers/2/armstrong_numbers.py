def is_armstrong_number(number):
    digits_string = str(number)
    return number == sum(int(digit) ** len(digits_string) for digit in digits_string)
        
