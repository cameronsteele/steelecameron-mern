import React from 'react';
import Card from './Card.jsx';

import {
	Telephenesis,
	FoundSoundNation,
	KINDSnacks,
	CloudCred,
	EchoSign,
	// ApplyGem,
	ColonieNYC
} from './cards';

// require('../primary.css');

const App = () => (
	<div>
		<Card nature="text">
			<h1>Cameron Steele</h1>
			<h2>developer</h2>
			<h3>designer</h3>
			<a className="email" href="mailto:cameronsteele@steelecameron.com">
				cameronsteele@steelecameron.com
			</a><br />
			{/*<!-- <a className="phone" href="tel:+13479797266">347-979-7266</a> -->*/}
			{/*<!-- <a href="https://github.com/cameronsteele"><i className="fab fa-github"></i></a> -->*/}
		</Card>

		<Telephenesis />
		<FoundSoundNation />
		<KINDSnacks />
		<CloudCred />
		<EchoSign />
		{/*<ApplyGem />*/}
		<ColonieNYC />
	</div>
);

export default App;