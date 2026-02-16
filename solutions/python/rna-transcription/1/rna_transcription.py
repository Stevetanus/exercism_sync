def to_rna(dna_strand):
    rna = ""
    for dna in dna_strand:
        if dna == "C":
            rna += "G"
        elif dna == "G":
            rna += "C"
        elif dna == "T":
            rna += "A"
        elif dna == "A":
            rna += "U"
        else:
            rna += dna
    return rna