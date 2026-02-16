def is_valid(isbn):
    isbn_without_dash = isbn.replace("-", "")
    ISBN_LENGTH = 10
    if len(isbn_without_dash) != ISBN_LENGTH:
        return False
    total = 0
    for index, isbn_char in enumerate(isbn_without_dash):
        if index != ISBN_LENGTH - 1:
            if not isbn_char.isdigit():
                return False
        else:
            if not isbn_char.isdigit() and isbn_char != "X":
                    return False
        total += get_isbn_value(isbn_char) * (ISBN_LENGTH - index)
    return total % 11 == 0        

def get_isbn_value(isbn_char):
    return 10 if isbn_char == "X" else int(isbn_char)