# gitdemo

SWEMatch Git/Github Workshop: Web app to get random animal photos
- based off of: https://github.com/kitkashi/apiPractice

## How it works

1. `index.html` shows a heading, a button, and an empty `#dataContainer` div.
2. `script.js` attaches a click handler to the button.
3. On click, it shows "Loading photo..." and fetches a random image.
4. The API returns JSON like `{ "message": "<image url>", "status": "success" }`. The script puts `message` into an `<img>` tag inside `#dataContainer`.
5. If the request fails (network error or non-2xx response), it shows "Failed to load dog image. Please try again."
6. `styles.css` centers the button and image in a vertical column that fills the viewport.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page structure |
| `script.js` | Button click handler and API call |
| `styles.css` | Layout styling |

## Running 

No build step or dependencies. Open `index.html` in a browser (needs an internet connection), then click the button.


