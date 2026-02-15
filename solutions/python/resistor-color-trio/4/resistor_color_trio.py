def label(colors):
    colors_list = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]
    COLOR_VALUES = {
        "black": 0,
        "brown": 1,
        "red": 2,
        "orange": 3,
        "yellow": 4,
        "green": 5,
        "blue": 6,
        "violet": 7,
        "grey": 8,
        "white": 9
    }
    units = [
        (1000000000, "giga"),
        (1000000, "mega"),
        (1000, "kilo")
    ]

    band_colors = colors[:2]
    ohms = 0
    for color in band_colors:
        ohms = 10 * ohms + COLOR_VALUES[color]
    multiplier_color = colors[2]
    zeros = COLOR_VALUES[multiplier_color]
    ohms = ohms * 10 ** zeros
    for unit_int, unit_str in units:
        if ohms >= unit_int:
            ohms = ohms / unit_int
            # remove fractional part if ohms is an integer
            if ohms.is_integer():
                ohms = int(ohms)
            result = str(ohms) + " " + unit_str + "ohms"
            break
    else:
        result = str(ohms) + " ohms"
    return result
