const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const ua = require('random-useragent');

const config = require('./config/config.json');

puppeteer.use(StealthPlugin());

const waitForAddToCartButton = async page => {
  console.log('waiting for add to cart button to appear');
  let addToCartButton;
  let attempt = 0;

  while (!addToCartButton) {
    await page.waitFor(2500);
    addToCartButton = await page.$(config.ADD_TO_CART_BUTTON);
    console.log(`reloading, attempt: ${attempt++}`);
    await page.reload();
  }

  console.log('found selector');
};

const addItemToCart = async page => {
  console.log('attempting to add to cart');
  let didAddToCart = null;
  let attempt = 0;

  while (!didAddToCart) {
    console.log(`clicking add to cart button ${attempt++}`);
    await page.click(config.ADD_TO_CART_BUTTON, { delay: 324 });
    await page.waitFor(rng(2000, 4000));
    didAddToCart = await page.$(config.ADDED_TO_CART);
  }

  console.log('successfully added to cart');
};

const rng = (min = 0, max = 100) => Math.floor(Math.random() * (max - min)) + min;

const run = async () => {
  let browser, page;

  try {
    browser = await puppeteer.launch({ headless: false }); // open a browser
    page = (await browser.pages())[0]; // use the initial page opened with the browser

    await page.setUserAgent(ua.getRandom()); // set a random user agent (helps avoid detection)
    await page.setViewport({ width: 1366, height: 768 });

    console.log('navigating to url');
    await page.goto(config.URL);

    await waitForAddToCartButton(page);
    await addItemToCart(page);
  } catch (error) {
    console.error(error);
  }
};

run();

module.exports = {
  run,
};
