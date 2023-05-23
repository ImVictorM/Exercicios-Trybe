from pymongo import MongoClient


def get_books_by_category(category) -> list[dict]:
    with MongoClient() as client:
        db = client.library
        books_by_category = db.books.find(
            {"categories": category}, projection=["title"]
        )
        return books_by_category


if __name__ == "__main__":
    category = input("Insira a categoria para ser buscada: \n")
    books = get_books_by_category(category)
