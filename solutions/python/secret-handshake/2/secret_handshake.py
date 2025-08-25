def commands(binary_str):
    need_reverse = False
    actions = []
    BIT_ACTIONS = [(4, "wink"), (3, "double blink"), (2, "close your eyes"), (1, "jump")]
    REVERSE_BIT = 0
    for bit, action in BIT_ACTIONS:
        if binary_str[bit] == "1":
            actions.append(action)
    if binary_str[REVERSE_BIT] == "1":
        need_reverse = True
    if need_reverse:
        actions.reverse()
    return actions
