import json
import csv


def get_books_file():
    with open("books.json", "r") as books_file:
        books = json.load(books_file)
        return books


def count_books_by_category(books):
    books_by_category = {}

    for book in books:
        for category in book["categories"]:
            if category in books_by_category:
                books_by_category[category] += 1
            else:
                books_by_category[category] = 1

    return books_by_category


def books_percentage_per_category(categories, books_quantity):
    report = [
        (category, curr_quantity / books_quantity)
        for category, curr_quantity in categories.items()
    ]
    return report


def write_csv_file(data_to_write):
    headers = ["categoria", "porcentagem"]
    with open("books_report.csv", "w", newline="") as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(headers)
        writer.writerows(data_to_write)


def main():
    book_list = get_books_file()
    books_total = len(book_list)
    category_map = count_books_by_category(book_list)
    report = books_percentage_per_category(category_map, books_total)
    write_csv_file(report)


main()
