class HistoryTime {
	constructor() {
		this.state = { title: document.title, url: location.href, updating: false }

		this.pathBinds = {};

		this.bindPathToProp = this.bindPathToProp.bind(this);
		this.popState = this.popState.bind(this);

		window.addEventListener('popstate', this.popState, false);
		history.replaceState(this.state, this.state.title, this.state.url);

		this.activePathExclusiveProps = [];
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
				this.navigateTo('/' + pageTitle);
		// 		break;
		// }
	}

	navigateTo(path) {
		///TODO remove console.logs or create debug toggle
		console.log('navigating to ' + path);

		while(this.activePathExclusiveProps.length) {
			var exclusie = this.activePathExclusiveProps.pop();
			exclusie.component.setState({ [exclusie.prop]: exclusie.oldValue });
		}

		// change values bound to this path
		if(this.pathBinds.hasOwnProperty(path)) {
			for (var bindIndex = 0; bindIndex < this.pathBinds[path].length; bindIndex++) {
				var pathBind = this.pathBinds[path][bindIndex];
				var pathComponent = pathBind[0];
				var pathProp = pathBind[1];
				var pathValue = pathBind[2];
				var pathExclusive = pathBind[3];

				// for (var exclusieIndex = 0; exclusieIndex < this.activePathExclusiveProps.length; exclusieIndex++) {
				// 	var exclusie = this.activePathExclusiveProps[exclusieIndex];
				// 	if(exclusie.path == path) {}
				// 	exclusie.component.setState({ exclusie.prop: exclusie.oldValue });
				// }

				if(pathExclusive) {
					////TODO could we just store a reference to the prop like: pathComponent.props[pathProp]
					this.activePathExclusiveProps.push({
						component: pathComponent,
						prop: pathProp,
						oldValue: pathComponent.props[pathProp]
					});
				}

				pathComponent.setState({ [pathProp]: pathValue });

				// activePathBinds.push(pathBind);
			}
		}

		if(this.state.updating) {
			document.title = path + ' : cameron steele portfolio';
			this.state.title = path + ' : cameron steele portfolio';
			this.state.url = path.toLowerCase();
			history.pushState(this.state, this.state.title, this.state.url);
		}
	}

	bindPathToProp(path, object, property, value, pathExclusive = true) { /// rexamine final architecture. it is currently only local to components that HistoryTime has interacted with
		// path = this.boilPath(path);

		if(!this.pathBinds.hasOwnProperty(path)) {
			this.pathBinds[path] = [];
		}

		this.pathBinds[path].push([object, property, value, pathExclusive]);
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
