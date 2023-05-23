from selenium import webdriver
from time import sleep
from selenium.webdriver.common.by import By


options = webdriver.ChromeOptions()
options.add_argument("--ignore-certificate-errors")
options.add_argument("--ignore-ssl-errors=yes")
options.add_argument("--start-maximized")

chrome = webdriver.Remote(
    command_executor="http://localhost:4444/wd/hub", options=options
)


def get_quote_content():
    endpoint = "https://quotes.toscrape.com/"
    chrome.get(endpoint)
    quote = chrome.find_element(By.CLASS_NAME, "quote").text
    print(quote)


if __name__ == "__main__":
    get_quote_content()
    sleep(3)


chrome.quit()
