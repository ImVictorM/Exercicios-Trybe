def count_even(n):
    even_count = 0

    for number in range(1, n + 1):
        if number % 2 == 0:
            even_count += 1

    return even_count


def rec_count_even(n):
    if n == 1:
        return 0
    else:
        if n % 2 == 0:
            return 1 + rec_count_even(n - 1)

        return rec_count_even(n - 1)
