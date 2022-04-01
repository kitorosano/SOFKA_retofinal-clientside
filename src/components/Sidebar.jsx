import React from 'react';

function Sidebar() {
	return (
		<div className='p-3'>
			<h1 className="text-5xl">
				Ferreteria<span className="font-normal">Don Raul</span>
			</h1>

			<button type='button' className='btn btn-primario btn-block'>
				Nuevo Proyecto
			</button>

			{/* {formulario ? ( */}
			<form className='formulario-nuevo-proyecto'>
				<input
					type='text'
					className='input-text'
					placeholder='Nombre Proyecto'
					name='nombre'
				/>

				<button type='submit' className='btn btn-primario btn-block'>
					Agregar Proyecto
				</button>
			</form>
			{/* ) : null} */}

			{/* {errorformulario ? <p className="mensaje error">El nombre del Proyecto es obligatorio</p> : null} */}
		</div>
	);
}

export default Sidebar;
