def is_paired(input_string):
    open_brackets = "[{("
    close_brackets = "]})"
    now_open_brackets = []
    to_close_brackets = []
    for input in input_string:
        if input in open_brackets:
            open_bracket_index = open_brackets.index(input)
            now_open_brackets.append(input)
            to_close_brackets.append(close_brackets[open_bracket_index])
        elif input in close_brackets:
            if len(to_close_brackets) == 0:
                return False
            to_close_bracket = to_close_brackets.pop()
            if input != to_close_bracket:
                return False
            now_open_brackets.pop() 
    return len(now_open_brackets) == 0 and len(to_close_brackets) == 0
        
