from parsel import Selector
import requests


response = requests.get("http://books.toscrape.com/")
selector = Selector(text=response.text)
# print(selector.css("div.image_container a::attr(href)").get())

# print(selector.css('img.thumbnail').getall())
# for item in selector.css('img.thumbnail').getall():
#    print(item)
thumbnail_url = selector.css("div.image_container a::attr(href)").get()

thumbnail_request = requests.get("http://books.toscrape.com" + thumbnail_url)
thumbnail_selector = Selector(text=thumbnail_request.text)
book_title = thumbnail_selector.css("div.product_main h1")
print(book_title.get())

# thumbnail_url_selector = "div.image_container a::attr(href)"
# for url in selector.css(thumbnail_url_selector).getall():
#     thumbnail_request = requests.get("http://books.toscrape.com" + url)
#     thumbnail_selector = Selector(text=thumbnail_request.text)
#     book_title = thumbnail_selector.css("div.product_main h1")
#     print(book_title.get())
