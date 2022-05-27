import { getAuth, onAuthStateChanged } from "firebase/auth";

import React from 'react'

export const GetLoginUser = () => {

	const auth = getAuth();
	const user = auth.currentUser;
	const UserInfo = () => {
		if (user !== null) {
			// The user object has basic properties such as display name, email, etc.
			const displayName = user.displayName;
			const email = user.email;
			const photoURL = user.photoURL;
			const emailVerified = user.emailVerified;
			
			console.log(user)
		
			// The user's ID, unique to the Firebase project. Do NOT use
			// this value to authenticate with your backend server, if
			// you have one. Use User.getToken() instead.
			const uid = user.uid;
	}

	}
}


