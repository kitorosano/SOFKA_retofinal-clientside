import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';
import { obtenerProductos } from '../actions/productosAction';
import { useDispatch } from 'react-redux';

function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(obtenerProductos());
  }, []);

	return (
		<div className='flex scrollbar-default'>
			<div className='w-1/5 relative'>
				<Sidebar />
			</div>
			<div className='flex-1 bg-slate-100 h-screen'>
				<Header />
				<Outlet />
			</div>
		</div>
	);
}

export default Dashboard;
