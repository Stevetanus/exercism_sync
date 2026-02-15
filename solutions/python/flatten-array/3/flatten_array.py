from collections.abc import Iterable


def flatten(iterable):
    def _gen(iterable):
        for item in iterable:
            if item is not None:
                if isinstance(item, Iterable):
                    yield from _gen(item)
                else:
                    yield item
    return list(_gen(iterable))
                