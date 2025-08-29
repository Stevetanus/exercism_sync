def is_valid(isbn):
    def get_isbn_value(isbn_char):
        return 10 if isbn_char == "X" else int(isbn_char)
        
    isbn_without_dash = isbn.replace("-", "")
    ISBN_LENGTH = 10
    if len(isbn_without_dash) != ISBN_LENGTH:
        return False
    total = 0
    for index, isbn_char in enumerate(isbn_without_dash):
        if index < ISBN_LENGTH - 1 and isbn_char.isdigit() or index == ISBN_LENGTH - 1 and (isbn_char.isdigit() or isbn_char == "X"):
            total += get_isbn_value(isbn_char) * (ISBN_LENGTH - index)
            print(index, total)
        else:
            return False
    return total % 11 == 0        