import { CircularProgress } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

function Loading() {
	const loading = useSelector((state) => state.utils.loading);

	return (
		loading && (
			<div
				className='absolute flex flex-col justify-center w-full h-screen z-50 bg-white/70'
				role='alert'
			>
				<CircularProgress color='info' className='w-2/4 self-center' />
			</div>
		)
	);
}
export default Loading;
