import React,{useState} from 'react';
import {Outlet,Navigate} from 'react-router-dom'

const PrivateRoute = () => {

	
	const auth = window.localStorage.getItem('token');
		// const auth = useAuth();
	return auth ? (
			<>
				<Outlet /> 
			</>
	): <Navigate to="/login" />;
 
}


export default PrivateRoute;