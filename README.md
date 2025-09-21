# camoufox-js-extra

This is the JavaScript client for Camoufox. It is a port of the Python wrapper (doesn't call the original Python scripts).
> **Note (v0.6.3)**: Windows support fixes have been included in this version. Check the installation flow update in [src/pkgman.ts](src/pkgman.ts#L444).

## Installation

```bash
npm install camoufox-js-extra
```

## Usage 

You can launch Playwright-controlled Camoufox using this package like this:

```javascript
import { Camoufox } from 'camoufox-js-extra';

// you might need to run `npx camoufox-js-extra fetch` to download the browser after installing the package

const browser = await Camoufox({
    // custom camoufox options
});
            
const page = await browser.newPage(); // `page` is a Playwright Page instance
```

Alternatively, if you want to use additional Playwright launch options and prefer running it through Chrome, you can launch the Camoufox instance like this:

```javascript
import { launchOptions } from 'camoufox-js-extra';
import { chromium } from 'playwright-core';

// you might need to run `npx camoufox-js-extra fetch` to download the browser after installing the package

const browser = await chromium.launch({
    ...await launchOptions({ /* Camoufox options */ }),
    // other Playwright options, overriding the Camoufox options
});
            
const page = await browser.newPage(); // `page` is a Playwright Page instance
```

### Launching a Camoufox server

Camoufox can be ran as a remote websocket server. It can be accessed from other devices, and languages other than Python supporting the Playwright API.

```javascript
import { launchServer } from 'camoufox-js-extra';
import { chromium } from 'playwright-core';

// you might need to run `npx camoufox-js-extra fetch` to download the browser after installing the package

const server = await launchServer({ port: 8888, ws_path: '/camoufox' });
const browser = await chromium.connect(server.wsEndpoint());

const page = await browser.newPage();

// ...
// Use your browser instance as usual
// ...

await browser.close();  
await server.close(); // Close the server when done
```

## More info

See https://camoufox.com/ or https://github.com/daijro/camoufox for more information on Camoufox.



