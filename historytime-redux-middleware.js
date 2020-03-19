import HistoryTime from './history-time';

function HistoryTimeMiddleware(myService) {
	return ({ dispatch, getState }) => next => action => {
		if(action.type == 'CHANGE_PAGE') {
			HistoryTime.navigateTo(action.page);
		}

		return next(action);
	}
}
