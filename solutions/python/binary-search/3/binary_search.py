def find(search_list, value):
    if len(search_list) == 0:
            raise ValueError("value not in array")
    now_list = search_list
    while True:
        middle_index = len(now_list) // 2
        middle_value = now_list[middle_index]
        if value == middle_value:
            return search_list.index(middle_value)
        elif len(now_list) == 1:
            raise ValueError("value not in array")    
        elif value > middle_value:
            now_list = now_list[middle_index + 1:]
        else:
            now_list = now_list[:middle_index]
    