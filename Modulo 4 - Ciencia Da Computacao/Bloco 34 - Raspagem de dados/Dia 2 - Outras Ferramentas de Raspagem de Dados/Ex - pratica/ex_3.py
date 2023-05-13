from selenium import webdriver
from selenium.webdriver.common.by import By

options = webdriver.ChromeOptions()
options.add_argument("--ignore-certificate-errors")
options.add_argument("--ignore-ssl-errors=yes")
options.add_argument("--start-maximized")

chrome = webdriver.Remote(
    command_executor="http://localhost:4444/wd/hub", options=options
)


def get_pages_sections(links):
    all_sections = []
    for link in links:
        print(f"Raspando página {link} ...")
        chrome.get(link)
        first_section = chrome.find_element(
            By.CSS_SELECTOR, "div.entry-content p"
        ).text
        all_sections.append(first_section)
    return all_sections


def extract_page_info():
    url = "https://diolinux.com.br/"
    chrome.get(url)
    titles = [
        title.text
        for title in chrome.find_elements(By.CSS_SELECTOR, "h3.post-title")
    ]
    links = [
        link.get_attribute("href")
        for link in chrome.find_elements(By.CSS_SELECTOR, "h3.post-title a")
    ]

    page_sections = get_pages_sections(links)

    return {"titles": titles, "links": links, "page_sections": page_sections}


if __name__ == "__main__":
    try:
        print(extract_page_info())
    finally:
        chrome.quit()
