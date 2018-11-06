import path from 'path';
import Express from 'express';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import appReducer from './reducers.js';
import App from './components/App.jsx';

const app = Express();
const port = 3000;

app.use(Express.static('public'));

app.use(handleRender);

function handleRender(req, res) {
	const store = createStore(appReducer);

	const html = renderToString(
		<Provider store={store}>
			<App />
		</Provider>
	);

	const preloadedState = store.getState();

	res.send(renderFullPage(html, preloadedState));
}

function renderFullPage(html, preloadedState) {
	return `
	<!doctype html>
	<html>
		<head>
			<script async src="https://www.googletagmanager.com/gtag/js?id=UA-8706523-3"></script>
			<script>
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', 'UA-8706523-3');
			</script>

			<meta charset="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1">


			<script defer src="https://use.fontawesome.com/releases/v5.0.9/js/brands.js" integrity="sha384-qJKAzpOXfvmSjzbmsEtlYziSrpVjh5ROPNqb8UZ60myWy7rjTObnarseSKotmJIx" crossorigin="anonymous"></script>
			<script defer src="https://use.fontawesome.com/releases/v5.0.9/js/fontawesome.js" integrity="sha384-2IUdwouOFWauLdwTuAyHeMMRFfeyy4vqYNjodih+28v2ReC+8j+sLF9cK339k5hY" crossorigin="anonymous"></script>

			<link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,300" rel="stylesheet" type="text/css">
			<link rel="stylesheet" type="text/css" href="/primary.css" />
			<link rel="shortcut icon" href="/favicon.ico" />
			<title>Cameron Steele - Web and Software Developer</title>
		</head>
		<body>
			<main id="root">${html}</main>
			<script>
				window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
			</script>

			<script type="text/javascript" src="/clientBuild.js"></script>
		</body>
	</html>`;
}

app.listen(port);
