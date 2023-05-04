from FiguraGeometrica import FiguraGeometrica


class Retangulo(FiguraGeometrica):
    def __init__(self, base, altura) -> None:
        self.base = base
        self.altura = altura

    def area(self):
        return self.base * self.altura

    def perimetro(self):
        return (self.base * 2) + (self.altura * 2)


r = Retangulo(5, 7)
print(r.area())
print(r.perimetro())
