class HistoryTime {
	constructor() {
		this.state = { title: document.title, url: location.href, updating: false }

		this.pathBinds = {};

		this.bindPropToPath = this.bindPropToPath.bind(this);
		this.popState = this.popState.bind(this);

		window.addEventListener('popstate', this.popState, false);
		history.replaceState(this.state, this.state.title, this.state.url);

		this.activePathBinds = [];
	}

	// bindBackElement(element) {
	// 	element.addEventListener('click', function(event) {
	// 		event.preventDefault();
	// 		history.back();
	// 	});
	// }

	// bindBackClass(className) {
	// }

	goBack(event) {
		event.preventDefault();
		history.back();
	}

	popState(event) {
		this.state = event.state;
		var pageTitle = this.state.url.split('/').pop();
		gtag('config', 'GA_TRACKING_ID', {'page_path': this.state.url});

		// switch(pageTitle) {
		// 	case "":
		// 		// project.classList.remove('active');
		// 		// project = false;
		// 		// document.body.removeAttribute('class');
		// 		break;

		// 	default:
				this.state.updating = false;
				this.navigateTo(pageTitle);
		// 		break;
		// }
	}

	navigateTo(path) {
		console.log('navigating to ' + path); ///TODO remove or create debug toggle

		if(path[0] != '/') path = '/' + path; ///REVISIT is this what we want to do?

		while(this.activePathBinds.length) { ///REVISIT do we always want to clear the whole array on every navigateTo() call?
			var activePathBind = this.activePathBinds.pop();

			activePathBind.component.setState({
				[activePathBind.property]: activePathBind.offValue
			});
		}

		if(this.pathBinds.hasOwnProperty(path)) {
			for(var bindIndex = 0; bindIndex < this.pathBinds[path].length; bindIndex++) {
				var pathBind = this.pathBinds[path][bindIndex];

				this.activatePathBind(pathBind);
			}
		}

		if(this.state.updating) {
			document.title = path + ' : cameron steele portfolio';
			this.state.title = path + ' : cameron steele portfolio';
			this.state.url = path.toLowerCase();
			history.pushState(this.state, this.state.title, this.state.url);
		}
	}

	activatePathBind(pathBind) {
		if(!pathBind.oneWay) {
			this.activePathBinds.push(pathBind);
			// this.activePathBinds.push({
			// 	component: pathBind.component,
			// 	property: pathBind.property,
			// 	previousValue: pathBind.component.props[pathBind.property]
			// });
		}

		pathBind.component.setState({ [pathBind.property]: pathBind.onValue });
	}

	bindPathToCallback(path, onCallback, offCallback = false) {
		if(!this.pathBinds.hasOwnProperty(path)) {
			this.pathBinds[path] = [];
		}

		var pathBind = {
			nature: 'callback',
			onCallback,
			offCallback
		};

		if(this.state.url == path) {
			this.activatePathBind(pathBind);
		}

		this.pathBinds[path].push(pathBind);		
	}

	bindPropToPath(path, component, property, onValue, offValue = false, oneWay = false) {
		// path = this.boilPath(path);

		if(!this.pathBinds.hasOwnProperty(path)) {
			this.pathBinds[path] = [];
		}

		var pathBind = {
			nature: 'prop',
			component,
			property,
			onValue,
			offValue,
			oneWay
		};

		if(this.state.url == path) {
			this.activatePathBind(pathBind);
		}

		this.pathBinds[path].push(pathBind);
	}

	boilPath(path) {
		///TODO doesn't do anything at the moment. remove?

		// var urlInstance = new URL(path);
		// return urlInstance.hostname + urlInstance.pathname;

		return path;
	}
}


// if(typeof window == "undefined") { ////
// 	global.window = {};
// }

// if(typeof location == "undefined") { ////
// 	global.location = {};
// }

// if(typeof document == "undefined") { ////
// 	global.document = {};
// }

////
var singleInstance = {};
if(typeof window !== "undefined") {
	singleInstance = new HistoryTime();
}

export default singleInstance;
