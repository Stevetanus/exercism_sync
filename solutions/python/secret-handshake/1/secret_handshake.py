def commands(binary_str):
    need_reverse = False
    actions = []
    for index in range(len(binary_str) - 1, -1, -1):
        if index == 0 and int(binary_str[index]):
            need_reverse = True
        if index == 1 and int(binary_str[index]):
            actions.append("jump")
        if index == 2 and int(binary_str[index]):
            actions.append("close your eyes")
        if index == 3 and int(binary_str[index]):
            actions.append("double blink")
        if index == 4 and int(binary_str[index]):
            actions.append("wink")
    if need_reverse:
        actions.reverse()
    return actions
