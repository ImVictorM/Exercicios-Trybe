user_numbers = input(
    "Digite uma sequencia de números separando-os por espaço: "
)

total = 0
error = None

for number in user_numbers.split(" "):
    if number.isdigit():
        total += int(number)
    else:
        error = f"Erro ao somar valores, {number} é um valor inválido."
        break

if error:
    print(error)
else:
    print(f"somatória: {total}")
