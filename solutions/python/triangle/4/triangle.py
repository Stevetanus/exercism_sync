def equilateral(sides):
    a, b, c = sorted(sides)
    return is_valid_triangle(a, b, c) and len({a, b, c}) == 1


def isosceles(sides):
    a, b, c = sorted(sides)
    return is_valid_triangle(a, b, c) and len({a, b, c}) <= 2


def scalene(sides):
    a, b, c = sorted(sides)
    return is_valid_triangle(a, b, c) and len({a, b, c}) == 3

def is_valid_triangle(a, b, c):
    return a > 0 and a + b >= c