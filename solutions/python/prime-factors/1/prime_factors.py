def factors(value):
    if value <= 1:
        return []
    results = []
    divisor = 2
    while value > 1:
        while value % divisor == 0:
            value = value / divisor
            results.append(divisor)
        divisor += 1
    return results