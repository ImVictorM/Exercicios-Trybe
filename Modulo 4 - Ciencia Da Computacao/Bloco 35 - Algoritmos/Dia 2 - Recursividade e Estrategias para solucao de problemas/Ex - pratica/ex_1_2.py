def count_even(n):
    even_count = 0

    for number in range(1, n + 1):
        if number % 2 == 0:
            even_count += 1

    return even_count


print(count_even(10))
