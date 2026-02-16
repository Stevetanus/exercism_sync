def commands(binary_str):
    need_reverse = False
    actions = []
    BIT_ACTIONS = [(1, "jump"), (2, "close your eyes"), (3, "double blink"),(4, "wink")]
    REVERSE_BIT = 0
    for bit, action in BIT_ACTIONS:
        if binary_str[bit] == "1":
            actions = [action] + actions 
    if binary_str[REVERSE_BIT] == "1":
        actions.reverse()
    return actions
