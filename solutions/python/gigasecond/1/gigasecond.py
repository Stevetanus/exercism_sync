from datetime import datetime, timedelta


def add(moment):
    delta = timedelta(
        seconds=1_000_000_000
    )
    return moment + delta
