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
