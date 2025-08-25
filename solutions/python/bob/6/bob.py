def response(hey_bob):
    hey_bob = hey_bob.strip()
    # isupper() return True if all cased letters are uppercase, False if there are NO letters or have lowercase letters.
    is_shouting = hey_bob.isupper()
    is_asking = hey_bob.endswith("?")
    is_silent = hey_bob == ""
    if is_shouting:
        if is_asking:
            return "Calm down, I know what I'm doing!"
        return "Whoa, chill out!"
    elif is_asking:
        return "Sure."
    elif is_silent:
        return "Fine. Be that way!"
    return "Whatever."
