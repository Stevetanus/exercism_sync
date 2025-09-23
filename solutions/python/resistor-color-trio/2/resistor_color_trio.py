def label(colors):
    colors_list = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]
    result = ""
    ohms = 0
    units = [
        (1000000000, " giga"),
        (1000000, " mega"),
        (1000, " kilo")
    ]
    
    for index, c in enumerate(colors):
        if index < 2:
            ohms = 10 * ohms + colors_list.index(c)
        if index == 2:
            zeros = colors_list.index(c)
            ohms = ohms * (10 ** zeros)
            print(ohms)
            for unit_int, unit_str in units:
                if ohms >= unit_int:
                    result = str(int(ohms / unit_int)) + unit_str + "ohms"
                    break
                else:
                    result = str(ohms) + " ohms"
    return result
