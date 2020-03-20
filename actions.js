import HistoryTime from './history-time';

export function changePage(page) {
	if(page[0] == '/') { ///REVISIT better solution?
		page = page.substring(1);
	}

	return {
		type: 'CHANGE_PAGE',
		page,
	}
}
