import { useDispatch, useSelector } from 'react-redux';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import { PrivateOutlet, PublicOutlet } from './utils/customRoute';
import Dashboard from './containers/Dashboard';
import Login from './containers/Login';
import Register from './containers/Register';
import { useEffect } from 'react';
import { obtenerUsuarioAutenticado, quitarUsuarioAutenticado } from './actions';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

function App() {
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase && !user)
      dispatch(obtenerUsuarioAutenticado(usuarioFirebase));
    else 
      dispatch(quitarUsuarioAutenticado());
  });

	return (
		<Router>
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
