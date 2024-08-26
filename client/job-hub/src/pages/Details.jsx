import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Col,Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import { getSpecificCompany } from '../ApiServices/allApis';
import AddEmployee from '../components/AddEmployee';


function Details() {
  const [company,setCompany]=useState({})
  const {id}=useParams()
  console.log(id);

  useEffect(()=>{
    getData()
  },[])

  const getData=async()=>{
    const result=await getSpecificCompany(id)
    if(result.status==200){
      setCompany(result.data)
    }
    else{
      console.log(result)
    }
  }

  console.log(company)

  return (
    <>
    
    <Row>
        <Col sm={12} md={12}>
          <div className='container-fluid p-5 row'>

                <Card style={{ width: '40rem' }} className='border shadow m-3'>
              <Card.Img variant="top" width={'100%'} height={'300px'} src={company.image?company.image:"https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"} />
                <Card.Body>
                    <Card.Title>position : <b>{company.company}</b></Card.Title>
                    <Card.Text><b>Location : </b>{company.location}</Card.Text>
                    <Card.Text><b>Required Skills : </b>{company.req_skills}</Card.Text>
                    <Card.Text><b>Required Qualifications : </b>{company.req_qualifications}</Card.Text>
                    <Card.Text><b>Salary : </b>{company.salary}</Card.Text>
                    <Card.Text><b>Contact : </b>{company.contact_number}</Card.Text> 
                    <Card.Text><b>Note : </b>{company.notes}</Card.Text> 
                    <AddEmployee/>
                </Card.Body>
              </Card>

          </div>
        </Col>
    </Row>
    </>
  )
}

export default Details
