import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Form } from "../Form";


export const Login = () => {
	const handleLogin = (email, password) => {
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in 
			const user = userCredential.user;
			console.log(user)
			// ...
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
		});
	}

	return (
		<Form
				title="sign in"
				handleCick={handleLogin}
		/>
)
}