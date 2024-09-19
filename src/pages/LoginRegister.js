import React, {useState} from "react";
import '../styles/LoginRegister.css';
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Background from "../assets/bg1.jpg";

const LoginRegister = () => {
    const [action, setAction] = useState('');
    const registerLink = () =>{
        setAction('active');
    };
    const loginLink = () =>{
        setAction('active');
    };
  return (
    <div className={'LoginRegister${action}'} style={{ backgroundImage: `url(${Background})` }}>
        <div className="form-box login">
        <form action="">
        <h1>Login</h1>
        <div className="input-box">
            <input type="text" placeholder="Username" required/>
            <FaUser className="icon" />
        </div>
        <div className="input-box">
            <input type="password" placeholder="Password" required/>
            <FaLock className="icon" />
        </div>
        <div className="remember-forget">
            <label><input type="checkbox"/>Remember me</label>
        </div>
        <button type="submit">Login</button>
        <div className="register-link">
            <p>Don't have an account?<a href="#register" onClick={registerLink}>Register</a></p>
        </div>
        </form>
        </div>

        <div className="form-box register">
        <form action="">
        <h1>Register</h1>
        <div className="input-box">
            <input type="text" placeholder="Username" required/>
            <FaUser className="icon" />
        </div>
        <div className="input-box">
            <input type="text" placeholder="Email" required/>
            <MdEmail className="icon" />
        </div>
        <div className="input-box">
            <input type="password" placeholder="Password" required/>
            <FaLock className="icon" />
        </div>
        <div className="remember-forget">
            <label><input type="checkbox"/>I agree to terms & conditions</label>
        </div>
        <button type="submit">Register</button>
        <div className="register-link">
            <p>Already have an account?<a href="#login" onClick={loginLink}>Login</a></p>
        </div>
        </form>
        </div>
        </div>
  );
}

export default LoginRegister;
