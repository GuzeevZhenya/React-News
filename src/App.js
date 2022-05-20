import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, useParams } from "react-router-dom";
import { news } from "./api";
import { useEffect, useState } from "react";
import { Main } from "./Components/Main";
import { FullPost } from "./Components/FullPost";

function App() {
  const [posts, setPosts] = useState();
  const [searchingPost, setSearchingPost] = useState();


  useEffect(() => {
    news.getNews().then((data) => setPosts(data.articles));
  }, []);

  const getPosts = (post) => {
    
    setSearchingPost("");
    news.getNews(post).then((data) => setPosts(data.articles));
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main posts={posts} getPosts={getPosts}/>}/>
        <Route path="/post/:id" element={<FullPost posts={posts}/>} />
      </Routes>
    </div>
  );
}

export default App;
