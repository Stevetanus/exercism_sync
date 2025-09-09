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


def check_sub(list1, list2):
    list2_adjust_end = list2[:len(list2) - len(list1) + 1]
    for index, ele2 in enumerate(list2_adjust_end):
        end = index + len(list1)
        if list2[index:end] == list1:
            return True
    return False

def sublist(list_one, list_two):
    if list_one == list_two:
        return EQUAL
    shorter, longer = (list_one, list_two) if len(list_one) < len(list_two) else (list_two, list_one)
    if check_sub(shorter, longer):
        return SUBLIST if shorter == list_one else SUPERLIST
    return UNEQUAL

