import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './HeaderAvatar.css';

export const HeaderAvatar = () => {
	const dispatch = useDispatch();
	const [ isOpen, setIsOpen ] = useState(false);
	const loginUser = useSelector((state) => state.loginReducer);


	const exitFromAccount = () => {
		dispatch({ type: 'EXIT', value: [] });
	};



	return (
		<div className="header-avatar">
			<button onClick={() => setIsOpen(!isOpen)} className="header-avatar__button">
				<img src="http://placekitten.com/g/32/32" alt="avatarPhoto" />
				<svg
					fill="none"
					height="10"
					viewBox="0 0 12 8"
					width="14"
					xmlns="http://www.w3.org/2000/svg">
					<path
						clipRule="evenodd"
						d="M2.16 2.3a.75.75 0 0 1 1.05-.14L6 4.3l2.8-2.15a.75.75 0 1 1 .9 1.19l-3.24 2.5c-.27.2-.65.2-.92 0L2.3 3.35a.75.75 0 0 1-.13-1.05z"
						fill="currentColor"
						fillRule="evenodd"
					/>
				</svg>
			</button>
			{isOpen ? (
				<div className="header-avatar__panel">
					<img src={ loginUser.user.photoURL ? loginUser.user.photoURL: 'http://placekitten.com/g/32/32' }/>
					<p>{loginUser.user.email}</p>
					<p>Имя:{loginUser.user.displayName}</p>
					<Link className="header-avatar__panel--profile" to="/profile">
						Личные данные
					</Link>
					<button className="header-avatar__panel--exit" onClick={() => exitFromAccount()}>
						<svg
							fill="none"
							height="20"
							viewBox="0 0 20 20"
							width="20"
							xmlns="http://www.w3.org/2000/svg">
							<path
								clipRule="evenodd"
								d="M9.25 2.1h.04a.75.75 0 1 1 0 1.5c-1.15 0-1.96 0-2.6.06-.62.05-1 .15-1.3.3-.62.31-1.12.81-1.43 1.42-.15.3-.25.69-.3 1.31-.05.63-.05 1.43-.05 2.57v1.48c0 1.14 0 1.94.05 2.57.05.62.15 1 .3 1.3.31.62.81 1.12 1.42 1.43.3.15.7.25 1.32.3.63.05 1.44.05 2.59.05a.75.75 0 0 1 0 1.5h-.04c-1.1 0-1.97 0-2.67-.05a4.9 4.9 0 0 1-1.88-.46 4.75 4.75 0 0 1-2.08-2.08 4.88 4.88 0 0 1-.46-1.87c-.05-.7-.05-1.56-.05-2.65V9.22c0-1.09 0-1.95.05-2.65.06-.71.18-1.32.46-1.87A4.75 4.75 0 0 1 4.7 2.62a4.9 4.9 0 0 1 1.88-.46c.7-.05 1.57-.05 2.67-.05zm4.5 4.51c.3-.29.77-.29 1.07 0l2.85 2.86c.3.3.3.77 0 1.06l-2.85 2.86a.75.75 0 1 1-1.06-1.06l1.57-1.58H8.57a.75.75 0 0 1 0-1.5h6.76l-1.57-1.58a.75.75 0 0 1 0-1.06z"
								fill="currentColor"
								fillRule="evenodd"
							/>
						</svg>
						Выйти
					</button>
				</div>
			) : null}
		</div>
	);
};
