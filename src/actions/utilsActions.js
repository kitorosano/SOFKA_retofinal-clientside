import {} from '../types';
export const setLoading = (loading) => ({
	type: 'LOADING',
	payload: loading,
});

export const globalMessage = (msg, type) => (dispatch) => {
	dispatch({
		type: 'MESSAGE_SHOW',
		payload: {msg, type},
	});

	setTimeout(() => {
		dispatch({
			type: 'MESSAGE_SHOW',
			payload: '',
		});
	}, 3000);
};
