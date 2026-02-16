def is_armstrong_number(number):
    digits_string = str(number)
    total = 0
    total += sum(int(digit) ** len(digits_string) for digit in digits_string)
    return number == total
        
