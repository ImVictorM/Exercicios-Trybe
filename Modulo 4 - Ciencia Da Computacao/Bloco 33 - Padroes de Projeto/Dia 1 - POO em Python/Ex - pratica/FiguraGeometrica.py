from abc import ABC, abstractmethod


class FiguraGeometrica(ABC):
    @abstractmethod
    def area(self):
        ...

    @abstractmethod
    def perimetro(self):
        ...
