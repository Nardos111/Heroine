# import requests from requests
import requests
from bs4 import BeautifulSoup as bs
import sys
import re
import json


def get_news():
    url = "https://newsapi.org/v2/everything?q=women%20empowerment&apiKey=423b4fa3ae35431b927b27cdcf3bcace"
    page = requests.get(url)
    soup = bs(page.content, 'html.parser')
    jsonData = json.loads(soup.get_text())
    json_object = json.dumps(jsonData, indent=4)
    with open("data.json", "w") as outfile:
        outfile.write(json_object)


get_news()
