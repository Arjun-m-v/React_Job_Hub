import React from 'react'
import Card from 'react-bootstrap/Card';
import { useEffect,useState } from 'react';
import { getAppliedCompanies } from '../ApiServices/allApis';

function Jobs() {

  const [companies,setCompanies]=useState([])

  useEffect(()=>{
    getData()
  },[])

  const getData=async()=>{
    const result=await getAppliedCompanies()
    setCompanies(result.data)
    console.log(companies);
  }

  return (
    <>
                <div className='container-fluid p-5 row'>
                  {
                    companies.length>0?
                    companies.map(item=>(
                      <Card style={{ width: '30rem' }} className='border shadow m-3'>
                      <div className='m-1'>
                        <button className='btn btn-info m-1'>Edit</button>
                        <button className='btn btn-danger m-1'>Delete</button>
                      </div>
                      <Card.Img variant="top" height={'200px'} src='' />
                          <Card.Body>
                          <Card.Title>position : <b>{item.company}</b></Card.Title>
                          <Card.Text><b>Location : </b>location</Card.Text>
                          <Card.Text><b>Required Skills : </b>req_skills</Card.Text>
                          <Card.Text><b>Required Qualifications : </b>req_qualifications</Card.Text>
                          <Card.Text><b>Salary : </b>salary</Card.Text>
                          <Card.Text><b>Contact : </b>contact_number</Card.Text> 
                          <Card.Text><b>Note : </b>notes</Card.Text> 
                          </Card.Body>
                      </Card>
                      ))
                      :
                      <h4 className='text-center text-danger'>No Jobs Available!!</h4>
                  }
                </div>
    </>
  )
}

export default Jobs
