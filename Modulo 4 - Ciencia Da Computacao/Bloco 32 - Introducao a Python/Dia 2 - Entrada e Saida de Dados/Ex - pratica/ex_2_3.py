import random


def get_words_from_file():
    with open("words.txt", "r") as words_file:
        words = [line.strip() for line in words_file.readlines()]
        return words


words = get_words_from_file()
chosen_word = random.choice(words)
shuffled_chosen_word = "".join(random.sample(chosen_word, len(chosen_word)))

user_attempt = input(f"Adivinhe a palavra: {shuffled_chosen_word}\n")

if user_attempt == chosen_word:
    print("Você acertou!")
else:
    print(f"Você errou! a palavra correta é: {chosen_word}")
