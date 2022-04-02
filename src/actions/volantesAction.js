import { globalMessage, setLoading } from './utilsActions';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const enviarFactura = (volante) => async (dispatch) => {
	dispatch(setLoading(true));
	try {
		await fetch(`${BACKEND_URL}/volante`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify(volante),
		});
		dispatch({ type: 'ENVIO_EXITOSO' });
	} catch (error) {
		dispatch(globalMessage(error.message, 'ERROR'));
	} finally {
		dispatch(setLoading(false));
	}
};
