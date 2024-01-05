import React from 'react';
import './register.css';
function End() {
  return (
    <div className='reg'>
      <p><b>Sign Up</b></p>
      <label htmlFor="user">Name:</label>
      <input type="text" id="user" name="user" placeholder="" />
      <br />
      {/* <label htmlFor='gender'>Gender:</label>
      <div className='li'>
        <input type="radio" name="gender" value="male" required /> Male
        <input type="radio" name="gender" value="female" required /> Female
      </div> */}
      <br />
      <label htmlFor="dob">D.O.B:</label>
      <input type="date" id="dob" required />
      <br />
      <label htmlFor="email">E-mail:</label>
      <input type="email" id="email" placeholder="" required />
      <br />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" placeholder="" />
      <br />
      <br />
      <label htmlFor="contactNumber">Contact Number:</label>
      <input type="tel" placeholder="Enter your phone number" required />
      <br />
      <br />
      <center><button>SIGN UP</button></center>
      <b>Already have an account?</b>
      <i>Log in</i>

    </div>
  );
}
export default End;


