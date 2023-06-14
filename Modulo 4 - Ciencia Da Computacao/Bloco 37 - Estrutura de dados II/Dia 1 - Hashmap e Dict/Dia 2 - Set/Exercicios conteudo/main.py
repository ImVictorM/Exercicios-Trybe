from conjunto import Conjunto

if __name__ == "__main__":
    c = Conjunto()
    valores = [0, 10, 100, 1000]
    for valor in valores:
        c.add(valor)

    print(c)
    print(10 in c)
    print(2 in c)

    c1 = Conjunto()
    c2 = Conjunto()
    for valor in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]:
        c1.add(valor)
        c2.add(valor + 10)

    c2.add(4)

    print(c1.union(c2))
    print(c1.intersection(c2))

    c3 = Conjunto()
    for i in [1, 2, 3]:
        c3.add(i)

    c4 = Conjunto()
    for i in [7, 2, 10]:
        c4.add(i)

    c5 = Conjunto()
    c6 = c3.union(c4)

    print(c3.issubset(c6))
    print(c6.issuperset(c3))
    print(c5.issubset(c6))
