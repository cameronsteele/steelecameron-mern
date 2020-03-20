# steelecameron.com
### `npm start`
Starts the server.

# Points of Interest
- Server-side rendering of a React application.
- The `<Card />` React component `.map()`s its own children to do some selective rendering.
- Analytics tracking of Javascript page changes (changing the page without reloading).

## `./history-time.js`
*A tiny router written for the portfolio.*

- `bindPathToCallback(path, onCallback, offCallback = false)` binds the `onCallback` function to a path, and optionally binds the `offCallback` function to navigataion away from `path`.
- `bindPropToPath()` binds properties to paths such that they use `onValue` when the path is visited and `offValue` when it is left.

## Libraries / Technologies
- Node.js
- Express.js
- React
- Redux
- Webpack
- PM2
- SASS

# Credits / Technologies
written by Cameron Steele (https://steelecameron.com) using MERN stack
