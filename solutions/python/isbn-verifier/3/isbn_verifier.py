def is_valid(isbn):
    isbn_without_dash = isbn.replace("-", "")
    ISBN_LENGTH = 10
    if len(isbn_without_dash) != ISBN_LENGTH:
        return False
    total = 0
    for index, isbn_current in enumerate(isbn_without_dash):
        if index != ISBN_LENGTH - 1:
            if not isbn_current.isdigit():
                return False
            total += int(isbn_current) * (ISBN_LENGTH - index)
        else:
            if not isbn_current.isdigit():
                if isbn_current == "X":
                    total += 10
                else:
                    return False
            else:
                total += int(isbn_current) * (ISBN_LENGTH - index)
    return total % 11 == 0        

