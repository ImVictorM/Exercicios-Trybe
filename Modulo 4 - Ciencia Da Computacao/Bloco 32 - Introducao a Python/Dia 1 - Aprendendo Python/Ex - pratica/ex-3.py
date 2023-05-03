def make_rectangle(n):
    if n > 1:
        for line in range(n):
            line = n * "*"
            print(line)


make_rectangle(5)
