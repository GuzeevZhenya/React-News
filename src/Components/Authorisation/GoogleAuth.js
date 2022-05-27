import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const GoogleAuth = () => {
	const provider = new GoogleAuthProvider();
	const navigate = useNavigate();
	
	const GoogleAuthButton = () => {
		const auth = getAuth();
	
		signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				// The signed-in user info.
				const user = result.user;
				console.log(user)
				navigate('/')
				// ...
			})
			 
	};

	return (
		<div>
			<button onClick={() => GoogleAuthButton()}>Google</button>
		</div>
	);
};
