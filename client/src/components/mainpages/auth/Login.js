import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {_axios as axios} from '../../../constant/constant'
import { BASEURL } from '../../../constant/constant.js'
function Login() {
    const [user, setUser] = useState({
        email:'', password: ''
    })
     const baseurl= BASEURL

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const loginSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post(baseurl+'/user/login',{...user}, {withCredentials: true})



        localStorage.setItem('firstLogin', true)
        window.location.href = "/";
           
        } catch (err) {
            alert(err.message)
        }
    }

    return (
        <div className="login-page">
            <form onSubmit={loginSubmit}>
                <h2>Login</h2>
                <input type="email" name="email" required
                placeholder="Email" value={user.email} onChange={onChangeInput} />

                <input type="password" name="password" required autoComplete="on"
                placeholder="Password" value={user.password} onChange={onChangeInput} />

                <div className="row">
                    <button type="submit">Login</button>
                    <Link to="/register">Register</Link>
                </div>
            </form>
        </div>
    )
}

export default Login
