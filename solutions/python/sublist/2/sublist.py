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


def sublist(list_one, list_two):
    def check_sub(list1, list2):
        for index, ele2 in enumerate(list2):
            if ele2 == list1[0]:
                end = index + len(list1)
                if list2[index:end] == list1:
                    return True
        return False
    
    if list_one == list_two:
        return EQUAL
    if len(list_one) < len(list_two):
        if len(list_one) == 0 or check_sub(list_one, list_two):
            return SUBLIST
    if len(list_one) > len(list_two):
        if len(list_two) == 0 or check_sub(list_two, list_one):
            return SUPERLIST
    return UNEQUAL
