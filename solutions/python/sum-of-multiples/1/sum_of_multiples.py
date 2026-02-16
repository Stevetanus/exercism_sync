def sum_of_multiples(limit, multiples):
    points_set = set()
    for stage in range(1, limit):
        for base_value in multiples:
            if base_value and stage % base_value == 0:
                points_set.add(stage)
    return sum(points_set)
