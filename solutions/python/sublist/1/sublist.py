"""
This exercise stub and the test suite contain several enumerated constants.

Enumerated constants can be done with a NAME assigned to an arbitrary,
but unique value. An integer is traditionally used because it’s memory
efficient.
It is a common practice to export both constants and functions that work with
those constants (ex. the constants in the os, subprocess and re modules).

You can learn more here: https://en.wikipedia.org/wiki/Enumerated_type
"""

# Possible sublist categories.
# Change the values as you see fit.
EQUAL = "equal"
SUBLIST = "sublist"
SUPERLIST = "superlist"
UNEQUAL = "unequal"


def sublist(list_one, list_two):
    if list_one == list_two:
        return EQUAL
    elif len(list_one) < len(list_two):
        if len(list_one) == 0:
            return SUBLIST
        for index, ele_l2 in enumerate(list_two):
            if ele_l2 == list_one[0]:
                start = index
                end = index + len(list_one)
                if end <= len(list_two):
                    if list_two[start:end] == list_one:
                        return SUBLIST
        return UNEQUAL
    elif len(list_one) > len(list_two):
        if len(list_two) == 0:
            return SUPERLIST
        for index, ele_l1 in enumerate(list_one):
            if ele_l1 == list_two[0]:
                start = index
                end = index + len(list_two)
                if end <= len(list_one):
                    if list_one[start:end] == list_two:
                        return SUPERLIST
        return UNEQUAL
    return UNEQUAL
