def color_code(color):
    COLOR_VALUES = dict(zip(colors(), range(10)))
    return COLOR_VALUES[color]

def colors():
    return [
        "black",
        "brown",
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "violet",
        "grey",
        "white",
    ]
