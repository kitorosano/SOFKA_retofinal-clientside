import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

function Dashboard() {
	return (
		<div className='flex scrollbar-default'>
			<div className='w-1/5 relative'>
				<Sidebar />
			</div>
			<div className='flex-1 bg-slate-100'>
				<Header />
				<Outlet />
			</div>
		</div>
	);
}

export default Dashboard;
