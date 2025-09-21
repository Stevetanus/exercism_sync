def proteins(strand):
    codon_amino_acid_tuple = ((['AUG'], 'Methionine'), (['UUU', 'UUC'], 'Phenylalanine'), (['UUA', 'UUG'], 'Leucine'), (['UCU', 'UCC', 'UCA', 'UCG'], 'Serine'), (['UAU', 'UAC'], 'Tyrosine'), (['UGU', 'UGC'], 'Cysteine'), (['UGG'], 'Tryptophan'), (['UAA', 'UAG', 'UGA'], 'STOP'))
    back_proteins = []
    slices = []
    for i in range(int(len(strand) / 3)):
        slices.append(strand[3 * i: 3 * (i + 1)])
    print(slices)
    for s in slices:
        for t in codon_amino_acid_tuple:
            if s in ['UAA', 'UAG', 'UGA']:
                return back_proteins
            if s in t[0]:
                back_proteins.append(t[1])
    return back_proteins
    
