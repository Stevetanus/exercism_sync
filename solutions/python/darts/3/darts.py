import math
INNER_RADIUS = 1
MIDDLE_RADIUS = 5
OUTER_RADIUS = 10

def score(x, y):
    distance_from_center = math.hypot(x, y)
    if distance_from_center <= INNER_RADIUS:
        return 10
    elif distance_from_center <= MIDDLE_RADIUS:
        return 5
    elif distance_from_center <= OUTER_RADIUS:
        return 1
    return 0
