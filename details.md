Based on: https://www.youtube.com/watch?v=7FjhF6Hy9gY

Application Flow
 - Front end (vanilla JS) sends a URL to an  API we build to add and retrieve data to/from our SQL database
 - Our API will interact with our Scrapers to scrape data from youTube and Amazon
 - finally our front end will be refreshed to update our data

Stack
 - Front-End is pure JS
 - API will be made with Node/Express
 - Scraper made with Puppeteer
 - DB - Postgres

FrontEnd
 - Header, input + button
 - render "divs" from JSON
 - Will link our form to our API

API plan
 - 2 main routes: GET /creators and POST /creators

Scraper
 - just a function that takes URL as input
 - Takes in URL to YouTube, Grabs Data, Outputs data to DB
 - when scraper gets to YouTube, it'll see channel and # subscribers
    - will grab Avatar URL and image and title of channel
