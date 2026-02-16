def resistor_label(colors):
    color_list = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]
    color_multiplier_dict = {
        "grey": "0.05%",
        "violet": "0.1%",
        "blue": "0.25%",
        "green": "0.5%",
        "brown": "1%",
        "red": "2%",
        "gold": "5%",
        "silver": "10%"
    }
    result = ""
    add_0_index = 2
    multiplier_index = 3
    if len(colors) > 4:
        add_0_index = 3
        multiplier_index = 4

    for index, c in enumerate(colors):
        if index < add_0_index:
            result += str(color_list.index(c))
        elif index == add_0_index:
            for i in range(color_list.index(c)):
                result += "0"
            if len(result) <= 3:
                result += " ohms"
            elif len(result) <= 6:
                amount = int(result) / 1000
                if amount.is_integer():
                    result = str(int(amount)) + " kiloohms"
                else:
                    result = str(amount) + " kiloohms"
            elif len(result) <= 9:
                amount = int(result) / 1000000
                if amount.is_integer():
                    result = str(int(amount)) + " megaohms"
                else:
                    result = str(amount) + " megaohms"
            else:
                amount = int(result) / 1000000000
                if amount.is_integer():
                    result = str(int(amount)) + " gigaohms"
                else:
                    result = str(amount) + " gigaohms"
        elif index == multiplier_index:
            result += " ±" + color_multiplier_dict[c]
    if not "ohms" in result:
        result += " ohms"
    return result