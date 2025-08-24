def classify(number):
    """ A perfect number equals the sum of its positive divisors.

    :param number: int a positive integer
    :return: str the classification of the input integer
    """
    if number < 1:
        raise ValueError("Classification is only possible for positive integers.")
    count = 0
    for i in range(1, int(number / 2) + 1):
        if (number % i == 0):
            count += i
    if count == number:
        return "perfect"
    elif count > number:
        return "abundant"
    return "deficient"
        
