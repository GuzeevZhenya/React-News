import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";

export const Post = ({ posts }) => {
  const post =
    posts &&
    posts.map((item) => (
      <div className="post" key={item.url}>
        <h2>{item.title}</h2>
        <img className="post-image" src={item.urlToImage} alt={item.title} />
        <p className="post-content">{item.content}</p>
        <Link className="post-button" to={`post/${encodeURIComponent(item.url)}`}>Full version</Link>
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
