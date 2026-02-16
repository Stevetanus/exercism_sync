def value(colors):
    answer = ""
    color_dict = {
        "black": '0',
        "brown": '1',
        "red": '2',
        "orange": '3',
        "yellow": '4',
        "green": '5',
        "blue": '6',
        "violet": '7',
        "grey": '8',
        "white": '9'
    }
    for index, c in enumerate(colors):
        if index > 1:
            continue
        answer += color_dict[c]
    return int(answer)
    
