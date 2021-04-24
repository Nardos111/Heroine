# import requests from requests
import requests
from bs4 import BeautifulSoup as bs
import sys


def remove_values_from_list(the_list, val):
    return [value for value in the_list if value != val]


def scrape():
    url = "https://www.goodreads.com/shelf/show/female-empowerment"
    page = requests.get(url)
    soup = bs(page.content, 'html.parser')
    titles = soup.find_all('a', class_='bookTitle')
    authors = soup.find_all('a', class_='authorName')
    infos = soup.find_all('span', class_="greyText")
    description = []
    for i in infos:
        if (i.get_text() == "(Goodreads Author)" or i.get_text() == "(Curator)"):
            continue
        description.append(i)
    compiled = []
    for title, author, info, link in zip(titles, authors, description, titles):
        compiled.append([title.get_text(), author.get_text(),
                         info.get_text(), link["href"]])

    sys.stdout = open("booklist.txt", "w")

    print(compiled)

    sys.stdout.close()


scrape()
