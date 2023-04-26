def get_smaller_number(number_list):
    min = number_list[0]
    for number in number_list:
        if number < min:
            min = number

    return min


print(get_smaller_number([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]))
