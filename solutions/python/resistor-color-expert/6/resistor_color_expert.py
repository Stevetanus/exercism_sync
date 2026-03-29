import math


def resistor_label(colors):
    if len(colors) == 1 and colors[0] == "black":
        return f"0 ohms"
    def get_ohms_str(ohms):
        units = [
            (1000000000, " gigaohms"),
            (1000000, " megaohms"),
            (1000, " kiloohms"),
            (1, " ohms")
        ]       
        for unit_int, unit_str in units:
            if ohms >= unit_int:
                ohms = ohms / unit_int
                ohms_type = unit_str
                break
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
    
    multiplier_index = 3 if len(colors) == 5 else 2
    tolerance_index = 4 if len(colors) == 5 else 3 
    band_value = 0
    # get band value
    value_band = colors[:multiplier_index]
    for value in value_band:
        band_value = band_value * 10 + color_list.index(value)
    # add multiplier and change value to string
    multiplier_band = colors[multiplier_index]
    band_value *= 10 ** color_list.index(multiplier_band)
    resistence_str = get_ohms_str(float(band_value))
    # add tolerance
    tolerance_band = colors[tolerance_index]
    return f"{resistence_str} ±{color_tolerance_dict[tolerance_band]}"

        