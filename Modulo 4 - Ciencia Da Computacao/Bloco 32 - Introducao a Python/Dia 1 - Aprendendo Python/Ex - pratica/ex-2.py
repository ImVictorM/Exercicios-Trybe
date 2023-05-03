def calc_avg(number_list):
    total = 0
    for value in number_list:
        total += value
    avg = total / len(number_list)
    return avg


print(calc_avg([1, 4, 5, 2]))
