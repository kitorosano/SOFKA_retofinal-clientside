import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { globalMessage } from '../actions/utilsActions';
import { enviarFactura } from '../ducks/facturasDuck';
import Select from 'react-select';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

function FacturaView() {
	const username = useSelector((state) => state.usuarios.user.username);
	const productos = useSelector((state) => state.productos.productos);
	const dispatch = useDispatch();

  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();

		// obtener campos
		const documentoCliente = e.target.elements.documentoCliente.value;
		const nombreCliente = e.target.elements.nombreCliente.value;
		const celularCliente = e.target.elements.celularCliente.value;

		// Validacion que los datos del usuario (email, password, rol) no esten vacios, y que la password sea mayor a 6 caracteres
		if (
			documentoCliente.trim() === '' ||
			nombreCliente.trim() === '' ||
			celularCliente.trim() === ''
		)
			return dispatch(
				globalMessage('Todos los campos son obligatorios', 'ERROR')
			);

		const factura = {
			documentoCliente,
			nombreCliente,
			celularCliente,
			atendedor: username,
			fecha: new Date(),
		};
		dispatch(enviarFactura(factura));

		// Vaciar campos
		e.target.elements.email.value = '';
		e.target.elements.password.value = '';
	};

	const handleSelectProducto = (e) => {
		setProductoSeleccionado(
			productos.find((producto) => producto.id === e.value)
		);
	};

  const handleAddProducto = (e) => {
    
  }

	return (
		<div className='md:flex min-h-screen'>
			<div className='w-full p-1'>
				<div className='flex justify-center mt-10'>
					<div className='w-full max-w-3xl'>
						<form onSubmit={handleSubmit}>
							<div className='mb-4'>
								<label
									className='block text-gray-700 text-sm font-bold mb-2'
									htmlFor='documentoCliente'
								>
									{' '}
									Documento del Cliente{' '}
								</label>
								<input
									className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
									id='documentoCliente'
									type='text'
									name='documentoCliente'
									placeholder='Documento Cliente'
								/>
							</div>

							<div className='mb-4'>
								<label
									className='block text-gray-700 text-sm font-bold mb-2'
									htmlFor='nombreCliente'
								>
									{' '}
									Nombre del Cliente{' '}
								</label>
								<input
									className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
									id='nombreCliente'
									type='text'
									name='nombreCliente'
									placeholder='Nombre Cliente'
								/>
							</div>

							<div className='mb-4'>
								<label
									className='block text-gray-700 text-sm font-bold mb-2'
									htmlFor='celularCliente'
								>
									{' '}
									Celular del Cliente{' '}
								</label>
								<input
									className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
									id='celularCliente'
									type='number'
									name='celularCliente'
									placeholder='Nombre Cliente'
								/>
							</div>

							<div className='mb-4'>
								<label
									className='block text-gray-700 text-sm font-bold mb-2'
									htmlFor='categoria'
								>
									{' '}
									Producto{' '}
								</label>
								<div className='flex justify-between'>
									<Select
                  className='flex-1'
										classNamePrefix='select'
										defaultValue='Seleccione...'
										name='productos'
										id='categoria'
										isLoading
										isClearable
										isSearchable
										onChange={handleSelectProducto}
										options={productos.map((producto) => ({
											value: producto.id,
											label: producto.nombre,
										}))}
									/>
									<input
                  className="mx-2 "
                    placeholder="Cantidad"
                    type='number'
										name='cantidad'
										max={
											(productoSeleccionado?.stock - productoSeleccionado?.minStock).toString()
										}
									/>
                  <button
                  className='p-2 bg-slate-500 hover:bg-slate-500 text-white rounded'
                    onClick={handleAddProducto}
                  >Agregar a la factura</button>
								</div>
							</div>

              <div>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Nombre Producto</TableCell>
                      <TableCell align="right">Precio</TableCell>
                      <TableCell align="right">-</TableCell>
                      <TableCell align="right">+</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {productos.map((producto) => (
                      <TableRow
                        key={producto.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {producto.nombre}
                        </TableCell>
                        <TableCell align="right">{"$" +producto.precio}</TableCell>
                        <TableCell align="right">-</TableCell>
                        <TableCell align="right">+</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              </div>

							<button
								type='submit'
								className='bg-gray-800 hover:bg-gray-900 w-full my-5 p-2 text-white uppercase font-bold'
							>
								Terminar Factura
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FacturaView;
