def sum_antecessors(n):
    sum = 0
    for number in range(1, n + 1):
        sum += number
    return sum


print(sum_antecessors(6))
