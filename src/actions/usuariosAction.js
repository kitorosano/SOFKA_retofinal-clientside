import {} from '../types';
import { auth } from '../firebase';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';
import {
	handleFirebaseSigninErrors,
	handleFirebaseLoginErrors,
} from '../helpers/handleErrorsMessages';
import { globalMessage, setLoading } from './utilsActions';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const registrarUsuarioFirebase =
	(email, password) => async (dispatch) => {
		dispatch(setLoading(true));
		try {
			const { user } = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);

			await fetch(`${BACKEND_URL}/usuarios`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				body: JSON.stringify({
					uid: user.uid,
					email: user.email,
					username: user.displayName || user.email.split('@')[0],
				}),
			});
			dispatch({ type: 'REGISTRO_EXITOSO' }); //Usuario autenticado en firebase
		} catch (error) {
			dispatch(globalMessage(handleFirebaseSigninErrors(error), 'ERROR'));
		}
	};

export const iniciarSesionFirebase = (email, password) => async (dispatch) => {
	dispatch(setLoading(true));
	try {
		await signInWithEmailAndPassword(auth, email, password);
		dispatch({ type: 'LOGIN_EXITOSO' }); //Usuario autenticado en firebase
	} catch (error) {
		dispatch(globalMessage(handleFirebaseLoginErrors(error), 'ERROR'));
	}
};

export const obtenerUsuarioAutenticado = (currentUser) => async (dispatch) => {
	try {
		const respuesta = await fetch(`${BACKEND_URL}/usuarios/${currentUser.uid}`);
		const usuario = await respuesta.json();
		dispatch({
			type: 'USUARIO_OBTENIDO',
			payload: usuario,
		});
	} catch (error) {
		console.log(error);
		dispatch(globalMessage(error.message, 'ERROR'));
	} finally {
		dispatch(setLoading(false));
	}
};

export const quitarUsuarioAutenticado = () => async (dispatch) => {
	dispatch(setLoading(true));
	try {
		await signOut(auth);
		dispatch({ type: 'CERRAR_SESION' });
	} catch (error) {
		dispatch(globalMessage(error.message, 'ERROR'));
	} finally {
		dispatch(setLoading(false));
	}
};
