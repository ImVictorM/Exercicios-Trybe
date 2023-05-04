from collections.abc import Iterable, Iterator


class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return "<%s de %s>" % (self.valor, self.naipe)


class BaralhoIterator(Iterator):
    def __init__(self, cartas, reverse=False) -> None:
        self.cartas = cartas
        self.reverse = reverse
        self.controlador = 0 if not reverse else -1

    def __next__(self):
        try:
            carta_corrente = self.cartas[self.controlador]
        except IndexError:
            raise StopIteration()
        else:
            if not self.reverse:
                self.controlador += 1
            else:
                self.controlador -= 1

            return carta_corrente


class Baralho(Iterable):
    naipes = "copas ouros espadas paus".split()
    valores = "A 2 3 4 5 6 7 8 9 10 J Q K".split()

    def __init__(self, *, reverse=False):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]
        self.reverse = reverse

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return BaralhoIterator(self._cartas, self.reverse)
