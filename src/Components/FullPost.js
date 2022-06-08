import React, { useState,useEffect  } from "react";
import "./FullPost.css";
import { Link, useParams,useNavigate } from "react-router-dom";
import { updateNews } from '../api';


export const FullPost = () => {
  let params = useParams();
  const navigate = useNavigate();
  console.log(params)
  
  const [postsInfo, setPostsInfo] = useState(null);
  console.log(postsInfo)

  const goBack = ()=> navigate(-1)
  
  useEffect(() => {
    updateNews.updateNewsInfo(params).then(info=>setPostsInfo(info))
  }, [params]);
console.log(params)

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
          <Link to={`/post/${encodeURIComponent(params.id)}/edit`}>Редактировать пост</Link>
      <button className="full-post__back" onClick={goBack}>Назад</button>
        </div>
      </>) : null}
     
    </div>
  );
};
