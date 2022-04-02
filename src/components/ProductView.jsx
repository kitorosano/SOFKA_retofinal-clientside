import React from 'react';

function ProductView() {
	const handleSubmit = () => {};

	return (
		<div className='my-0 mx-auto text-black '>
			{/* Buscador */}
			<div className='bg-slate-900 p-7'>
				<form onSubmit={handleSubmit} className="my-0 mx-auto w-1/2">
					<div className='flex'>
						<input
							type='text'
							className='py-2 px-3 border-none rounded-lg flex-1 w-full'
							placeholder='Buscar producto...'
							id='nombre'
						/>
					</div>
					<div className='flex'>{/* Filtrado? */}</div>

				</form>
			</div>

			{/* Listado */}

		</div>
	);
}

export default ProductView;
