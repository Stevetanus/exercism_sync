def response(hey_bob):
    hey_bob = hey_bob.strip()
    # isupper() return True if all chars are uppercase, otherwise False (also return False if there's any non alphabet char). All CAPITAL means you yell at him.
    if hey_bob.isupper():
        if hey_bob.endswith("?"):
            return "Calm down, I know what I'm doing!"
        return "Whoa, chill out!"
    elif hey_bob.endswith("?"):
        return "Sure."
    elif hey_bob == "":
        return "Fine. Be that way!"
    return "Whatever."
