import { useDispatch, useSelector } from 'react-redux';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import { PrivateOutlet, PublicOutlet } from './helpers/customRoute';
import Dashboard from './containers/Dashboard';
import Login from './containers/Login';
import Register from './containers/Register';
import Loading from './components/Loading';
import { useEffect, useState } from 'react';
import { obtenerUsuarioAutenticado, quitarUsuarioAutenticado } from './actions';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

function App() {
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();

	useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			if (currentUser && !user)
				dispatch(obtenerUsuarioAutenticado(currentUser));
			else dispatch(quitarUsuarioAutenticado());
		});
	}, []);

	return (
		<Router>
			<Loading />
			<Routes>
				<Route
					exact
					path='/'
					element={
						<PublicOutlet auth={user}>
							<Login />
						</PublicOutlet>
					}
				/>
				<Route
					exact
					path='/register'
					element={
						<PublicOutlet auth={user}>
							<Register />
						</PublicOutlet>
					}
				/>
				<Route
					exact
					path='/dashboard'
					element={
						<PrivateOutlet auth={user}>
							<Dashboard />
						</PrivateOutlet>
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;
