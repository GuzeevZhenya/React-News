import React,{useState,useEffect} from 'react';
import { Footer } from './Footer';
import { Post } from './Post';
import { news } from "../api";

import './Main.css'

export const Main = ({ }) => {
	
  const [searchingPost, setSearchingPost] = useState([]);
  const [posts, setPosts] = useState();
  
  useEffect(() => {
    news.getNews().then((data) => setPosts(data.articles));
     
  }, []);
 
  // useEffect(() => {
  //     news.getNews(searchingPost).then((data) => setPosts(data.articles));
  // },[])

 
  return (
		<div>
		  <input
        value={searchingPost}
        type="search"
        placeholder="search"
        onChange={(e) => setSearchingPost(e.target.value)}
        className="main__search-input"
      />
      <button className="btn" onClick={() => setSearchingPost(searchingPost)}>Найти</button>
      <Post posts={posts} searchingPost={searchingPost} />
      <Footer/>
    </div>
  );
};
