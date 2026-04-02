def flatten(iterable):
    result = []
    for item in iterable:
        if item != None:
            if isinstance(item, list):
                result += flatten(item)
            else:
                result.append(item)
    return result