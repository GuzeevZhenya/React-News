import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, useParams } from "react-router-dom";
import { news } from "./api";
import { useEffect, useState } from "react";
import { Post } from "./Components/Post";
import { FullPost } from "./Components/FullPost";

function App() {
  const [posts, setPosts] = useState();
  const [searchingPost, setSearchingPost] = useState();
  useEffect(() => {
    news.getNews().then((data) => setPosts(data.articles));
  }, []);

  const getPosts = () => {
    setSearchingPost("");
    news.getNews(searchingPost).then((data) => setPosts(data.articles));
  };

  return (
    <div className="App">
      <input
        value={searchingPost}
        onChange={(e) => setSearchingPost(e.target.value)}
        className="main__search-input"
        placeholder="Что хотите посмотреть?"
        // onKeyDown={(e) => findFilmByEnter(e)}
      />
      <button onClick={() => getPosts()}>Найти</button>
      <Routes>
        <Route path="/" element={<Post posts={posts} />} exact />
        <Route path="/post/:id" element={<FullPost posts={posts} exact />} />
      </Routes>
    </div>
  );
}

export default App;
