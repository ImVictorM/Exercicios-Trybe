from ex_1 import df

country_per_confederation = (
    df.groupby(by=["confederation"])
    .count()["country"]
    .reset_index(name="country_quantity")
)

print(country_per_confederation)
