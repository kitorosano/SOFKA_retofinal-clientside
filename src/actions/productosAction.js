import {} from '../types';
import { globalMessage, setLoading } from './utilsActions';
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const obtenerProductos = () => async (dispatch) => {
	dispatch(setLoading(true));
	try {
		const respusta = await fetch(`${BACKEND_URL}/productos`);
		const productos = await respusta.json();
		dispatch({
			type: 'PRODUCTOS_OBTENIDOS',
			payload: productos,
		});
	} catch (error) {
		dispatch(globalMessage(error.message, 'ERROR'));
	} finally {
		dispatch(setLoading(false));
	}
};

export const filtrarProductos = (filtro) => async (dispatch) => {
	dispatch({
		type: 'PRODUCTOS_FILTRADOS',
		payload: filtro,
	});
};
