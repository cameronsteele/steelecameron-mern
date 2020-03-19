import React, { Component } from 'react';
import { changePage } from '../actions';
import HistoryTime from '../history-time';
import BackButton from './BackButton.jsx';

const CLIENT = typeof window !== 'undefined';
const SERVER = !CLIENT;

class Card extends Component {
	constructor(props) {
		super();

		this.state = { active: false };

		this.depthRef = React.createRef();
		this.openDepth = this.openDepth.bind(this);

		if(props.nature == 'project') {
			this.portfolioPath = '/' + props.title.toLowerCase().replace(/\s/g, "");

			if(CLIENT) { ///
				HistoryTime.bindPathToProp(this.portfolioPath, this, 'active', true);
			}
		}
	}

	openDepth(event) {
		event.preventDefault();
		// event.stopPropagation();

		// cards[this.props.title];
		// store.dispatch(changePage(this));

		HistoryTime.state.updating = true; ///
		HistoryTime.navigateTo(this.portfolioPath);
		// this.setState({ active: true });
		this.depthRef.current.focus();
	}

	render() {
		var content = "";

		if(this.props.nature == 'project') {
			var depthLink = "";
			depthLink = (
				<a href={this.portfolioPath} onClick={this.openDepth}>
					<img src=
						{"/images/projects/"
						+ this.props.title.toLowerCase().replace(/\s/g, '') + "/"
						+ this.props.title.toLowerCase().replace(/\s/g, '') ///
						+ "_preview.png" }
					/>
					<h2>{this.props.title}</h2>
					{/*<h3>an online game of musical collaboration</h3>*/}
				</a>
			)

			var depthHeaderSub = "";
			if(this.props.githubLink) {
				depthHeaderSub = (
					<div className="sub">
						<a href={this.props.githubLink} target="_blank"><i className="fab fa-github"></i> GitHub</a>
					</div>
				);
			}

			var depthHeader = (
				<header>
					<BackButton />
					<h2>{this.props.title}</h2>
					<a href={this.props.projectLink} target="_blank">{this.props.projectLink}</a>

					{depthHeaderSub}
				</header>
			);

			// var depth = (
			var depth = (
				<div className="depth" tabIndex="0" ref={this.depthRef}>
					{React.Children.map(this.props.children, (child, i) => {
						if(!i) {
							return (
								<section>
									{React.Children.map(child.props.children, (subChild, si) => {
										if(!si) {
											return [depthHeader, subChild];
										}

										return subChild;
									})}
								</section>
							);
						} else {
							return child;
						}
					})}
				</div>
			);

			// content = [depthLink, depth];
			content = (
				<>
					{depthLink}
					{depth}
				</>
			)
		} else {
			content = this.props.children;
		}

		return(
			<div
				className={"card " + this.props.nature + (this.state.active ? " active" : "")}
			>
				{content}
			</div>
		);
	}
}

export default Card;