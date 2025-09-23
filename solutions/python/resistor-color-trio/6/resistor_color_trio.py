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
UNITS = [
    (1_000_000_000, "giga"),
    (1_000_000, "mega"),
    (1_000, "kilo")
]


def label(colors):
    first, second, multiplier = colors[:3]
    ohms = (10 * COLOR_VALUES[first] + COLOR_VALUES[second]) * 10 ** COLOR_VALUES[multiplier]
    for unit_int, unit_str in UNITS:
        if ohms >= unit_int:
            return f"{ohms // unit_int} {unit_str}ohms"
            break
    else:
        return f"{ohms} ohms"
