from ex_1 import df

uefa = df.loc[df["confederation"] == "UEFA"]

audience_avg = round(uefa["tv_audience_share"].mean(), 2)

print(audience_avg)
