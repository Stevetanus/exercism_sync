def find(search_list, value):
    if len(search_list) == 0:
            raise ValueError("value not in array")
    is_found = False
    now_list = search_list
    found_index = -1
    while is_found == False:
        middle_index = len(now_list) // 2
        middle = now_list[middle_index]
        print(middle, middle_index, now_list)
        if value == middle:
            is_found = True
            found_index = search_list.index(middle)
        elif value > middle:
            now_list = now_list[middle_index + 1:]
        else:
            now_list = now_list[0: middle_index]
        if middle_index == 0:
            is_found = True
    if found_index == -1:
        raise ValueError("value not in array")
    return found_index
    