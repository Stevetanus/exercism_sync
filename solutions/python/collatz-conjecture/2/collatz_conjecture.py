def steps(number):
    """steps for positive number conjecture to 1
     
    :param number: int - any integer.
    :return: int - how many steps for number to take to reach 1
    """
    if number <= 0:
        raise ValueError("Only positive integers are allowed")
    count = 0
    while number != 1:
        # if number is even, divided by 2
        if number % 2 == 0:
            number //= 2
        # if number is odd, mutiply it by 3 and plus 1
        else:
            number = number * 3 + 1
        count += 1
    return count