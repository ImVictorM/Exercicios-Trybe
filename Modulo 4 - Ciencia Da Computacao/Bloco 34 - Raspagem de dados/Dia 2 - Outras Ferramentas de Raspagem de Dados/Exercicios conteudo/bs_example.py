from bs4 import BeautifulSoup
import requests

url = "https://quotes.toscrape.com"
page = requests.get(url)
html_content = page.content

soup = BeautifulSoup(html_content, "html.parser")
