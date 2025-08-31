def is_paired(input_string):
    brackets_pair = {
        "[": "]",
        "{": "}",
        "(": ")"
    }
    to_close_brackets = []
    brackets_pair_open = dict.keys(brackets_pair)
    brackets_pair_close = dict.values(brackets_pair)
    for input in input_string:
        if input in brackets_pair_open:
            to_close_brackets.append(brackets_pair[input])
        elif input in brackets_pair_close:
            if len(to_close_brackets) and input == to_close_brackets.pop():
                continue
            return False
    return len(to_close_brackets) == 0
        
