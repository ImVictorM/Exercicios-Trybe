class Soldier:
    def __init__(self, level):
        self.level = level

    def attack(self):
        return self.level * 1


class Jedi:
    def __init__(self, level):
        self.level = level

    def attack_with_saber(self):
        return self.level * 100


class SaberCharacterAdapter:
    def __init__(self, character_with_saber):
        self.character = character_with_saber

    def attack(self):
        return self.character.attack_with_saber()


class StarWarsGame:
    def __init__(self, character):
        self.character = character

    def fight_enemy(self):
        print(f"You caused {self.character.attack()} of damage to the enemy")


StarWarsGame(Soldier(5)).fight_enemy()
StarWarsGame(SaberCharacterAdapter(Jedi(20))).fight_enemy()
