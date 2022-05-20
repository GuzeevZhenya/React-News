import React,{useState} from 'react';
import { Post } from './Post';

export const Main = ({ posts, getPosts }) => {
	
	const [searchingPost, setSearchingPost] = useState('');
	 
  return (
		<div>
		  <input
        value={searchingPost}
        onChange={(e) => setSearchingPost(e.target.value)}
        className="main__search-input"
        placeholder="Что хотите посмотреть?"
        // onKeyDown={(e) => findFilmByEnter(e)}
      />
      <button onClick={() => getPosts(searchingPost)}>Найти</button>
      <Post posts={posts} />
    </div>
  );
};
