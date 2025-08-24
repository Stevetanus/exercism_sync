def label(colors):
    colors_list = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]
    result = ""
    ohms = ""
    for index, c in enumerate(colors):
        if index < 2:
            ohms += str(colors_list.index(c))
        if index == 2:
            zeros = colors_list.index(c)
            for i in range(zeros):
                ohms += "0"
            quotient = (len(ohms) - 1) // 3 
            if quotient == 0:
                result += str(int(ohms)) + " ohms"
            elif quotient == 1:
                result += str(int(ohms) // 1000) + " kiloohms"
            elif quotient == 2:
                result += str(int(ohms) // 1000000) + " megaohms"
            else:
                result += str(int(ohms) // 1000000000) + " gigaohms"
    return result
