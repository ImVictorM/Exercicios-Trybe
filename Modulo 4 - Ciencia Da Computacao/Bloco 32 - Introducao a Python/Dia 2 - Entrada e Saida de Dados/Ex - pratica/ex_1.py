def print_name(name):

    for index in range(len(name)):
        sliced_name = name[:len(name) - index]
        print(sliced_name)


name = str(input('Digite seu nome: '))
print_name(name)
