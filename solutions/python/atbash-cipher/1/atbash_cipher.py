import string
import re


lowercase = string.ascii_lowercase
lowercase_rev = lowercase[::-1]
rotate_table_encode = str.maketrans(
    lowercase,
    lowercase_rev
)
rotate_table_decode = str.maketrans(
    lowercase_rev,
    lowercase
)
def encode(plain_text):
    answer = ""
    for index, text in enumerate(re.sub(r"[^\w]", "", plain_text).replace(" ","").lower().translate(rotate_table_encode)):
        if index > 0 and index % 5 == 0:
            answer += " "
        answer += text
    return answer


def decode(ciphered_text):
    return ciphered_text.translate(rotate_table_decode).replace(" ", "")
    
