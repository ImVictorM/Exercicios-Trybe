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


def get_all_p():
    site = "https://www.wikimetal.com.br"
    endpoint = "/iron-maiden-scorpions-kiss-veja-melhores-albuns-1982/"
    url = site + endpoint
    chrome.get(url)
    p_list = [p_elem.text for p_elem in chrome.find_elements(By.TAG_NAME, "p")]
    print(p_list)


if __name__ == "__main__":
    get_all_p()
    sleep(3)


chrome.quit()
