def distance(strand_a, strand_b):
    if len(strand_a) != len(strand_b):
        raise ValueError("Strands must be of equal length.")
    return sum(1 for index, strand in enumerate(strand_a) if strand != strand_b[index])
