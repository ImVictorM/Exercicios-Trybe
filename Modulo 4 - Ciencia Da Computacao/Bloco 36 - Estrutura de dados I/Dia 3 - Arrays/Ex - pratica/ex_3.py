# complexidade: O(n²)
def good_combinations(products: list[int]):
    end = len(products)
    combinations_quantity = 0

    for i in range(end):
        next = i + 1
        for j in range(next, end):
            if products[i] == products[j]:
                combinations_quantity += 1

    return combinations_quantity


print(good_combinations([1, 3, 1, 1, 2, 3]))
