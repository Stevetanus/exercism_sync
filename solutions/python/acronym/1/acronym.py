import re

def abbreviate(words):
    words_seperated = re.split(r"[ _\-]+", words)
    return "".join(word[0].upper() for word in words_seperated)
