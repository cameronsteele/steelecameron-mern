import React, { Component } from 'react';
import Card from './VisibleCard.jsx';
import HistoryTime from '../history-time';
import { changePage } from '../actions';
import { connect } from 'react-redux';

// import Card from './Card.jsx';
// import '../primary.scss';

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

// HistoryTime.bindPathToCallback('/', function;
// HistoryTime

const CLIENT = typeof window !== 'undefined';
// const SERVER = !CLIENT;

class App extends Component {
	constructor(props) {
		super(props);

		this.hereGoes = this.hereGoes.bind(this);

		if(CLIENT) {
			HistoryTime.bindPathToCallback('*', this.hereGoes);
		}
	}

	hereGoes(path) {
		if(path[0] == '/') { ///REVISIT better solution?
			path = path.substring(1);
		}

		this.props.dispatch(changePage(path));
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
				<EchoSign />
				<ColonieNYC />
				{/*<BismuthBear />*/}
				{/*<GoldenCeph />*/}
				{/*<ApplyGem />*/}

				<Card nature="text">
					{/*<h4>Smaller Projects</h4>
					<ul>
						<li>Niles Yoga</li>
						<li>Songwriter's Studio</li>
						<li>Conservation Centers for Species Survival</li>
					</ul>*/}
				</Card>
			</div>
		);
	}
}

const ConnectedApp = connect()(App);

export default ConnectedApp;