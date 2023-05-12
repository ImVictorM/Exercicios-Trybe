class AcenderLuz:
    def __init__(self) -> None:
        self.acesa = False

    def acao(self):
        self.acesa = True
        print(f"Luz acesa? {self.acesa}")


class PrepararCafe:
    def __init__(self) -> None:
        self.pronto = False

    def acao(self):
        self.pronto = True
        print(f"Café pronto? {self.pronto}")


class Alarme:
    def __init__(self):
        self.rotinas = [AcenderLuz(), PrepararCafe()]

    def despertar(self):
        for rotina in self.rotinas:
            rotina.acao()


Alarme().despertar()
