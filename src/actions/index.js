import {} from '../types';
import clienteAxios from '../config/axios';
import { auth } from '../firebase';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';

export const registrarUsuarioFirebase =
	(email, password) => async (dispatch) => {
    dispatch(setLoading(true));
		try {
			const { user } = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);

			await clienteAxios.post('/usuarios', { uid: user.uid, email: user.email}); //Guardar usuario en la Base de Datos
			dispatch({ type: 'REGISTRO_EXITOSO' }); //Usuario autenticado en firebase
		} catch (error) {
		  dispatch(errorShow(error.response.data));
		} finally {
      dispatch(setLoading(false));
    }
	};

export const iniciarSesionFirebase = (email, password) => async (dispatch) => {
  dispatch(setLoading(true));
	try {
		await signInWithEmailAndPassword(auth, email, password);
		dispatch({ type: 'LOGIN_EXITOSO' }); //Usuario autenticado en firebase
	} catch (error) {
		dispatch(errorShow(error.response.data));
	} finally {
    dispatch(setLoading(false));
  }
};

export const obtenerUsuarioAutenticado = (usuarioFirebase) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const respuesta = await clienteAxios.get('/usuarios/' + usuarioFirebase.uid);
    dispatch({
      type: 'USUARIO_OBTENIDO',
      payload: respuesta.data,
    });
  } catch (error) {
    dispatch(errorShow(error.response.data));
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
		dispatch(errorShow(error.response.data));
	} finally {
    dispatch(setLoading(false));
  }
};

const setLoading = (loading) => ({
	type: 'LOADING',
  payload: loading
});

const errorShow = (message) => ({
	type: 'ERROR_SHOW',
	payload: message,
});
