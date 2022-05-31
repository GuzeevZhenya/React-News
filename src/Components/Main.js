import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Footer } from './Footer';
import { Post } from './Post';
import { news } from '../api';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { useSelector, useDispatch } from 'react-redux';
import { Header } from './Header/Header';


import './Main.css';

export const Main = ({}) => {

	const dispatch = useDispatch();
	const loginUser = useSelector((state) => state.loginReducer);
  const postsReducer = useSelector((state) => state.postsReducer);

  
	useEffect(() => {
    news.getNews().then((data) => dispatch({type:'ADD_POSTS',value:data}));
    
		const auth = getAuth();
		const user = auth.currentUser;

		if (user !== null) {
			// The user object has basic properties such as display name, email, etc.
			const displayName = user.displayName;
			const email = user.email;
			const photoURL = user.photoURL;
			const emailVerified = user.emailVerified;

			const uid = user.uid;
		}
	}, []);

	console.log(loginUser)

	return loginUser.exces ? (
		<div>
			<Header />
			<Post posts={postsReducer} />
			<Footer />
		</div>
	) : (
		<Navigate to="/login" />
	);
};
