import React, { useState } from 'react'
import './login.css';
import logoImage from '../assets/header_logo.png';



const Login = () => {

    const [username, setUsername] = useState('guest');


    return (


        <div className="container">
            <div className="login-page">
                <img src={logoImage} alt="Barracuda Logo" className="logo-image" />
                <div className="form">
                    <form className='login-form'>
                        <p> Please enter your administrator login and password.</p>
                        <input type="text" value={username} name='username' id='username' placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
                        <input type="password" name='password' id='password' placeholder='Password' />
                        <button className='btn'>Sign in</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Login;


