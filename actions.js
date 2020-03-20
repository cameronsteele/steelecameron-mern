import HistoryTime from './history-time';

export function changePage(page) {
	return {
		type: 'CHANGE_PAGE',
		page,
	}
	// return function(dispatch) {
	// 	return dispatch({
	// 		type: 'CHANGE_PAGE',
	// 		page,
	// 	});
	// }
}
