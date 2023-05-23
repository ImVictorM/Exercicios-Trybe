# importação do webdriver, que é o que possibilita a implementação para todos
# os principais navegadores da web
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException
from time import sleep

# Para usar o chrome ao invés do firefox:
# trocamos FirefoxOptions por ChromeOptions
# caso esteja utilizando o docker, atente-se ao container sendo utilizado.
options = webdriver.ChromeOptions()
options.add_argument("--ignore-certificate-errors")
options.add_argument("--ignore-ssl-errors=yes")
options.add_argument("--start-maximized")

chrome = webdriver.Remote(
    command_executor="http://localhost:4444/wd/hub", options=options
)


def scrape(url):
    chrome.get(url)
    books = []
    # Itera entre os elementos com essa classe
    for book in chrome.find_elements(By.CLASS_NAME, "product_pod"):
        # Cria dict vazio para guardar os elementos capturados
        new_item = {}

        # Cria uma chave 'title' no dict que vai receber o resultado da busca
        # O título está em uma tag anchor que está dentro de uma tag 'H3'
        new_item["title"] = (
            book.find_element(By.TAG_NAME, "h3")
            .find_element(By.TAG_NAME, "a")
            .get_attribute("innerHTML")
        )

        # O trecho do book está em um elemento da classe 'price_color'
        new_item["price"] = book.find_element(
            By.CLASS_NAME, "price_color"
        ).get_attribute("innerHTML")

        # O link está dentro de um atributo 'href'
        new_item["link"] = (
            book.find_element(By.CLASS_NAME, "image_container")
            .find_element(By.TAG_NAME, "a")
            .get_attribute("href")
        )

        books.append(new_item)
    return books


all_books = []

next_page_link = chrome.find_element(By.CLASS_NAME, "next").get_attribute(
    "innerHTML"
)

url_request = "https://books.toscrape.com/"

while next_page_link:
    # Usa o método extend para colocar todos os elementos de uma lista dentro
    # de outra
    all_books.extend(scrape(url_request))
    try:
        url_request = (
            chrome.find_element(By.CLASS_NAME, "next")
            .find_element(By.TAG_NAME, "a")
            .get_attribute("href")
        )
    except NoSuchElementException:
        print("exception handled")
        break


print(all_books)

# espera 10 segundos
sleep(10)
# encerra o navegador, importante quando usamos containers
chrome.quit()
