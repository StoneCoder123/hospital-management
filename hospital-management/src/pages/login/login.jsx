import React, { useContext } from 'react'
import AuthContext from '../../AuthContext';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar';
import Fake from '../../utility/Fake';
import './login.css';
const Login = () => {
    let {login} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        const data = new URLSearchParams();
        data.append('userType', document.getElementById('userType').value);
        data.append('email', document.getElementById('email').value);
        data.append('password', document.getElementById('password').value);
        if(await login(data)) {
            navigate('/');
        } else {
            alert('Invalid credentials');
        }
    }
  return (
    <div>

        {/* <h1>Login</h1>
        <form onSubmit={handleLogin}>
            <select id='userType'>
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
                <option value="admin">Admin</option>
                <option value="chemist">Chemist</option>
            </select>
            <input id='email' type="text" placeholder="Email" />
            <input id='password' type="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form> */}

        <Navbar />
        <Fake />
        <div className="login_div">
            <h1 className='login_heading'>Login</h1>
            <form onSubmit={handleLogin} className='login_form'>
                <div className='login_div'>
                    <label className='login_label' htmlFor="userType">Who are you? :</label>
                        <select className='login_select' id="userType">
                            <option value="patient">Patient</option>
                            <option value="doctor">Doctor</option>
                            <option value="chemist">Chemist</option>
                            <option value="admin">Admin</option>
                        </select>
                </div>

                <div className='login_div'>
                    <label className='login_label' htmlFor="email">Email :</label>
                    <input className='login_input' id="email" type="text" placeholder="Email" />
                </div>
                <div className='login_div'>
                    <label className='login_label' htmlFor="password">Password :</label>
                    <input className='login_input' id="password" type="password" placeholder="Password" />
                </div>
                <button className='login_button' type="submit">Login</button>
            </form>
        </div>

    </div>
  )
}

export default Login