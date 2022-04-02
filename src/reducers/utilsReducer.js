const initialState = {
	message: '',
  messageType: '',
	loading: true,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
	switch (action.type) {
		case 'MESSAGE_SHOW':
			return {
				...state,
				message: action.payload.msg,
        messageType: action.payload.type,
			};
		case 'LOADING':
			return {
				...state,
				loading: action.payload,
			};
		default:
			return state;
	}
}
