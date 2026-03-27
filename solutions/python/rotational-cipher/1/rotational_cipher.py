def rotate(text, key):
    cipher = ""
    for t in text:
        if 'a' <= t <= 'z':
            cipher += chr((ord(t) + key - ord('a')) % 26 + ord('a'))
        elif 'A' <= t <= 'Z':
            cipher += chr((ord(t) + key - ord('A')) % 26 + ord('A'))
        else:
            cipher += t
    return cipher