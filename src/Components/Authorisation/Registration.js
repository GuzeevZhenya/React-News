import { Form } from '../Form';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const Registration = () => {
		const navigate = useNavigate();

	const handleRegister = (email, password) => {
		
		const auth = getAuth();
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				console.log(user)
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
