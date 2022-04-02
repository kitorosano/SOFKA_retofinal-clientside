import { globalMessage, setLoading } from '../actions/utilsActions';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

// reducer
export default function reducer(state = {}, action = {}) {
	switch (action.type) {
		case 'FACTURA_EXITOSA':
			return action.payload;
		default:
			return state;
	}
}

// action
export const enviarFactura = (factura) => async (dispatch) => {
	dispatch(setLoading(true));
	try {
		const respuesa = await fetch(`${BACKEND_URL}/facturas`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify(factura),
		});
		const facturaRealizada = respuesa.json();

		dispatch({
			type: 'FACTURA_EXITOSA',
			payload: facturaRealizada,
		});
		dispatch(globalMessage('Factura realizada correctamente', 'SUCCESS'));
	} catch (error) {
		dispatch(globalMessage(error.message, 'ERROR'));
	} finally {
		dispatch(setLoading(false));
	}
};