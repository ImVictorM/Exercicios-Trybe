from pymongo import MongoClient


def count_published_books():
    with MongoClient() as client:
        db = client.library
        count = 0
        for _ in db.books.find({"STATUS": "PUBLISH"}):
            count += 1
        return count


print(count_published_books())
