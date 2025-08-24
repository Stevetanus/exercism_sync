def is_armstrong_number(number):
    numstr = str(number)
    return number == sum(int(str) ** len(numstr) for str in numstr)
        
