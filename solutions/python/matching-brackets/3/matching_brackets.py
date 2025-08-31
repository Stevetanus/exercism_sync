def is_paired(input_string):
    brackets_pair = {
        "[": "]",
        "{": "}",
        "(": ")"
    }
    to_close_brackets = []
    brackets_pair_open = dict.keys(brackets_pair)
    brackets_pair_close = dict.values(brackets_pair)
    for input_str in input_string:
        if input_str in brackets_pair_open:
            to_close_brackets.append(brackets_pair[input_str])
        elif input_str in brackets_pair_close:
            if len(to_close_brackets) and input_str == to_close_brackets.pop():
                continue
            return False
    return len(to_close_brackets) == 0
        
