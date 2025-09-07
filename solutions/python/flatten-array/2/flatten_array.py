from collections.abc import Iterable


def flatten(iterable):
    result = []
    for item in iterable:
        if item is not None:
            if isinstance(item, Iterable):
                result.extend(flatten(item))
            else:
                result.append(item)
    return result