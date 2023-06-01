# complexidade: O(n)
def shuffle_cards(cards: list[int]):
    mid = len(cards) // 2
    left_part = cards[:mid]
    right_part = cards[mid:]

    shuffled_cards = []
    for index in range(mid):
        shuffled_cards.append(left_part[index])
        shuffled_cards.append(right_part[index])

    return shuffled_cards


print(shuffle_cards([2, 6, 4, 5]))
print(shuffle_cards([1, 4, 4, 7, 6, 6]))
