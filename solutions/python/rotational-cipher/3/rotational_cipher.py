import string
lowercase = string.ascii_lowercase
uppercase = string.ascii_uppercase


def rotate(text, key):
    cipher_list = []
    for t in text:
        if t in lowercase:
            cipher_list.append(lowercase[(lowercase.index(t) + key) % 26]) 
        elif t in uppercase:
            cipher_list.append(uppercase[(uppercase.index(t) + key) % 26])
        else:
            cipher_list.append(t)
    return "".join(cipher_list)