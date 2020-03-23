import React, { Component } from 'react';
import HistoryTime from '../history-time';

class BackButton extends Component {
	constructor(props) {
		super();
	}

	render() {
		return(
			<a className="back" href="/" onClick={HistoryTime.goBack}>&larr; back</a>
		);
	}
}

export default BackButton;