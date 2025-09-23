CODON_MAP = {
        "AUG": "Methionine",
        "UUU": "Phenylalanine",
        "UUC": "Phenylalanine",
        "UUA": "Leucine",
        "UUG": "Leucine",
        "UCU": "Serine",
        "UCC": "Serine",
        "UCA": "Serine",
        "UCG": "Serine",
        "UAU": "Tyrosine",
        "UAC": "Tyrosine",
        "UGU": "Cysteine",
        "UGC": "Cysteine",
        "UGG": "Tryptophan",
        "UAA": None,
        "UAG": None,
        "UGA": None
    }


def proteins(strand):
    result = []
    codons = [strand[i:i+3] for i in range(0, len(strand), 3)]
    for codon in codons:
        amino_acid = CODON_MAP.get(codon)
        if amino_acid is None:
            break
        result.append(amino_acid)
    return result
    
