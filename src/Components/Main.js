import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Footer } from './Footer';
import { Post } from './Post';
import { news } from '../api';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import './Main.css';
import { useSelector, useDispatch } from 'react-redux';

export const Main = ({}) => {
	const [searchingPost, setSearchingPost ] = useState([]);
  const [posts, setPosts] = useState();
  const [isUserLogIn, setIsUserLogIn] = useState(false);

  const dispatch = useDispatch();
  const loginUser = useSelector((state) => state.loginReducer);
  console.log(loginUser.exces)
  
	useEffect(() => {
    news.getNews().then((data) => setPosts(data.articles));
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

	// useEffect(() => {
	//     news.getNews(searchingPost).then((data) => setPosts(data.articles));
	// },[])

	return loginUser.exces ? (
        <div>
        <input
          value={searchingPost}
          type="search"
          placeholder="search"
          onChange={(e) => setSearchingPost(e.target.value)}
          className="main__search-input"
        />
        <button className="btn" onClick={() => setSearchingPost(searchingPost)}>
          Найти
        </button>
              
      <Post posts={posts} searchingPost={searchingPost} />
        <Footer />
      </div>
    
    
	) : <Navigate to="/login" />;
};
