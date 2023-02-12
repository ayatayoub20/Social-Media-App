import "./register.css";
import {Link} from "react-router-dom";

const register= ()=> {
    return (
        <div className='register'>
            <div className="card">
                    <div className="right">
                        <h1>Register</h1>
                        <form action="">
                            <input type="text" placeholder='Username'/>
                            <input type="email" placeholder='Email'/>
                            <input type="text" placeholder='Name'/>
                            <input type="password" placeholder='Password'/>
                            <button>Register</button>
                        </form>
                    </div>
                    <div className="left">
                        <h1>Social App.</h1>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <span>Do you have an account</span>
                        <Link to="/login">
                        <button>Login</button>
                        </Link>
                       
                    </div>
                </div>
        </div>
    );
}
export default register
