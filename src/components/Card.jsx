import React, { Component } from 'react';
// import { changePage } from '../actions';
import HistoryTime from '../history-time';
import BackButton from './BackButton.jsx';
import { connect } from 'react-redux';

class Card extends Component {
	constructor(props) {
		super(props);

		this.state = { active: false };
		this.inheritedClasses = props.className ? props.className : false;
		this.pageTitle = props.title + ' - ' + "Cameron Steele - Portfolio"

		this.openDepth = this.openDepth.bind(this);

		if(props.nature == 'project') {
			this.depthRef = React.createRef();
			this.pathName = props.title.toLowerCase().replace(/\s/g, "");
			this.portfolioPath = '/' + this.pathName;
		}
	}

	static getDerivedStateFromProps(newProps, previousState) {
		if(newProps.active == null || newProps.active == previousState.active) { ///OPTIMIZATION does this help or hurt?
			return null;
		}

		return {
			active: newProps.active
		}
	}

	componentDidMount() {
		if(this.props.nature == 'project') {
			if(this.state.active) {
				this.depthRef.current.focus();
				document.title = this.pageTitle; //` history-time was taking care of this but not working on page load. revisit.
			}
		}
	}

	openDepth(event) {
		if(event) {
			event.preventDefault();
			// event.stopPropagation();
		}

		HistoryTime.navigateTo(this.pathName, this.pageTitle);
		this.depthRef.current.focus();
	}

	render() {
		var content = "";

		if(this.props.nature == 'project') {
			var depthLink = "";
			depthLink = (
				<a href={this.portfolioPath} onClick={this.openDepth}>
					<img src={this.props.cardImage ? this.props.cardImage
						: "/images/projects/"
							+ this.props.title.toLowerCase().replace(/\s/g, '') + "/"
							+ this.props.title.toLowerCase().replace(/\s/g, '') ///
							+ "_preview.png"
						}
					/>
					<h2>{this.props.title}</h2>
					{/*<h3>an online game of musical collaboration</h3>*/}
				</a>
			)

			var depthHeaderSub = "";
			if(this.props.githubLink) {
				depthHeaderSub = (
					<div className="sub">
						<a href={this.props.githubLink} className="external" target="_blank"><i className="fab fa-github"></i> GitHub</a>
					</div>
				);
			}

			var depthHeader = (
				<header>
					<BackButton />
					<h2>{this.props.title}</h2>
					<a href={this.props.projectLink} className="external" target="_blank">{this.props.projectLink}</a>

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
				className={"card "
					+ this.props.nature
					+ (this.state.active ? " active" : "")
					+ (this.inheritedClasses ? " " + this.inheritedClasses : "") // add any inherited classes
				}
			>
				{content}
			</div>
		);
	}
}


function mapStateToProps(state, ownProps) {
  var active = true;

  if(ownProps.nature == 'project') {
    active = state.page == ownProps.title.replace(/\s/g, '').toLowerCase();
  }

  return {
    active
  }
}

const ConnectedCard = connect(mapStateToProps)(Card);
export default ConnectedCard;