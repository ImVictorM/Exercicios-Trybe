import requests

endpoint = "https://scrapethissite.com/pages/advanced/?gotcha=headers"
headers = {
    "User-Agent": 'chrome',
    "Accept": "text/html"
}

response = requests.get(endpoint, headers)

assert "bot detected" not in response.text
