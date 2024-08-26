import React from 'react'
import { Row,Col } from 'react-bootstrap'
import AddCompany from '../components/AddCompany'
import { useEffect,useState } from 'react';
import { getEmployees } from '../ApiServices/allApis';

function Company() {

    const [employees,setEmployees]=useState([])

  useEffect(()=>{
    getData()
  },[])

  const getData=async()=>{

    const header={
        "Content-Type":"multipart/form-data",
        "Authorization":`Token ${sessionStorage.getItem('token')}`
    }

    const result=await getEmployees(header)
    setEmployees(result.data)
    console.log(employees);
  }

  return (
    <>
        <div>
            <Row>
                <Col sm={6} md={2}>
                    <AddCompany/>
                </Col>
                <Col sm={4} md={10}>
                <div className='container-fluid p-5 row'>
                
                        <table className='table table-dark table-bordered m-3'>
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Qualification</th>
                            <th>Qualification Percentage</th>
                            <th>Passout Year</th>
                            <th>Backlogs</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Resume</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            employees.length>0?
                            employees.map(item=>(
                                <tr>
                                    <td>{item.employee}</td>
                                    <td>{item.qualification}</td>
                                    <td>{item.qualification_percentage}</td>
                                    <td>{item.passout_year}</td>
                                    <td>{item.no_of_backlogs}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>
                                    <a href={item.resume} target="blank" rel="noopener noreferrer">View CV</a>
                                    </td>
                                </tr>

                                
                            ))
                            :
                            <h4 className='text-center text-danger'>No Employees!!</h4>
                            }
                        </tbody>
                </table>
                </div>
                
                </Col>
            </Row>
        </div>
    </>
  )
}

export default Company
