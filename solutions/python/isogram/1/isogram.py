def is_isogram(string):
    word_dict = {}
    for s in string.lower():
        if s.isalpha():
            word_dict[s] = word_dict.get(s, 0) + 1
            if word_dict[s] == 2:
                return False
    return True
    