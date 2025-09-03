def is_paired(input_string):
    temp=[]
    fin={"[":"]","(":")","{":"}"}
    while input_string:
        for s in fin:
            if input_string.startswith(s):
                temp.append(s)
                break
            if input_string.startswith(fin[s]):
                if not temp or temp[-1] != s:
                    return False
                temp.pop()
                break
        input_string = input_string[1:]
    return len(temp) == 0
    
        
