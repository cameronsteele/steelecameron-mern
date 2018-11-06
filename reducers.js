
const initialState = {
	page: false,
};

function cammyAppReducer(state = initialState, action) {
	switch(action.type) {
		case 'CHANGE_PAGE': {
			return Object.assign({}, state, {
				page: action.page
			});
		} break;
	}

	return state;
}

export default cammyAppReducer;
