import HistoryTime from './history-time';

export function changePage(page) {
	return function(dispatch) {
		HistoryTime.state.updating = true; ///
		HistoryTime.navigateTo(this.portfolioPath);

		return dispatch({
			type: 'CHANGE_PAGE',
			page,
		});
	}
}
