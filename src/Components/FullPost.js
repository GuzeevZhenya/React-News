import React, { useState,useEffect  } from "react";
import "./FullPost.css";
import { Link, useParams } from "react-router-dom";
import { updateNews } from "../api";

export const FullPost = ({ posts }) => {
  let params = useParams();

  const [postsInfo, setPostsInfo] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    updateNews.updateNewsInfo(params).then(info=>setPostsInfo(info))
  }, []);
  console.log(postsInfo)

  // const post = posts.filter((obj) => obj.url === Number(params.id));
  // const post = postsInfo && postsInfo.filter((obj) => obj.url === params.id);
  // console.log(post)
  let date;
  let postContent;
  if (postsInfo) {
     date = new Date(postsInfo[0].publishedAt); 
     postContent = postsInfo[0].content.substring(0, postsInfo[0].content.indexOf("[+"));
  }

  return (
    <div className="full-post">
    {postsInfo ?(<> <img
      className="full-post__img"
      src={postsInfo[0].urlToImage}
      alt={postsInfo[0].title}
    />
    <p className="full-post__date">
      Статья опубликована: {date && date.toLocaleString()}
    </p>
    <div className="full-post__content">
      <h1 className="full-post__title">{postsInfo[0].title}</h1>
      <p className="full-post__content">{postContent}</p>
      <Link className="full-post__back" to='/'>Назад</Link>
        </div>
      </>) : null}
     
    </div>
  );
};
