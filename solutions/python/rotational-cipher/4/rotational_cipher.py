import string
lowercase = string.ascii_lowercase
uppercase = string.ascii_uppercase

def rotate(text, key):
    shifted_lowercase = lowercase[key:] + lowercase[: key]
    shifted_uppercase = uppercase[key:] + uppercase[: key]
    rotate_table = str.maketrans(lowercase + uppercase, shifted_lowercase + shifted_uppercase)
    return text.translate(rotate_table)
    