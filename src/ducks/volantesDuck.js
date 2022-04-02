import { globalMessage, setLoading } from '../actions/utilsActions';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

// reducer
export default function reducer(state = {}, action = {}) {
	switch (action.type) {
		case 'VOLANTE_EXITOSO':
			return action.payload;
		default:
			return state;
	}
}

// action
export const enviarVolante = (volante) => async (dispatch) => {
	dispatch(setLoading(true));
	try {
		const respuesa = await fetch(`${BACKEND_URL}/volantes`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify(volante),
		});
		const volanteRealizado = respuesa.json();

		dispatch({
			type: 'VOLANTE_EXITOSO',
			payload: volanteRealizado,
		});
		dispatch(globalMessage('Volante realizado correctamente', 'SUCCESS'));
	} catch (error) {
		dispatch(globalMessage(error.message, 'ERROR'));
	} finally {
		dispatch(setLoading(false));
	}
};