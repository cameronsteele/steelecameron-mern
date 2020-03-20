import React, { Component } from 'react';
import Card from './Card.jsx';
import HistoryTime from '../history-time';
import { changePage } from '../actions';
import { connect } from 'react-redux';

import {
	Telephenesis,
	FoundSoundNation,
	KINDSnacks,
	CloudCred,
	EchoSign,
	ApplyGem,
	Steelecameron,
	ColonieNYC
} from './cards';

const CLIENT = typeof window !== 'undefined';
// const SERVER = !CLIENT;

class App extends Component {
	constructor(props) {
		super(props);

		if(CLIENT) {
			HistoryTime.bindPathToCallback('*', props.navigateTo);
		}
	}

	render() {
		return(
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

				<KINDSnacks />
				<CloudCred />
				<Telephenesis />
				<FoundSoundNation />
				<ColonieNYC />
				<EchoSign />
				{/*<BismuthBear />*/}
				{/*<GoldenCeph />*/}
				{/*<ApplyGem />*/}
				<Steelecameron />

				{/*<Card nature="text">
					<h4>Smaller Projects</h4>
					<ul>
						<li>Songwriter's Studio</li>
						<li>Conservation Centers for Species Survival</li>
						<li><a href="http://fairview.yoga">Fairview Yoga</a></li>
					</ul>
				</Card>*/}
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		navigateTo: (path) => dispatch(changePage(path))
	}
}

const ConnectedApp = connect(null, mapDispatchToProps)(App);

export default ConnectedApp;