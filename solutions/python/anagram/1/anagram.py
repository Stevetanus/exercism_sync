def find_anagrams(word, candidates):
    word = word.lower()
    w_dict = {}
    for w in word:
        w_dict[w] = w_dict.get(w, 0) + 1  
    anagrams = []
    for candidate in candidates:
        c_dict = {}
        for w in candidate.lower():
            c_dict[w] = c_dict.get(w, 0) + 1
        if w_dict == c_dict and word != candidate.lower():
            anagrams.append(candidate)
    return anagrams