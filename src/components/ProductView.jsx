import {
	Card,
	CardActions,
	CardContent,
	CardHeader,
	IconButton,
	Typography,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ProductView() {
	const navigate = useNavigate();
	// const productos = useSelector((state) => state.productos);
	const productos = [
		{
			id: 1,
			nombre: 'Producto 1',
			precio: '$100',
			descripcion: 'Descripcion del producto 1',
			categoria: 'Categoria 1',
		},
		{
			id: 2,
			nombre: 'Producto 2',
			precio: '$200',
			descripcion: 'Descripcion del producto 2',
			categoria: 'Categoria 2',
		},
		{
			id: 3,
			nombre: 'Producto 3',
			precio: '$300',
			descripcion: 'Descripcion del producto 3',
			categoria: 'Categoria 3',
		},
		{
			id: 4,
			nombre: 'Producto 4',
			precio: '$400',
			descripcion: 'Descripcion del producto 4',
			categoria: 'Categoria 4',
		},
		{
			id: 5,
			nombre: 'Producto 5',
			precio: '$500',
			descripcion: 'Descripcion del producto 5',
			categoria: 'Categoria 5',
		},
		{
			id: 6,
			nombre: 'Producto 6',
			precio: '$600',
			descripcion: 'Descripcion del producto 6',
			categoria: 'Categoria 6',
		},
		{
			id: 7,
			nombre: 'Producto 7',
			precio: '$700',
			descripcion: 'Descripcion del producto 7',
			categoria: 'Categoria 7',
		},
		{
			id: 8,
			nombre: 'Producto 8',
			precio: '$800',
			descripcion: 'Descripcion del producto 8',
			categoria: 'Categoria 8',
		},
		{
			id: 9,
			nombre: 'Producto 9',
			precio: '$900',
			descripcion: 'Descripcion del producto 9',
			categoria: 'Categoria 9',
		},
		{
			id: 10,
			nombre: 'Producto 10',
			precio: '$1000',
			descripcion: 'Descripcion del producto 10',
			categoria: 'Categoria 10',
		},
	];

	const handleSubmit = () => {};

	return (
		<div className='my-0 mx-auto text-black'>
			{/* Buscador */}
			<div className='bg-slate-900 p-7'>
				<form onSubmit={handleSubmit} className='my-0 mx-auto w-1/2'>
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
			<div className='flex p-10 flex-wrap '>
				{productos.map((producto) => (
					<Card sx={{ maxWidth: 275, marginX: 4, marginY: 2 }}>
						<CardHeader
							title={producto.nombre}
							subheader={producto.categoria}
						/>
						<CardContent>
							<Typography variant='body2' color='text.secondary'>
								{producto.descripcion}
							</Typography>
						</CardContent>
						<CardActions disableSpacing>
							<IconButton aria-label='editar producto'>
								<EditIcon
									onClick={() => {
										navigate('/dashboard/productos/' + producto.id);
									}}
								/>
							</IconButton>
						</CardActions>
					</Card>
				))}
			</div>
		</div>
	);
}

export default ProductView;
