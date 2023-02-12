import './login.css';
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/authContext";
import { useContext } from "react";

const Login = () => {

    const { login } = useContext(AuthContext);

    const handleLogin = () => {
        login();
    }

    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Hello World.</h1>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <span>Don't you have an account</span>
                    <Link to="/register">
                        <button>Register</button>
                    </Link>

                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form action="">
                        <input type="text" placeholder='Username' />
                        <input type="password" placeholder='Password' />
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default Login;