import requests

endpoint = "https://api.github.com/users"

response = requests.get(endpoint)

users = response.json()

for user in users:
    username = user["login"]
    url = user["url"]
    print(f"{username} {url}")
