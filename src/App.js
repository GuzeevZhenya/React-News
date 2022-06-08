import './App.css';
import { Routes, Route, Navigate, useParams, useRouteMatch, useLocation } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { FullPost } from './Components/FullPost';
import { LogInPages } from './pages/LogInPages';
import { RegistrationPages } from './pages/RegistrationPages';
import { ProfilePages } from './pages/ProfilePages';
import PrivateRoute from './Components/Routing/PrivateRoute';
import { CreatePost } from './Components/CreatePost';
import { EditPost } from './Components/EditPost';


import { RequireAuth } from './Components/Routing/RequireAuth';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/React-News" element={<Navigate to="/" replace/>} />
				<Route path="/login" element={<LogInPages />} />
				<Route path="/register" element={<RegistrationPages />} />

				{
					// 1 Вариант				
				}
				<Route path='profile' element={
					<RequireAuth>
						<ProfilePages/>
					</RequireAuth>
				 }/>
				{
					//2 Вариант
				}
				<Route path="/" element={<PrivateRoute />}>					
					<Route path="post/new" element={<CreatePost />} />
					<Route path="post/:id" element={<FullPost/>} />
					<Route path="post/:id/edit" element={<EditPost/>}/>
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
