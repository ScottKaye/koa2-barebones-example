# Koa2 Barebones Example

> I shouldn't say *production*, really, since you probably wouldn't want to run `babel-register` in production.  The other route (for production) is to pre-transpile your application with babel outside of a node process as if it were meant for the browser, then have node run that.

This is a very small example to show the minimum amount of code you'll need to get up and running with Koa2, right now.

Basically, the key point is this:

```js
require("babel-register")({
	presets: ["es2015", "stage-0"]
});

require("babel-polyfill");
```

In `server.js`.  `babel-register` allows Babel to transpile code imported through `require`, and `babel-polyfill` includes things like the regenerator runtime for use with `async`.
