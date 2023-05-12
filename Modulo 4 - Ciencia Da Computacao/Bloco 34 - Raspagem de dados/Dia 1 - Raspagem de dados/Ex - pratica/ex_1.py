import requests

endpoint = "https://httpbin.org/encoding/utf8"

response = requests.get(endpoint)

print(response.text)
