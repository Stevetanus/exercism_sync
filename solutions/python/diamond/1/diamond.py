import string
uppercase = list(string.ascii_uppercase)

def rows(letter):
    result = []
    letter_index = uppercase.index(letter)
    line_length = (letter_index + 1) * 2 - 1
    for alpha_index, upper in enumerate(uppercase):
        line = ""
        for i in range(line_length):
            if alpha_index == 0:
                if i < letter_index:
                    line += " "
                elif i == letter_index:
                    line += "A"
                else:
                    line += " "
            else:
                if i == letter_index - alpha_index or i == letter_index + alpha_index:
                    line += upper
                else:
                    line += " "
        result.append(line)
        if upper == letter:
             break
    return result + result[::-1][1:]
            