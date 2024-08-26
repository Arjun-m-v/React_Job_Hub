import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getToken } from '../ApiServices/allApis';
import { toast } from 'react-toastify';
import { Row, Col, Container } from 'react-bootstrap';


function Log() {

const [userData, setUserData] = useState({
    username: "",
    password: ""
});
const nav = useNavigate()

// // Handle input change for username
// const handleUsernameChange = (e) => {
//     setUserData({ ...userData, username: e.target.value });
// };

// // Handle input change for password
// const handlePasswordChange = (e) => {
//     setUserData({ ...userData, password: e.target.value });
// };

const handleLogin = async () => {
  const { username, password } = userData;
  if (!username || !password) {
      toast.warning("Enter Valid Inputs!!");
  } else {
      try {
          const result = await getToken(userData);
          if (result.status === 200) {
                console.log(result);
                sessionStorage.setItem("token",result.data.token)
                setUserData({username:"",password:""})
                toast.success("Login Successful!!");
                nav('/home');
          } else {
              toast.error("Login Failed!!");
              console.log(result);
          }
      } catch (error) {
          console.error("Error during login:", error);
          toast.error("Login Failed. Please try again later.");
      }
  }
};

  return (
    <>
      <div className='container my-5 m-3'>
          <div className='card m-3'>
            <div className='row g-0 align-items-center m-3'>
              <div className='col-md-4'>
                <img src='https://cdn.pixabay.com/photo/2015/02/02/11/08/office-620817_640.jpg' alt='phone' className='img-fluid rounded-t-5 m-3 rounded-tr-lg-0' fluid />
              </div>
              <div className='col-md-8'>
                <div className='card-body'>
                    <input className='form-control m-3' wrapperClass='mb-4' value={userData.username} onChange={(e)=>{setUserData({...userData,username:e.target.value})}} placeholder='Username' id='form2' type='text' />
                    <input className='form-control m-3' wrapperClass='mb-4' value={userData.password} onChange={(e)=>{setUserData({...userData,password:e.target.value})}} placeholder='Password' id='form3' type='password' />
                    <div className="d-flex justify-content-between mx-4 mb-4">
                      {/* <Link to={'/reg'}>New User? Sign Up...</Link> */}
                    </div>
                    <button type='button' onClick={handleLogin} className='btn btn-info mb-4 w-100 m-3'>Login</button>
                </div>
              </div>
            </div>
        </div>      
      </div>
    </>
  )
}

export default Log
