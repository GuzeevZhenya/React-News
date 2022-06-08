import React, { useState, useEffect } from 'react';
import { getAuth, updateProfile } from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';

import './UpdateUserProfile.css';

export const UpdateUserProfile = () => {
	const dispatch = useDispatch();

	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	// const [user, setUser] = useState('');

	const loginUser = useSelector((state) => state.loginReducer);
 
 console.log(loginUser)
	const auth = getAuth();
	const user = auth.currentUser;

	const updateProfileUser = async () => {
		await updateProfile(auth.currentUser, {
			displayName: String(name),
			photoURL:
				'http://img2.safereactor.cc/pics/post/full/anon-%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0-2191131.jpeg',
		})
			.then(() => {
				dispatch({ type: 'UPDATE_USER', value: user });
			})
			.catch((error) => {
				// An error occurred
				// ...
				console.log(error);
			});
	};

	return (
		<div className="wrapper">
			<div className="profile">
				<div className='profile__info'>
					<div>
					
					</div>
					<div>
						
					</div>
				</div>
				<input
					className="profile__input"
					type="email"
					value={email}
					placeholder="Введите новый email"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					className="profile__input"
					type="text"
					value={name}
					placeholder="Введите имя"
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					className="profile__input"
					type="text"
					value={password}
					placeholder="Введите новый пароль"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button className="profile__update" onClick={() => updateProfileUser()}>
					Update
				</button>
			</div>
		</div>
	);
};
