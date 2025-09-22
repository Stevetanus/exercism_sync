def proteins(strand):
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
    }
    results = []
    codons = [strand[i:i+3] for i in range(0, len(strand), 3)]
    for codon in codons:
        if codon in ["UAA", "UAG", "UGA"]:
            return results
        if codon in CODON_MAP:
            results.append(CODON_MAP.get(codon))
    return results
    
