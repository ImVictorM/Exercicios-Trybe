def fizz_buzz(number):
    fizz_buzz_list = []
    for n in range(1, number + 1):
        if n % 3 == 0 and n % 5 == 0:
            fizz_buzz_list.append("FizzBuzz")
        elif n % 3 == 0:
            fizz_buzz_list.append("Fizz")
        elif n % 5 == 0:
            fizz_buzz_list.append("Buzz")
        else:
            fizz_buzz_list.append(n)

    return fizz_buzz_list


print(fizz_buzz(15))
