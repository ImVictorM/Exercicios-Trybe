def print_right_triangle(n):
    if n > 1:
        for quantity in range(1, n + 1):
            line = quantity * "*"
            print(line)


print_right_triangle(6)
