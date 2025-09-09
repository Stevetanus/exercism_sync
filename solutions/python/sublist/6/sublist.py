"""
This exercise stub and the test suite contain several enumerated constants.

Enumerated constants can be done with a NAME assigned to an arbitrary,
but unique value. An integer is traditionally used because it’s memory
efficient.
It is a common practice to export both constants and functions that work with
those constants (ex. the constants in the os, subprocess and re modules).

You can learn more here: https://en.wikipedia.org/wiki/Enumerated_type
"""
EQUAL = 1
SUBLIST = 2
SUPERLIST = 3
UNEQUAL = 4


def check_sub(shorter, longer):
    n = len(shorter)
    return any(
        longer[index: index + n] == shorter
        for index in range(len(longer) - n + 1)
    )


def sublist(list_one, list_two):
    if list_one == list_two:
        return EQUAL
    if check_sub(list_one, list_two):
        return SUBLIST
    if check_sub(list_two, list_one):
        return SUPERLIST
    return UNEQUAL