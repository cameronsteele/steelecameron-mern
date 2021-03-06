class HistoryTime {
	constructor() {
		this.state = {
			title: document.title,
			path: '/',
			url: location.href,
			updating: false
		};

		this.pathBinds = {};

		this.bindPropToPath = this.bindPropToPath.bind(this);
		this.popState = this.popState.bind(this);

		window.addEventListener('popstate', this.popState, false);
		history.replaceState(this.state, this.state.title, this.state.url);

		this.activePathBinds = [];
	}

	goBack(event) {
		event.preventDefault();
		history.back();
	}

	popState(event) {
		this.state = event.state;
		// var pageTitle = this.state.url.split('/').pop();
		gtag('config', 'GA_TRACKING_ID', {'page_path': this.state.url});
		this.navigateTo(this.state.path, this.state.title, false);
	}

	navigateTo(path, pageTitle, updateState = true) {
		// console.log('navigating to ' + path); ///TODO remove or create debug toggle

		if(path[0] != '/') path = '/' + path; ///REVISIT is this what we want to do?

		while(this.activePathBinds.length) { ///REVISIT do we always want to clear the whole array on every navigateTo() call?
			var activePathBind = this.activePathBinds.pop();
			this.deactivatePathBind(activePathBind);
		}

		for (var constantBindIndex = 0; constantBindIndex < this.pathBinds['*'].length; constantBindIndex++) {
			var constantPathBind = this.pathBinds['*'][constantBindIndex];
			this.activatePathBind(constantPathBind, path);
		}

		if(this.pathBinds.hasOwnProperty(path)) {
			for(var bindIndex = 0; bindIndex < this.pathBinds[path].length; bindIndex++) {
				var pathBind = this.pathBinds[path][bindIndex];
				this.activatePathBind(pathBind, path);
			}
		}

		document.title = pageTitle; //`

		if(updateState) {
			///TODO generalize this block so it isn't specific to steelecameron.com
			var project = path.substring(1); //`revisit
			this.state.title = pageTitle; //`
			this.state.url = project.toLowerCase();
			this.state.path = path;
			history.pushState(this.state, this.state.title, this.state.url);
		}
	}

	activatePathBind(pathBind, path) {
		if(!pathBind.oneWay) {
			this.activePathBinds.push(pathBind);
		}

		switch(pathBind.nature) {
			case 'callback': {
				pathBind.onCallback(path);
			} break;

			case 'prop': {
				pathBind.component.setState({ [pathBind.property]: pathBind.onValue });
			} break;

			default: {
				///TODO error? maybe we don't really care.
			}
		}
	}

	deactivatePathBind(pathBind) {
		switch(pathBind.nature) {
			case 'callback': {
				if(pathBind.offCallback) {
					pathBind.offCallback();
				}
			} break;

			case 'prop': {
				activePathBind.component.setState({
					[activePathBind.property]: activePathBind.offValue
				});
			} break;
		}
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

////
var singleInstance = {};
if(typeof window !== "undefined") {
	singleInstance = new HistoryTime();
}

export default singleInstance;
