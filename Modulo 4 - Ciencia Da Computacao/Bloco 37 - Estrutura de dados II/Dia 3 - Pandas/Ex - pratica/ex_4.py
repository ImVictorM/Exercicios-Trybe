from ex_1 import df

conmeboll_countries = df["country"].loc[df["confederation"] == "CONMEBOL"]

print(conmeboll_countries)
