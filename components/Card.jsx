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

		// cards[this.props.title];
		// store.dispatch(changePage(this));

		HistoryTime.state.updating = true; ///
		HistoryTime.navigateTo(this.portfolioPath);
		// this.setState({ active: true });
	}

	render() {
		var depthLink = "";
		var depth = "";

		if(this.props.nature == 'project') {
			depthLink = (
				<a href={this.portfolioPath}>
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

            // this.props.children[0].children.unshift(depthHeader);
			// console.log(this.props.children[0]);

			depth = (
				<div className="depth">
					{/*{depthHeader}*/}

					{/*{depthHeader}*/}

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

					{/*{this.props.children}*/}
				</div>
			);
		}


		return(
			<div
				className={"card " + this.props.nature + (this.state.active ? " active" : "")}
				onClick={this.openDepth}
			>
				{depthLink}

				{depth}
			</div>
		);
	}
}

export default Card;