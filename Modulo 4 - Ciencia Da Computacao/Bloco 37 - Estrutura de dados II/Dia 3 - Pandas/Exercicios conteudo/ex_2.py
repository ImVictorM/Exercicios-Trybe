from ex_1 import people
import pandas as pd


print(pd.Series(people["name"]))
print(pd.Series(people["fav_food"]))
print(pd.Series(people["fav_dessert"]))
