from collections import Counter


class Estatistica:
    def __init__(self, numbers) -> None:
        self.numbers = numbers

    def media(self):
        return sum(self.numbers) / len(self.numbers)

    def mediana(self):
        numeros_ordenados = sorted(self.numbers)

        if len(numeros_ordenados) % 2 == 0:
            index_primeiro_elem_central = len(numeros_ordenados) // 2

            elementos_centrais = numeros_ordenados[
                index_primeiro_elem_central: index_primeiro_elem_central + 2
            ]

            return (sum(elementos_centrais)) / 2
        else:
            return numeros_ordenados[len(numeros_ordenados) // 2]

    def moda(self):
        return Counter(self.numbers).most_common()[0][0]


e = Estatistica([1, 2, 3, 2, 5, 2])
print(e.media())
print(e.mediana())
print(e.moda())
