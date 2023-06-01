# complexidade: O(n)
def people_present_in_library(entries, exits, time: int):
    end = (len(entries) + len(exits)) // 2

    people_present_count = 0
    for index in range(end):
        if entries[index] < time < exits[index]:
            people_present_count += 1

    return people_present_count


print(people_present_in_library([1, 2, 3], [3, 2, 7], 4))
