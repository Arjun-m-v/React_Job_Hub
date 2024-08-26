import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCompany } from '../ApiServices/allApis';
import { toast } from 'react-toastify';

function AddCompany() {

    const [show, setShow] = useState(false);
    const [companyData, Setcompany] = useState({
        company:"",location:"",req_skills:"",req_qualifications:"",salary:"",contact_number:"",notes:"",image:""
    });

    const handleSubmit=async()=>{
        console.log(companyData);
        const {company,location,req_skills,req_qualifications,salary,contact_number,notes,image}=companyData
        if(!company || !location || !req_skills || !req_qualifications || !salary || !contact_number || !notes || !image){
            toast.warning("Enter Valid Inputs!!")
        }
        else{
            const formData=new FormData()
            formData.append("company",companyData.company)
            formData.append("location",companyData.location)
            formData.append("req_skills",companyData.req_skills)
            formData.append("req_qualifications",companyData.req_qualifications)
            formData.append("salary",companyData.salary)
            formData.append("contact_number",companyData.contact_number)
            formData.append("notes",companyData.notes)
            formData.append("image",companyData.image)

            const header={
                "Content-Type":"multipart/form-data",
                "Authorization":`Token ${sessionStorage.getItem('token')}`
            }

            const result=await addCompany(header,formData)

            if(result.status==201){
                toast.success("Company Details Added Successfully!!")
                handleClose()
                Setcompany({
                    company:"",location:"",req_skills:"",req_qualifications:"",salary:"",contact_number:"",notes:"",image:""
                })
            }
            else{
                console.log(result)
                toast.error("Company Details Registration Failed!!")
            }
        }
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
        <Link className='btn btn-info m-3' onClick={handleShow}>Post Job Opportunity</Link> 
        
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add Job Details ...</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FloatingLabel controlId="floatingCompany" label="Position" className="mb-3">
                    <Form.Control type="text" placeholder="" onChange={(e)=>{Setcompany({...companyData,company:e.target.value})}} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingLocation" label="Location / Branch" className="mb-3">
                    <Form.Control type="text" placeholder="" onChange={(e)=>{Setcompany({...companyData,location:e.target.value})}} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingSkills" label="Required Skills" className="mb-3">
                    <Form.Control type="text" placeholder="" onChange={(e)=>{Setcompany({...companyData,req_skills:e.target.value})}} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingQualification" label="Required Qualification" className="mb-3">
                    <Form.Control type="text" placeholder="" onChange={(e)=>{Setcompany({...companyData,req_qualifications:e.target.value})}} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingSalary" label="Salary" className="mb-3">
                    <Form.Control type="number" placeholder="" onChange={(e)=>{Setcompany({...companyData,salary:e.target.value})}} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingNumber" label="Contact Number" className="mb-3">
                    <Form.Control type="Number" placeholder="" onChange={(e)=>{Setcompany({...companyData,contact_number:e.target.value})}} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingNotes" label="Extra Notes" className="mb-3">
                    <Form.Control type="text" placeholder="" onChange={(e)=>{Setcompany({...companyData,notes:e.target.value})}} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingImage" label="Company Logo / Image" className="mb-3">
                    <Form.Control type="file" placeholder="" onChange={(e)=>{Setcompany({...companyData,image:e.target.files[0]})}} />
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

export default AddCompany
