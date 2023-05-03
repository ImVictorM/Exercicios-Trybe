def get_biggest_name(name_list):
    biggest_name = ""
    for name in name_list:
        if len(name) > len(biggest_name):
            biggest_name = name
    return biggest_name


names = ["victor", "lamborguine", "sevih", "chapolin"]
print(get_biggest_name(names))
