import "./App.css";
import { Routes, Route, useParams } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { FullPost } from "./Components/FullPost";
import { LogInPages } from "./pages/LogInPages"
import { RegistrationPages } from "./pages/RegistrationPages";
import { ProfilePages } from './pages/ProfilePages';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LogInPages/>}/>
        <Route path="/register" element={<RegistrationPages />} />
        <Route path="/profile" element={<ProfilePages/>}/>
        <Route path="/post/:id" element={<FullPost/>} />
      </Routes>
    </div>
  );
}

export default App;
