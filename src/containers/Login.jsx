import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import React from 'react';

import backgroundImg from '../assets/img/background.jpg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { iniciarSesionFirebase } from '../actions/usuariosAction';
import Message from '../components/Message';
import { globalMessage } from '../actions/utilsActions';

function Login() {
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

		dispatch(iniciarSesionFirebase(email, password));

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

				<div className='bg-white z-10 grid grid-cols-1 lg:grid-cols-2 m-auto h-[500px] shadow-lg shadow-grey-600 sm:max-w-[900px]'>
					<div className='w-full hidden lg:block'>
						<img
							className='w-full object-cover h-full'
							src={backgroundImg}
							alt=''
						/>
					</div>
					<div className='flex flex-col justify-around p-8 lg:p-5 '>
						<form onSubmit={handleSubmit}>
							<h2 className='text-4xl font-bold text-center mb-5'>
								Ferreteria - Don Raul
							</h2>
							<div className='flex justify-around pb-8'>
								<p className='border shadow-lg hover:shadow-xl px-6 py-2 relative items-center cursor-pointer'>
									<GoogleIcon className='mr-2' />
									Google
								</p>
								<p className='border shadow-lg hover:shadow-xl px-6 py-2 relative items-center cursor-pointer'>
									<GitHubIcon className='mr-2' />
									Github
								</p>
							</div>
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
								Entrar
							</button>
							<span
								onClick={() => alert('Por el momento no esta disponible')}
								className='text-left text-indigo-600 hover:text-indigo-400 hover:underline cursor-pointer'
							>
								¿Olvidaste tu contraseña?
							</span>
							<p className='text-center mt-8'>
								No tienes una cuenta?{' '}
								<Link
									to='/register'
									className='text-indigo-600 hover:text-indigo-400 hover:underline'
								>
									Registrate
								</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
