import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './landing.css';

function Home() {

  const nav = useNavigate();

  const Logout = () => {
    nav('/');
    sessionStorage.removeItem('token');
  };

  return (
    <div className="landing-page">
      <Container className="d-flex justify-content-end">
        <button className='btn btn-danger m-3' onClick={Logout}>LogOut</button>
      </Container>
      <Container className="heading-container text-center">
        <h1 className="heading"><b>AMV SOLUTIONS</b></h1>
        <p className="quote" style={{ fontFamily: 'cursive' }}>Find the perfect match for your career</p>
      </Container>
        <div className='m-3' md={8} style={{width:'100%'}}>
          <div className="landing-section" style={{
            backgroundImage: "url('https://cdn.pixabay.com/photo/2022/04/04/16/24/technology-7111763_960_720.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '500px', 
            width: '100%'
          }}>
            <div className="landing-content h-100">
              <h1 className='m-2 text-white'>Hire Top Talent</h1>
              <p className='m-2 text-white'>Connect with skilled professionals to grow your team.</p>
              <Link className='m-3 btn btn-info' to={'/company'}>Offer Jobs and see applicants</Link>
            </div>
          </div>
        </div>

          <div>
          <Row className='align-items-center m-3'>
            <Col>
              <Card id='c1'>
                  <Card.Img  style={{ height:'200px',width: '100%' }} variant="top" src="https://th.bing.com/th/id/OIP.xPBLZGDr4fIoD-MAi8YbvAHaFj?w=236&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
                  <Card.Body>
                    <Card.Title><b>Show Offered Jobs</b></Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <a className='stretched-link' href={'/jobs'}></a>
                  </Card.Body>
                </Card>
            </Col>
          </Row>
          </div>


      {/* <Container className="landing-section text-center">
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
          <b>Join the many businesses that have already transformed their operations with AMV Solutions. Our commitment to innovation, quality, and customer satisfaction sets us apart as a leader in the industry. Discover how our tailored solutions can help your business thrive. Partner with AMV Solutions today and embark on a journey towards digital excellence.</b>
        </p>
      </Container> */}

    </div>
  );
}

export default Home;
