import "./App.css";
import { Routes, Route, useParams } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { FullPost } from "./Components/FullPost";
import { LogInPages } from "./pages/LogInPages"
import { RegistrationPages } from "./pages/RegistrationPages";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LogInPages/>}/>
        <Route path="/register" element={<RegistrationPages/>}/>
        <Route path="/post/:id" element={<FullPost/>} />
      </Routes>
    </div>
  );
}

export default App;
