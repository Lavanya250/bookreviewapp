
import React from 'react'
import './login.css'
function Start()
{
    return (
        <div>
            <h2>Log In</h2>
            <label>EMAIL: </label>
            <input type="text" placeholder="Enter your email" required></input>
            <br></br><br></br>
            <label>PASSWORD:</label>
            <input type="password" placeholder="Enter password" required></input>
            <p className='lav'>Forgot password?</p>
            <br></br><br></br>
            <button>Log in</button>
            <p>Doesn't have an account?  Sign Up </p>
        </div>
    )
}
export default Start;