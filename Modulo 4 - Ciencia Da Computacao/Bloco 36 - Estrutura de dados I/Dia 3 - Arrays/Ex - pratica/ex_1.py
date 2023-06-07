# complexidade: O(n)
def calc_stability(results: list[bool]):
    max_time_without_instabilities = 0

    left = 0
    right = left + 1
    current_occurrences = 1

    while left <= max_time_without_instabilities:
        if results[left] == results[right]:
            right += 1
            current_occurrences += 1
        else:
            left = right
            right = left + 1
            current_occurrences = 1

        if current_occurrences > max_time_without_instabilities:
            max_time_without_instabilities = current_occurrences

    return max_time_without_instabilities


print(calc_stability([0, 1, 1, 1, 0, 0, 1, 1]))
print(calc_stability([1, 1, 1, 1, 0, 0, 1, 1]))
