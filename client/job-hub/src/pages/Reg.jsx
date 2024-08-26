import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { UserRegister } from '../ApiServices/allApis';
import { Row, Col, Container } from 'react-bootstrap';

function Reg() {
    const [userData,setUserData]=useState({
        email:"",username:"",password:""
    })
    const nav=useNavigate()

    const handleRegister=async()=>{
        console.log(userData);
        const {email,username,password}=userData
        if(!email || !username || !password){
            toast.warning("Enter Valid Inputs!!")
        }
        else{
            const result=await UserRegister(userData)
            if(result.status==201){
                toast.success("User Registered Successfully!!")
                setUserData({
                    email:"",username:"",password:""
                })
                nav('/')
            }
            else{
                console.log(result)
                toast.error("User Registeration Failed!!")
            }
        }
    }
  return (
    <>
        <Container className="heading-container text-center">
            <h1 className="heading"><b>AMV Solutions</b></h1>
            <p className="quote" style={{ fontFamily: 'cursive' }}>Find the perfect match for your career</p>
        </Container>
      <MDBContainer className='my-5'>
      <MDBCard>

        <MDBRow className='g-0 d-flex align-items-center'>
          <MDBCol md='4'>
            <MDBCardImage src='https://cdn.pixabay.com/photo/2021/11/14/18/36/telework-6795505_640.jpg' alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
          </MDBCol>

          <MDBCol md='8'>

            <MDBCardBody>

              <MDBInput wrapperClass='mb-4' onChange={(e)=>{setUserData({...userData,email:e.target.value})}} placeholder='Email Address' id='form1' type='email'/>
              <MDBInput wrapperClass='mb-4' onChange={(e)=>{setUserData({...userData,username:e.target.value})}} placeholder='UserName' id='form2' type='text'/>
              <MDBInput wrapperClass='mb-4' onChange={(e)=>{setUserData({...userData,password:e.target.value})}} placeholder='Password' id='form3' type='password'/>

              <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                <Link to={'/'}>Old User? Sign In...</Link>
              </div>

              <button type='button' className='btn btn-info mb-4 w-100' onClick={handleRegister}>Register</button>

            </MDBCardBody>

          </MDBCol>

        </MDBRow>

      </MDBCard>
    </MDBContainer>
    <Container className="landing-section text-center">
        <p className="text-muted">
          <b>Welcome to AMV Solutions, your trusted partner in navigating the complexities of the digital world. Our mission is to empower businesses with innovative and tailored technology solutions that drive efficiency and growth. From cutting-edge software development to comprehensive IT consulting, AMV Solutions is dedicated to delivering excellence at every stage of your digital transformation journey.</b>
        </p>
      </Container>
      <Container className="landing-section text-center">
        <p className="text-muted">
          <b>At AMV Solutions, we believe that every business is unique, and so are its technology needs. Our team of experts works closely with you to understand your specific challenges and goals, crafting customized strategies that align with your vision. Whether you're a startup looking to establish a solid tech foundation or a large enterprise aiming to optimize your operations, we provide the expertise and support you need to succeed in a rapidly evolving digital landscape.</b>
        </p>
      </Container>
      <Container className="landing-section text-center">
        <p className="text-muted">
          <b>Join the many businesses that have already transformed their operations with AMV Solutions. Our commitment to innovation, quality, and customer satisfaction sets us apart as a leader in the industry. Discover how our tailored solutions can help your business thrive. Partner with AMV Solutions today and embark on a journey towards digital excellence.</b>        </p>
      </Container>

    </>
  );
}

export default Reg;