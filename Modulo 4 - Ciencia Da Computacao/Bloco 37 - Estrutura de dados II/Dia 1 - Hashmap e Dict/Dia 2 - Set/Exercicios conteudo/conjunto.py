class Conjunto:
    def __init__(self) -> None:
        self.lista = [False for _ in range(1001)]
        self.indice_ultimo_valor = -1

    def __repr__(self) -> str:
        saida = "{"
        for indice, item in enumerate(self.lista):
            if item:
                if indice == self.indice_ultimo_valor:
                    saida += f"{item}"
                else:
                    saida += f"{item}, "
        saida += "}"
        return str(saida)

    def __contains__(self, item) -> bool:
        return bool(self.lista[item])

    def add(self, item: int):
        self.lista[item] = item
        if item is not False:
            self.indice_ultimo_valor = item

    def union(self, conjunto_b):
        union_lista = self.lista

        for item in conjunto_b.lista:
            if not union_lista[item]:
                union_lista.append(item)

        novo_conjunto = Conjunto()
        for item in union_lista:
            novo_conjunto.add(item)

        return novo_conjunto

    def intersection(self, conjunto_b):
        interseccao = Conjunto()

        for indice in self.lista:
            if self.lista[indice] and conjunto_b.lista[indice]:
                interseccao.add(indice)

        return interseccao

    def difference(self, conjunto_b):
        diferenca = Conjunto()

        for indice in self.lista:
            if self.lista[indice] and not conjunto_b.lista[indice]:
                diferenca.add(indice)

        return diferenca

    def issubset(self, conjunto_b):
        for indice in self.lista:
            if self.lista[indice] and not conjunto_b.lista[indice]:
                return False

        return True

    def issuperset(self, conjunto_b):
        for indice in self.lista:
            if conjunto_b.lista[indice] and not self.lista[indice]:
                return False

        return True
