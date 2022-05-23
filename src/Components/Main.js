import React,{useState} from 'react';
import { Footer } from './Footer';
import { Post } from './Post';

import './Main.css'

export const Main = ({ posts, getPosts }) => {
	
	const [searchingPost, setSearchingPost] = useState('');
	 
  return (
		<div>
		  <input
        value={searchingPost}
        type="search"
        placeholder="search"
        onChange={(e) => setSearchingPost(e.target.value)}
        className="main__search-input"
        
        // onKeyDown={(e) => findFilmByEnter(e)}
      />
      <button className="btn" onClick={() => getPosts(searchingPost)}>Найти</button>
      <Post posts={posts} searchingPost={searchingPost} />
      <Footer/>
    </div>
  );
};
