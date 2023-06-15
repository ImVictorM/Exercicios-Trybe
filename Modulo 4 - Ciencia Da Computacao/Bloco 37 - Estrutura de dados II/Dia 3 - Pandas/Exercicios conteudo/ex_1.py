import pandas as pd

people = {
    "name": ["person1", "person2", "person3"],
    "fav_food": ["food1", "food2", "food3"],
    "fav_dessert": ["dessert1", "dessert2", "dessert3"]
}

df = pd.DataFrame(people)

if __name__ == "__main__":
    print(df)
