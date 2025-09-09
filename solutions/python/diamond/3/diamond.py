import string
uppercase = string.ascii_uppercase

def rows(letter):
    result = []
    letter_index = uppercase.index(letter)
    line_length = (letter_index + 1) * 2 - 1
    for alpha_index, upper in enumerate(uppercase[:letter_index + 1]):
        row = []
        for i in range(line_length):
            if i == letter_index - alpha_index or i == letter_index + alpha_index:
                row.append(upper)
            else:
                row.append(" ")
        result.append("".join(row))
    return result + result[::-1][1:]
            