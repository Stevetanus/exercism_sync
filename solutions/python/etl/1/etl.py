def transform(legacy_data):
    data = {}
    for k, v in legacy_data.items():
        for alpha_upper in v:
            data[alpha_upper.lower()] = k
    return data
