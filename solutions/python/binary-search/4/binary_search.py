def find(search_list, value):
    if len(search_list) == 0:
            raise ValueError("value not in array")
    start = 0
    end = len(search_list) - 1

    while start <= end:
        middle_index = (start + end) // 2 
        middle_value = search_list[middle_index]
        if value == middle_value:
            return middle_index
        if value > middle_value:
            start = middle_index + 1
        elif value < middle_value:
            end = middle_index - 1
    raise ValueError("value not in array")
    