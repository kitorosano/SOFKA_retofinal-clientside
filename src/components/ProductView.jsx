import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	IconButton,
	Typography,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { scrollToTop } from '../helpers/scrollToTop';
import { filtrarProductos, obtenerProductos } from '../actions/productosAction';

function ProductView() {
	const filterTextRef = useRef(null);
	const navigate = useNavigate();
	const productos = useSelector((state) => state.productos.productos);
	const dispatch = useDispatch();

	const handleSubmit = () => {};

	const buscarProducto = (e) => {
		const filterText = filterTextRef.current.value.trim().toUpperCase();
		dispatch(filtrarProductos(filterText));
	};

	return (
		<div className='my-0 mx-auto text-black h-fit'>
			{/* Buscador */}
			<div className='bg-slate-900 p-7'>
				<div className='my-0 mx-auto w-1/2'>
					<div className='flex'>
						<input
							onKeyUp={buscarProducto}
							type='text'
							className='py-2 px-3 border-none rounded-lg flex-1 w-full'
							placeholder='Buscar producto...'
							ref={filterTextRef}
						/>
					</div>
					<div className='flex'>{/* Filtrado? */}</div>
				</div>
			</div>

			{/* Listado */}
			<div className='flex p-10 flex-wrap '>
				{productos.map((producto) => (
					<Card key={producto.id} sx={{ maxWidth: 230, minWidth: 230, marginX: 2, marginY: 2 }}>
						<CardContent>
							<Typography
								sx={{ fontSize: 14 }}
								color='text.secondary'
								gutterBottom
							>
								{producto.categoria}
							</Typography>
							<Typography variant='h5' component='div'>
								{producto.nombre}
							</Typography>
							<Typography sx={{ mb: 1.5 }} color='text.secondary'>
								{'$' + producto.precio}
							</Typography>
							<Typography variant='body2' color='text.secondary'>
								{producto.descripcion}
							</Typography>
						</CardContent>
						<CardActions>
							<IconButton
								aria-label='editar producto'
								onClick={() => {
									navigate('/dashboard/productos/' + producto.id);
								}}
							>
								<EditIcon />
							</IconButton>
							<Button size='small'>Stock: {producto.stock}</Button>
						</CardActions>
					</Card>
				))}
			</div>
			<div className='text-right'>
				<button
					onClick={scrollToTop}
					className='pb-5 mr-10 hover:underline text-lg'
				>
					Volver arriba
				</button>
			</div>
		</div>
	);
}

export default ProductView;
