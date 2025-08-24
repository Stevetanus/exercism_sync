def is_pangram(sentence):
    alpha_dict = {}
    for alpha in sentence.lower():
        if alpha.isalpha():
            alpha_dict[alpha] = alpha_dict.get(alpha, 0) + 1
    return len(alpha_dict) == 26
