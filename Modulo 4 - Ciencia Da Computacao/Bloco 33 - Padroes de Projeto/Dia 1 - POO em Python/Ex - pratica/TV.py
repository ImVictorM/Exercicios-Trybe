class TV:
    def __init__(self, tamanho) -> None:
        self.volume = 50
        self.canal = 1
        self.tamanho = tamanho
        self.ligada = False

    def aumentar_volume(self):
        if self.volume < 99:
            self.volume += 1

    def diminuir_volume(self):
        if self.volume > 0:
            self.volume -= 1

    def modificar_canal(self, novo_canal):
        if 1 <= novo_canal <= 99:
            self.canal = novo_canal
        else:
            raise ValueError("Canal fora do alcance")

    def ligar_desligar(self):
        self.ligada = not self.ligada
