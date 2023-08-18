import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom'

export default function EditUser() {

    let navigate=useNavigate()

    const {id} = useParams()
    const [employee,setEmployee]=useState({
        firstName:"",
        lastName:"",
        emailId:""
    })

    const {firstName,lastName,emailId}=employee

    const onInputChange=(e)=>{

        setEmployee({...employee,[e.target.name]: e.target.value})

    }

    useEffect(()=>{
        loadUser();
    },[]);

    const onSubmit=async (e)=>{
        e.preventDefault();
        try {
            console.log("employee added");
            await axios.put(`http://localhost:8080/api/v1/employee/${id}` , employee);
            navigate("/");
        } catch (error) {
            console.error("Error adding employee:", error);
        }
    }

    const loadUser=async()=>{
        const result=await axios.get(`http://localhost:8080/api/v1/employee/${id}`);
        setEmployee(result.data);
    }
    
    return (
        <div className='container'>

            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Edit User</h2>

                    <form onSubmit={(e)=>onSubmit(e)}>
                    <div className='mb-3'>
                        <label htmlFor='Name' className='form-label'>
                        </label>
                        <input type={'text'} className='form-control' placeholder='Enter your First Name' name='firstName' value={firstName} onChange={(e=>onInputChange(e))}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Name' className='form-label'>
                        </label>
                        <input type={'text'} className='form-control' placeholder='Enter your Last name' name='lastName' value={lastName} onChange={(e=>onInputChange(e))}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Name' className='form-label'>
                        </label>
                        <input type={'text'} className='form-control' placeholder='Enter your Email Id' name='emailId' value={emailId} onChange={(e=>onInputChange(e))}/>
                    </div>
                    <button type='submit' className='btn btn-outline-primary'>Submit</button>
                    <Link  className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
                    </form>
                </div>
            </div>
        </div>


    );
}
