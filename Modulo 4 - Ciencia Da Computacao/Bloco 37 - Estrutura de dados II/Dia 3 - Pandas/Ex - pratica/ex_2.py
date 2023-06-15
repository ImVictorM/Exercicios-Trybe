from ex_1 import df

population_share_greater_than_2 = df["country"].loc[df["population_share"] > 2]

print(population_share_greater_than_2)
