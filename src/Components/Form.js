import { useState } from 'react';
import './Form.css';
import passwordEye from '../image/eye-off.svg';
import passwordVisible from '../image/eye.svg';
import { GoogleAuth } from './Authorisation/GoogleAuth';
import { Link } from 'react-router-dom';

export const Form = ({ title, handleCick, buttonTitle, formType }) => {
	const [ email, setEmail ] = useState('');
	const [ pass, setPass ] = useState('');
	const [ name, setName ] = useState('');
	const [ isVisiblePassword, setIsVisiblePassword ] = useState(false);

	const setVisiblePassword = () => {
		setIsVisiblePassword(!isVisiblePassword);
	};

	return (
		<div className="box">
			<div className="box-container">
				<h1>{title}</h1>
				{formType === 'login' ? <GoogleAuth /> : null}
				{formType === 'login' ? null : (
					<div className="input__container">
						<label htmlFor="name">Name</label>
						<input
							className="box__input"
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
				)}
				<div className="input__container">
					<label htmlFor="email">Email</label>
					<input
						className="box__input"
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="input__container">
					<label htmlFor="password">Password</label>
					<input
						className="box__input"
						type={isVisiblePassword ? 'text' : 'password'}
						value={pass}
						onChange={(e) => setPass(e.target.value)}
					/>
					<div className="password__btn" onClick={() => setVisiblePassword()}>
						{isVisiblePassword ? (
							<img className="password__btn-img" src={passwordVisible} alt={passwordVisible} />
						) : (
							<img className="password__btn-img" src={passwordEye} alt={passwordVisible} />
						)}
					</div>
				</div>

				<button className="box__button" type="submit" onClick={() => handleCick(email, pass, name)}>
					{buttonTitle}
				</button>
				{formType === 'login' ? (
					<p>
						Новый пользователь?<Link to="/register"> Зарегистрируйся</Link>
					</p>
				) : (
					<p>
						Уже зарегистрированы?
						<Link to="/login"> Войти</Link>
					</p>
				)}
			</div>
		</div>
	);
};
