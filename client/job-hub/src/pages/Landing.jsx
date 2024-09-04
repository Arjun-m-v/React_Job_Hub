import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row,Col } from 'react-bootstrap';
import './landing.css';

function Landing() {
    return (
        <>
          <div className=''>
            <div className="landing-section" style={{
              backgroundImage: "url('https://cdn.pixabay.com/photo/2017/05/19/12/38/entrepreneur-2326419_1280.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '650px',
              width: '100%',
              overflow: 'hidden',
              border: 'none',
              display: 'flex',
              justifyContent: 'left',
              alignItems: 'center',}}>
              <div className="landing-content text-center m-5">
                    <div id='q1' className='text-center'>
                        <h1 className='text-white d-inline'>Find </h1>
                        <h1 className='text-dark d-inline' style={{fontFamily:'cursive'}}>Y</h1>
                        <h1 className='text-danger d-inline' style={{fontFamily:'cursive'}}>OUR </h1>
                        <h1 className='text-white d-inline'>Dream Job</h1>
                    </div>
                    <p className='text-white'>Explore thousands of job opportunities tailored just for you.</p>
                    <Link id='l1' className='btn btn-info m-3' to={'/employee'}>Find Jobs</Link>
              </div>
            </div>
          </div>



          <Card id='h1'>
                  <Card.Img style={{ height:'200px',width: '100%' }} variant="top" src="./src/images/Login Here-AMV Solutions....png" alt="no image"/>
                  <a className='stretched-link' href={'/log'}></a>
                </Card>

          <div className='' style={{height:'400px',width:'100%',alignItems:'left',justifyContent:'left'}}>
              <div className="landing-section text-center m-5">
                    <p className="text-muted">
                    <b>Welcome to AMV Solutions, your trusted partner in navigating the complexities of the digital world. Our mission is to empower businesses with innovative and tailored technology solutions that drive efficiency and growth. From cutting-edge software development to comprehensive IT consulting, AMV Solutions is dedicated to delivering excellence at every stage of your digital transformation journey.</b>
                    </p>
              </div>
              <div className="landing-section text-center m-5">
                    <p className="text-muted">
                    <b>At AMV Solutions, we believe that every business is unique, and so are its technology needs. Our team of experts works closely with you to understand your specific challenges and goals, crafting customized strategies that align with your vision. Whether you're a startup looking to establish a solid tech foundation or a large enterprise aiming to optimize your operations, we provide the expertise and support you need to succeed in a rapidly evolving digital landscape.</b>
                    </p>
              </div>
              <div className="landing-section text-center m-5">
                    <p className="text-muted">
                    <b>Join the many businesses that have already transformed their operations with AMV Solutions. Our commitment to innovation, quality, and customer satisfaction sets us apart as a leader in the industry. Discover how our tailored solutions can help your business thrive. Partner with AMV Solutions today and embark on a journey towards digital excellence.</b>        </p>
              </div>
          </div>
        </>
    );
}

export default Landing;
