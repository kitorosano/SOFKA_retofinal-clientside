import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { quitarUsuarioAutenticado } from '../../actions/usuariosAction';

function Footer() {
	const location = useLocation();
	const dispatch = useDispatch();
	const handleSignOut = () => dispatch(quitarUsuarioAutenticado());

	const user = useSelector((state) => state.usuarios.user);
	const username = user.usernombre || user.email.split('@')[0];

	return (
		<div className='flex justify-between items-center p-3 bg-slate-800 text-slate-100'>
			<h1 className='p-3 text-xl'>
				Hola
				<span className='font-black'> {username}</span>
			</h1>

			<h2 className='p-3 text-3xl'>
				{location.pathname.split('/dashboard')[1] === '/factura'
					? 'Gestion Facturas'
					: location.pathname.split('/dashboard')[1] === '/volante'
					? 'Gestion Volantes'
					: 'Tus Productos'}
			</h2>

			<button
				className='border rounded-md shadow-xs hover:shadow-sm hover:border-none hover:text-slate-100 px-3 py-1'
				onClick={handleSignOut}
			>
				Cerrar Sesion
			</button>
		</div>
	);
}

export default Footer;
