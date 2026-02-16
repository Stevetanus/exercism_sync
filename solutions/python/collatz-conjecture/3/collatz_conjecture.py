def steps(number):
    """steps for positive number follow Collatz Conjecture to 1.
    * if the positive number is even, divide it by 2.
    * if the positive number is odd, multiply it by 3 and add 1.
     
    :param number: int - positive integer.
    :return: int - how many steps for number to take to reach 1
    """
    if number <= 0:
        raise ValueError("Only positive integers are allowed")
    count = 0
    while number != 1:
        if number % 2 == 0:
            number //= 2
        else:
            number = number * 3 + 1
        count += 1
    return count