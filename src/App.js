import logo from './logo.svg';
import './App.css';
import Login from './pages/login/Login'; 
import Register from './pages/register/register';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar/NavBar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import "./style.css";
import { useContext } from 'react';
import { DarkModeContext } from './Context/darkmodeContex';
import { AuthContext } from './Context/authContext';

function App() {

const {currentUser} = useContext(AuthContext);
const {darkMode} = useContext(DarkModeContext);

const Layout = () => {
  return (
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
      <Navbar theme = {darkMode} />
      <div style={{ display: "flex" }}>
        <LeftBar theme = {darkMode} />
        <div style={{ flex: 6 }}>
          <Outlet />
        </div>
        <RightBar theme = {darkMode} />
      </div>
    </div>
  );
}
const ProtectedRoute = ({ children }) => {
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return children;
};
const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <ProtectedRoute>  
      <Layout />
    </ProtectedRoute>,
    children: [
      {
        path:'/',
        element: <Home />
      },
      {
        path:'/profile/:id',
        element: <Profile />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
