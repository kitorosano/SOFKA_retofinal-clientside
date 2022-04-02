import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Sidebar() {
	const location = useLocation();
	const navigate = useNavigate();

	return (
		<div className='flex flex-col px-5 pt-5 pb-2 w-1/5 h-screen'>
			{/* Titulo */}
			<h1 className='text-5xl font-light text-center text-slate-800 mt-5 mb-16'>
				Ferreteria
				<span className='font-black'> DonRaúl</span>
			</h1>

			{/* Botones */}
			<button
				onClick={() => navigate('/dashboard')}
				className={`sidebar-btn ${
					location.pathname === '/dashboard' ? 'active' : ''
				}`}
			>
				Lista Productos
			</button>

			<button
				onClick={() => navigate('/dashboard/factura')}
				className={`sidebar-btn ${
					location.pathname === '/dashboard/factura' ? 'active' : ''
				}`}
			>
				Realizar Factura
			</button>

			<button
				onClick={() => navigate('/dashboard/volante')}
				className={`sidebar-btn ${
					location.pathname === '/dashboard/volante' ? 'active' : ''
				}`}
			>
				Realizar Volante
			</button>

			<div className='text-center mt-auto'>
				<p>Copyright &copy;{new Date().getFullYear()}</p>
			</div>
		</div>
	);
}

export default Sidebar;
