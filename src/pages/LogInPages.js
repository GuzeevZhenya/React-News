import React from 'react';
import {Link} from 'react-router-dom';
import { Login } from '../Components/Authorisation/Login';
import { GoogleAuth } from '../Components/Authorisation/GoogleAuth';

export const LogInPages = () => {
	return (
			<div>
			<h1>Login</h1>
			<Login/>
					<p>
							Or <Link to="/register">register</Link>
			</p>
			<GoogleAuth/>
			</div>
	)
}