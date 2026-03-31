def square_root(number):
    start, end = 1, number
    while start <= end:
        mid = (start + end) // 2
        if mid * mid < number:
            start = mid + 1
        elif mid * mid > number:
            end = mid - 1
        else:
            return mid
