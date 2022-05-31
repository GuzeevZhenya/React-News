import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch,useSelector } from 'react-redux';
import { Form } from "../Form";
import { useNavigate } from 'react-router-dom';


export const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const loginUser = useSelector((state) => state.loginReducer);
	
	const handleLogin = (email, password) => {
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
		
			const user = userCredential.user;
			dispatch({type:"ADD_USER",value:user})
			navigate('/')
		
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			alert(errorMessage)
		});
	}

	return (
		<Form
				formType="login"
				title="Вход в аккаунт"
				buttonTitle="Войти"
				handleCick={handleLogin}
		/>
)
}