import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addEmployee } from '../ApiServices/allApis';
import { toast } from 'react-toastify';

function AddEmployee() {

    const [show, setShow] = useState(false);
    const [employeeData, Setemployee] = useState({
        employee:"",email:"",phone:"",qualification:"",qualification_percentage:"",passout_year:"",no_of_backlogs:"",resume:""
    });

    const handleSubmit=async()=>{
        console.log(employeeData);
        const {employee,email,phone,qualification,qualification_percentage,passout_year,no_of_backlogs,resume}=employeeData
        if(!employee || !email || !phone || !qualification || !qualification_percentage || !passout_year || !no_of_backlogs || !resume){
            toast.warning("Enter Valid Inputs!!")
        }
        else{
            const formData=new FormData()
            formData.append("employee",employeeData.employee)
            formData.append("email",employeeData.email)
            formData.append("phone",employeeData.phone)
            formData.append("qualification",employeeData.qualification)
            formData.append("qualification_percentage",employeeData.qualification_percentage)
            formData.append("passout_year",employeeData.passout_year)
            formData.append("no_of_backlogs",employeeData.no_of_backlogs)
            formData.append("resume",employeeData.resume)

            const header={
                "Content-Type":"multipart/form-data",
                "Authorization":`Token ${sessionStorage.getItem('token')}`
            }

            const result=await addEmployee(header,formData)

            if(result.status==201){
                toast.success("Employee Added Successfully!!")
                handleClose()
                Setemployee({
                    employee:"",email:"",phone:"",qualification:"",qualification_percentage:"",passout_year:"",no_of_backlogs:"",resume:""
                })
            }
            else{
                console.log(result)
                toast.error("Employee Registration Failed!!")
            }
        }
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
        <Link className='btn btn-info' onClick={handleShow}>Apply for this job...</Link> 

        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add Your Details ...</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FloatingLabel controlId="floatingName" label="Employee Name" className="mb-3">
                    <Form.Control type="text" placeholder="" onChange={(e)=>{Setemployee({...employeeData,employee:e.target.value})}} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingEmail" label="Email address" className="mb-3">
                    <Form.Control type="email" placeholder="" onChange={(e)=>{Setemployee({...employeeData,email:e.target.value})}} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPhone" label="Phone Number" className="mb-3">
                    <Form.Control type="Number" placeholder="" onChange={(e)=>{Setemployee({...employeeData,phone:e.target.value})}} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingQualification" label="Qualification" className="mb-3">
                    <Form.Control type="text" placeholder="" onChange={(e)=>{Setemployee({...employeeData,qualification:e.target.value})}} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPercentage" label="Qualification Percentage" className="mb-3">
                    <Form.Control type="text" placeholder="" onChange={(e)=>{Setemployee({...employeeData,qualification_percentage:e.target.value})}} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassout" label="Passout Year" className="mb-3">
                    <Form.Control type="Number" placeholder="" onChange={(e)=>{Setemployee({...employeeData,passout_year:e.target.value})}} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingBacklogs" label="Number of Backlogs" className="mb-3">
                    <Form.Control type="email" placeholder="" onChange={(e)=>{Setemployee({...employeeData,no_of_backlogs:e.target.value})}} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingResume" label="Resume" className="mb-3">
                    <Form.Control type="file" placeholder="" onChange={(e)=>{Setemployee({...employeeData,resume:e.target.files[0]})}} />
                </FloatingLabel>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSubmit}>Submit</Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}

export default AddEmployee
