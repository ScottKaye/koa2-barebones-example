# Koa2 Barebones Example

## Production
Run `webpack` to transpile `server.js` to the `bin/` folder, then run `node bin/server` in production.

## Development
Run `node server` to launch `server.js` with `babel-register` and `babel-polyfill` processing each request.  

------

This is a very small example to show the minimum amount of code you'll need to get up and running with Koa2, right now.

Basically, the key point is this:

```js
require("babel-register")({
	presets: ["es2015", "stage-0"]
});

require("babel-polyfill");
```