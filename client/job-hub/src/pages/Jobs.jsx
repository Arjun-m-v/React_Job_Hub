import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { getAppliedCompanies } from '../ApiServices/allApis';

function Jobs() {
  const [companies, setAppliedCompanies] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(companies);
  }, [companies]);

  const getData = async () => {
    const result = await getAppliedCompanies();
    setAppliedCompanies(result.data);
  };

  return (
    <>
      <div className='container-fluid p-5 row'>
        {companies.length > 0 ? (
          companies.map(item => (
            <Card key={item.id} style={{ width: '30rem' }} className='border shadow m-3'>
              <div className='m-1'>
                <button className='btn btn-info m-1'>Edit</button>
                <button className='btn btn-danger m-1'>Delete</button>
              </div>
              <Card.Img variant="top" height={'200px'} src={item.image?item.image:"https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"} />
              <Card.Body>
                <Card.Title>position : <b>{item.company}</b></Card.Title>
                <Card.Text><b>Location : </b>{item.location}</Card.Text>
                <Card.Text><b>Required Skills : </b>{item.req_skills}</Card.Text>
                <Card.Text><b>Required Qualifications : </b>{item.req_qualifications}</Card.Text>
                <Card.Text><b>Salary : </b>{item.salary}</Card.Text>
                <Card.Text><b>Contact : </b>{item.contact_number}</Card.Text> 
                <Card.Text><b>Note : </b>{item.notes}</Card.Text> 
              </Card.Body>
            </Card>
          ))
        ) : (
          <h4 className='text-center text-danger'>No Jobs Available!!</h4>
        )}
      </div>
    </>
  );
}

export default Jobs;
