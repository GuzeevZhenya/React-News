import React, { useState } from "react";
import "./FullPost.css";
import { Link, useParams } from "react-router-dom";

export const FullPost = ({ posts }) => {
  let params = useParams();

  const [postsInfo, setPostsInfo] = useState(posts);

  // const post = posts.filter((obj) => obj.url === Number(params.id));
  const post = postsInfo && postsInfo.filter((obj) => obj.url === params.id);
  const date = new Date(post[0].publishedAt);
  console.log(post);

  return (
    <div className="full-post">
      <img
        className="full-post__img"
        src={post[0].urlToImage}
        alt={post[0].title}
      />
      <p className="full-post__date">
        Статья опубликована: {date.toLocaleString()}
      </p>
      <div className="full-post__content">
        <h1 className="full-post__title">{post[0].title}</h1>
        <p className="full-post__content">{post[0].content}</p>
        <Link className="full-post__back" to='/'>Назад</Link>
      </div>
    </div>
  );
};
