import json
import random


def read_pokemon_file():
    with open("pokemons.json", "r") as pokemon_file:
        pokemon_list = json.load(pokemon_file)["results"]
        pokemons = [pokemon["name"] for pokemon in pokemon_list]
        return pokemons


pokemon_list = read_pokemon_file()

pokemon_to_guess = random.choice(pokemon_list)

must_continue = True
user_errors = 0

while must_continue:
    user_guess = input("Quem é esse pokemon?\n")

    if user_guess.lower() != pokemon_to_guess.lower():
        user_errors += 1
        pokemon_hint = pokemon_to_guess[:user_errors]
        print(f"Dica - começa com: {pokemon_hint}")
    else:
        must_continue = False
        print(
            f"""Parabéns, você acertou!
            o pokemons escolhido é o {pokemon_to_guess}"""
        )
