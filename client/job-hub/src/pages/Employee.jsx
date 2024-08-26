import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { getCompanies } from '../ApiServices/allApis';
import { Col,Row } from 'react-bootstrap'


function Employee() {

  const [companies,setCompanies]=useState([])

  useEffect(()=>{
    getData()
  },[])

  const getData=async()=>{
    const result=await getCompanies()
    setCompanies(result.data)
    console.log(companies);
  }

  return (
    <>
    <Row>
        <Col sm={12} md={12}>
          <div className='container-fluid p-5 row'>
          {
            companies.length>0?
            companies.map(item=>(
              <Card style={{ width: '18rem' }} className='border shadow m-3'>
              <Card.Img variant="top" height={'200px'} src={item.image?item.image:"https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"} />
                <Card.Body>
                    <Card.Title><b>{item.company}</b></Card.Title>
                    <Card.Text><b>Required Skills : </b>{item.req_skills}</Card.Text>
                    <Card.Text><b>Required Qualifications : </b>{item.req_qualifications}</Card.Text>
                    <Card.Text><b>Contact : </b>{item.contact_number}</Card.Text>
                    <Link className='btn btn-success text-center' to={`/details/${item.id}`}>Check it out...</Link>    
                </Card.Body>
              </Card>
            ))
            :
            <h4 className='text-center text-danger'>No Jobs Available!!</h4>
          }
          </div>
        </Col>
    </Row>
    </>
  )
}

export default Employee
