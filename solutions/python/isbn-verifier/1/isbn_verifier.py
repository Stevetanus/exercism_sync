def is_valid(isbn):
    isbn_without_dash = isbn.replace("-", "")
    if len(isbn_without_dash) != 10:
        return False
    total = 0
    for i in range(10):
        if isbn_without_dash[i].isalpha() and i != 9:
            return False
        if isbn_without_dash[i].isalpha() and isbn_without_dash[i] != "X":
            return False
        digit_current = 10 if isbn_without_dash[i] == "X" else int(isbn_without_dash[i])
        total += digit_current * (10 - i)
    return total % 11 == 0        
