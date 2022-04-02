import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { registrarUsuarioFirebase } from '../actions/usuariosAction';
import { globalMessage } from '../actions/utilsActions';
import backgroundImg from '../assets/img/background.jpg';
import Message from '../components/Message';

function Register() {
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();

		// obtener campos
		const email = e.target.elements.email.value;
		const password = e.target.elements.password.value;

		// Validacion que los datos del usuario (email, password, rol) no esten vacios, y que la password sea mayor a 6 caracteres
		if (email.trim() === '' || password.trim() === '')
			return dispatch(
				globalMessage('Todos los campos son obligatorios', 'ERROR')
			);
		if (password.length < 6)
			return dispatch(
				globalMessage('La contraseña debe tener al menos 6 caracteres', 'ERROR')
			);

		dispatch(registrarUsuarioFirebase(email, password));

		// Vaciar campos
		e.target.elements.email.value = '';
		e.target.elements.password.value = '';
	};

	return (
		<div className='relative w-full h-screen bg-zinc-900/90'>
			<img
				className='absolute w-full h-full object-cover blur-sm mix-blend-overlay'
				src={backgroundImg}
				alt=''
			/>
			<div className='w-full h-screen flex'>
				<Message />
				<div className='bg-white z-10 grid grid-cols-1 m-auto shadow-lg shadow-grey-600 w-1/3 '>
					<div className='flex flex-col justify-around m-5 p-8 lg:p-5 '>
						<form onSubmit={handleSubmit}>
							<h2 className='text-4xl font-bold text-center mb-5'>
								Crear Cuenta
							</h2>
							<div className='flex flex-col mb-4'>
								<label>Correo</label>
								<input
									id='email'
									className='border relative bg-gray-100 p-2'
									type='text'
								/>
							</div>
							<div className='flex flex-col'>
								<label>Contraseña</label>
								<input
									id='password'
									className='border relative bg-gray-100 p-2'
									type='password'
								/>
							</div>
							<button className='w-full py-2 my-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded'>
								Registrar
							</button>
							<p className='text-center mt-8'>
								Ya tienes una cuenta?{' '}
								<Link
									to='/'
									className='text-indigo-600 hover:text-indigo-400 hover:underline'
								>
									Inicia sesion
								</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Register;
