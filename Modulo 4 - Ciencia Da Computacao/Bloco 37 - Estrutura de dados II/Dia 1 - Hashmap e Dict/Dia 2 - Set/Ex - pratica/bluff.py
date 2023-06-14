def calc_bluff_points(
    p1_chosen_numbers: list, p2_chosen_numbers: list
) -> tuple[int, int]:
    p1_set = set(p1_chosen_numbers)
    p2_set = set(p2_chosen_numbers)

    p1_bluffs = p1_set.difference(p2_set)
    p2_bluffs = p2_set.difference(p1_set)

    p1_total_points = max(p1_bluffs) - min(p1_bluffs)
    p2_total_point = max(p2_bluffs) - min(p2_bluffs)

    return (p1_total_points, p2_total_point)


def bluff(participants: dict[str, list]) -> str:
    player1, player2 = participants.items()

    p1_points, p2_points = calc_bluff_points(player1[1], player2[1])

    if p1_points > p2_points:
        return player1[0]
    elif p2_points > p1_points:
        return player2[0]
    else:
        return "Draw"


if __name__ == "__main__":
    participants = {"Clara": [0, 1, 5, 9, 10], "Marco": [0, 2, 8, 9, 10]}
    print(bluff(participants))
