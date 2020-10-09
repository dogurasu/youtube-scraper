const puppeteer = require('puppeteer');

async function scrapeChannel(url) {
    // startup browser and go to URL
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    // PLAN: extract channel name and avatar URL
    // $x is the xPath utility function
    const [el] = await page.$x('/html/body/ytd-app/div/ytd-page-manager/ytd-browse/div[3]/ytd-c4-tabbed-header-renderer/app-header-layout/div/app-header/div[2]/div[2]/div/div[1]/div/div[1]/ytd-channel-name/div/div/yt-formatted-string');
    const text = await el.getProperty('textContent');
    const name = await text.jsonValue();

    // extract avatar (with XPATH to URL)
    // de-structuring the element object returned by page.$x
    const [el2] = await page.$x('//*[@id="img"]');
    const src = await el2.getProperty('src');
    const avatarURL = await src.jsonValue();

    browser.close();

    // console.log(name, avatarURL);

    return {
        "name": name,
        "avatarURL": avatarURL,
        "url": url
    };

}

// scrapeChannel('https://www.youtube.com/c/AaronJack');

module.exports = {
    scrapeChannel: scrapeChannel
}