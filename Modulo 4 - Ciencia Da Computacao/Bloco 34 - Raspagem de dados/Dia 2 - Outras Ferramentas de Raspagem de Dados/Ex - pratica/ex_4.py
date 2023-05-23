from bs4 import BeautifulSoup
import requests

endpoint = "https://pt.wikipedia.org/wiki/Rock_in_Rio%22"
html_content = requests.get(endpoint).content

selector = BeautifulSoup(html_content, "html.parser")
page_links = [
    link["href"]
    for link in selector.find_all("a")
    if link["href"][0] == "/" or link['href'][-1] == "/"
]

print(page_links)
