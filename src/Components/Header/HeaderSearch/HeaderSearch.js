import React,{useState} from 'react';
import { news } from '../../../api';

export const HeaderSearch = () => {
	const [ searchingPost, setSearchingPost ] = useState([]);
	const [ posts, setPosts ] = useState();

	const getSearchingPosts = () => {
		news.getNews(searchingPost).then((data) => setPosts(data.articles));
	};
	return (
		<div className="header__search">
			<input
				value={searchingPost}
				type="search"
				placeholder="search"
				onChange={(e) => setSearchingPost(e.target.value)}
				className="header__search-input"
			/>
			<button className="header__search-button" onClick={() => getSearchingPosts()} />
		</div>
	);
};
