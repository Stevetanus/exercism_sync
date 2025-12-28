def is_paired(input_string):
    temp=[]
    fin={"[":"]","(":")","{":"}"}
    while input_string:
        matched = False
        for s in fin:
            if input_string.startswith(s):
                temp.append(s)
                input_string = input_string[1:]
                matched = True
                break
            if input_string.startswith(fin[s]):
                if not temp or temp[-1] != s:
                    return False
                temp.pop()
                input_string = input_string[1:]
                matched = True
                break

        if not matched:
            input_string = input_string[1:]
        print(temp)
    return len(temp) == 0
    
        
