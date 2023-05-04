from FiguraGeometrica import FiguraGeometrica
from math import pi


class Circulo(FiguraGeometrica):
    def __init__(self, raio) -> None:
        self.raio = raio

    def perimetro(self):
        return 2 * pi * self.raio

    def area(self):
        return pi * (self.raio**2)
