from FiguraGeometrica import FiguraGeometrica


class Quadrado(FiguraGeometrica):
    def __init__(self, lado) -> None:
        self.lado = lado

    def area(self):
        return self.lado**2

    def perimetro(self):
        return self.lado * 4


q = Quadrado(5)
print(q.area())
print(q.perimetro())
