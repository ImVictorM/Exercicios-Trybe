dictionary = {value: value * 2 for value in range(3, 21)}
print(dictionary)


def count_letters(string: str):
    letter_count = dict()

    for letter in string:
        if letter in letter_count:
            letter_count[letter] += 1
        else:
            letter_count[letter] = 1

    return letter_count


print(count_letters("bbbbaaaacccaaaaaaddddddddccccccc"))
print(count_letters("coxinha"))


def triple_for_odd(dictionary: dict):
    for key in dictionary.keys():
        if key % 2 != 0:
            dictionary[key] = key * 3

    return dictionary


print(triple_for_odd(dictionary))
