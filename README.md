# PS5 Auto Buyer

**WARNING: YOU MAY GET IP BLOCKED BY BEST BUY, USE AT YOUR OWN RISK**

Doesn't actually go through the entire process of buying, but it will refresh the Best Buy's PS5 page until the "Add to cart" button is enabled. Once the button is enabled, it will click on the "Add to cart" button until it is finally in your cart.

### Pre-requisites

**WARNING: YOU MAY GET IP BLOCKED BY BEST BUY, USE AT YOUR OWN RISK**

- Node v8+

### Usage

**WARNING: YOU MAY GET IP BLOCKED BY BEST BUY, USE AT YOUR OWN RISK**

1. Install dependencies `$ npm i` (will take some time because it's downloading chromium)
1. `$ npm start` will open a new chromium browser and begin refreshing until the add to cart button is enabled. It will attempt to add to cart until the "Added to cart" modal pops up.
