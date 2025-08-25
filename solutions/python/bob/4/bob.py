def response(hey_bob):
    hey_bob = hey_bob.strip()
    # isupper() return True if all cased letters are uppercase, False if there are **no letters** or have lowercase letters.
    if hey_bob.isupper():
        if hey_bob.endswith("?"):
            return "Calm down, I know what I'm doing!"
        return "Whoa, chill out!"
    elif hey_bob.endswith("?"):
        return "Sure."
    elif hey_bob == "":
        return "Fine. Be that way!"
    return "Whatever."
