import './App.css';
import { Routes, Route, Navigate, useParams, useRouteMatch, useLocation } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { FullPost } from './Components/FullPost';
import { LogInPages } from './pages/LogInPages';
import { RegistrationPages } from './pages/RegistrationPages';
import { ProfilePages } from './pages/ProfilePages';
import PrivateRoute from './Components/Routing/PrivateRoute';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/React-News" element={<Navigate to="/" />} />
				<Route path="/login" element={<LogInPages />} />
				<Route path="/register" element={<RegistrationPages />} />

        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<ProfilePages />} />
        </Route>
				{
					//        ИЛИ
					//<Route path="/not-found" element={<NotFound />} />
					//<Route path="*" element={<Navigate to='/not-found'/>}/>
				}
			</Routes>
		</div>
	);
}

export default App;
