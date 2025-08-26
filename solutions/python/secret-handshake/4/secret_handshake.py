def commands(binary_str):
    actions = []
    BIT_ACTIONS = [(0, "wink"), (1, "double blink"), (2, "close your eyes"),(3, "jump")]
    REVERSE_BIT = 4
    binary_int = int(binary_str, 2)
    
    for bit, action in BIT_ACTIONS:
        if binary_int & 1 << bit:
            actions.append(action)
    if binary_int & 1 << REVERSE_BIT:
        actions.reverse()
    return actions
