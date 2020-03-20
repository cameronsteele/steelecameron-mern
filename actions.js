import HistoryTime from './history-time';

export function changePage(page) {
	// if(page[0] == '/') {
	// 	page = page.split('/')[1];
	// }

	return function(dispatch) {
		// HistoryTime.state.updating = true; ///
		// HistoryTime.navigateTo(page);

		return dispatch({
			type: 'CHANGE_PAGE',
			page,
		});
	}
}
