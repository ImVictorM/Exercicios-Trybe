from ex_1 import fizz_buzz


def test_must_return_a_list_with_the_same_length_of_the_parameter():
    expected_len = 4
    assert len(fizz_buzz(4)) == expected_len


def test_must_return_an_empty_list_when_parater_is_negative():
    assert fizz_buzz(-1) == []


def test_must_return_a_list_of_only_numbers():
    expected_result = [1, 2]
    assert fizz_buzz(2) == expected_result


def test_must_return_a_list_with_numbers_replaced():
    expected_result = [
        1,
        2,
        "Fizz",
        4,
        "Buzz",
        "Fizz",
        7,
        8,
        "Fizz",
        "Buzz",
        11,
        "Fizz",
        13,
        14,
        "FizzBuzz",
    ]
    assert fizz_buzz(15) == expected_result
