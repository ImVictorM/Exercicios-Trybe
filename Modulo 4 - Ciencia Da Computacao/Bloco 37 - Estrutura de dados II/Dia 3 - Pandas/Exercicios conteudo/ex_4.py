import pandas as pd

df = pd.read_csv("pesquisa_pao_na_chapa.csv")

print(df)

# 1
min_queijo = df["preco_reais"].loc[df["produto"] == "queijo muçarela"].min()

dia_semana = df["dia_da_semana"].loc[
    (df["preco_reais"] == min_queijo) & (df["produto"] == "queijo muçarela")
]

print(dia_semana)


# 2
max_tomate = df["preco_reais"].loc[df["produto"] == "tomate"].max()

fornecedor_max_tomate = df["nome_do_fornecedor"].loc[
    (df["preco_reais"] == max_tomate) & (df["produto"] == "tomate")
]

print(fornecedor_max_tomate)

# 3
test = df["dia_da_semana"].loc[
    (df["nome_do_fornecedor"] == "soma pão") & (df["preco_reais"].isnull())
]
print(test)

# 4
df2 = (
    df.groupby(by="produto")
    .mean(numeric_only=True)
    .rename(columns={"preco_reais": "preco_medio"})
)

print(df2)
