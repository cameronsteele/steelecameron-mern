import React, { Component } from 'react';
import { changePage } from '../actions';
import HistoryTime from '../history-time';
import BackButton from './BackButton.jsx';
import { connect } from 'react-redux';

const CLIENT = typeof window !== 'undefined';
const SERVER = !CLIENT;

class Card extends Component {
	constructor(props) {
		super();

		this.state = { active: false };

		this.depthRef = React.createRef();
		this.openDepth = this.openDepth.bind(this);

		if(props.nature == 'project') {
			this.pathName = props.title.toLowerCase().replace(/\s/g, "");
			this.portfolioPath = '/' + this.pathName;

			if(CLIENT) { ///
				HistoryTime.bindPathToCallback(this.portfolioPath, openDepth);
				// HistoryTime.bindPropToPath(this.portfolioPath, this, 'active', true, false);
			}
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

	openDepth(event) {
		if(event) {
			event.preventDefault();
			// event.stopPropagation();
		}

		this.props.dispatch(changePage(this.pathName)); ///TODO probably move into HistoryTime
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


function mapStateToProps(state, ownProps) {
  var active = true;


  if(ownProps.nature == 'project') {
    // active = state.page == ownProps.title.replace(/\s/g, '').toLowerCase();
    active = state.page == ownProps.title.replace(/\s/g, '').toLowerCase();
  }

  return {
    active
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     // onTodoClick: id => {
//     //   dispatch(toggleTodo(id))
//     // }
//   }
// }

const VisibleCard = connect(
  mapStateToProps,
  // mapDispatchToProps
)(Card);


// export default Card;
export default VisibleCard;