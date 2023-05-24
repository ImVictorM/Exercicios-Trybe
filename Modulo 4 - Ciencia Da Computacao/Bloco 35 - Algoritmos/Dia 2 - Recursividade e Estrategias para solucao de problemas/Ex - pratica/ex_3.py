# maneira 1 -> menos eficiente
def get_max(list):
    if len(list) == 1:
        return list[0]

    if list[-1] > get_max(list[: len(list) - 1]):
        return list[-1]
    return get_max(list[: len(list) - 1])


# maneira 2 -> mais eficiente
def get_max_plus(lst, start=0, end=None):
    if end is None:
        end = len(lst)
    if end - start == 1:
        return lst[start]
    max_rest = get_max_plus(lst, start + 1, end)
    return lst[start] if lst[start] > max_rest else max_rest
