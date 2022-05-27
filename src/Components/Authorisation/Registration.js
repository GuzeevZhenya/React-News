import { useState } from 'react';
import { Form } from '../Form';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { UseAuth } from '../hooks/useAuth';

export const Registration = () => {
	const [userDate, setUserDate] = useState('');
	const navigate = useNavigate();
	
	// const userInfo = UseAuth(userDate);
	// 	console.log(userDate)

	const handleRegister = (email, password) => {
		const auth = getAuth();
	 
		createUserWithEmailAndPassword(auth, email, password)
			.then(({user}) => {
				// Signed in
				// const user = userCredential.user;
				// setUserData(user);
				setUserDate(user)
				
			
				navigate('/login')
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				alert(errorMessage)
			});
	}

	return (
		<Form title="sign in" handleCick={handleRegister}/>
	)

};
