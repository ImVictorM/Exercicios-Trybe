import pandas as pd

file_path = "fifa_audience.csv"

df = pd.read_csv(file_path)

if __name__ == "__main__":
    general_info = df.info()

    print(general_info)
