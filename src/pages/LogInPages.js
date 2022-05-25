import React from 'react';
import {Link} from 'react-router-dom';
import { Login } from '../Components/Authorisation/Login';

export const LogInPages = () => {
	return (
			<div>
			<h1>Login</h1>
			<Login/>
					<p>
							Or <Link to="/register">register</Link>
					</p>
			</div>
	)
}