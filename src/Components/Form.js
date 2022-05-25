import { useState } from "react";

export const Form = ({title,handleCick}) => {
	const [email,setEmail] = useState('');
	const [pass,setPass] = useState('');
	return (
		<div>
			<input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
			<input type="password" value={pass} onChange={(e) => setPass(e.target.value)} />
			<button onClick={()=>handleCick(email,pass)}>
				{title}
			</button>
		</div>
	)
}