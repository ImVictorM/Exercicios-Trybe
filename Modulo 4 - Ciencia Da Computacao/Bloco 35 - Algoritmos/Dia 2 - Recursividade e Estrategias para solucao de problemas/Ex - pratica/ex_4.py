def calc_mdc(n1, n2):
    if n2 == 0:
        return n1
    return calc_mdc(n2, n1 % n2)


calc_mdc(3, 6)
