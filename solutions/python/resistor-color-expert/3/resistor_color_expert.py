import math


def resistor_label(colors):
    if len(colors) == 1 and colors[0] == "black":
        return f"0 ohms"

    def get_ohms_str(ohms):
        number_of_digits = math.floor(math.log10(ohms)) + 1
        ohms_type = ""
        if number_of_digits > math.log10(1000000):
            ohms = ohms / 1000000
            ohms_type = " megaohms"
        elif number_of_digits > math.log10(1000):
            ohms = ohms / 1000
            ohms_type = " kiloohms"
        else:
            ohms_type = " ohms"
            
        if ohms.is_integer():
            return str(int(ohms)) + ohms_type
        else:
            return str(ohms) + ohms_type
    
    color_list = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]
    color_tolerance_dict = {
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
    band_value = 0
    multiplier_index = 2
    tolerance_index = 3
    if len(colors) > 4:
        multiplier_index = 3
        tolerance_index = 4

    for index, c in enumerate(colors):
        if index < multiplier_index:
            band_value += color_list.index(c) * (10 ** (multiplier_index -index - 1))
        elif index == multiplier_index:
            band_value *= 10 ** color_list.index(c)
            result = get_ohms_str(float(band_value))
        elif index == tolerance_index:
            result += " ±" + color_tolerance_dict[c]
    return result

        