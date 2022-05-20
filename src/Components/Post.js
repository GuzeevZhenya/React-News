import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";
import notFoundImage from '../image/images.png';

export const Post = ({ posts }) => {
  
  const post =
    posts &&
    posts.map((item) => (
      <div className="post" key={item.url}>
      <Link Link className="post-content" to={`post/${encodeURIComponent(item.url)}`}>
        <h2>{item.title}</h2>
        <div>
          <img className="post-image" src={item.urlToImage ? item.urlToImage : notFoundImage} alt={item.title} />
          <p className="post-content">{item.content}</p>
        </div>
      </Link>
      </div>
    ));

  return (
    <>
      <h2>Посты</h2>
      <div className="posts">
        {post}
      </div>
     
    </>
  );
};
