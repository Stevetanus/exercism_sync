from collections.abc import Iterable


def flatten(iterable):
    def _gen(iterable):
        for item in iterable:
            if item is not None:
                # item is an iterable and not str or bytes type.
                if isinstance(item, Iterable) and not isinstance(item, (str, bytes)):
                    yield from _gen(item)
                else:
                    yield item
    return list(_gen(iterable))
                