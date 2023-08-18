import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


export default function Home() {

    const [employees, setEmployees] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        loadUsers();

    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/api/v1/employees");
        setEmployees(result.data);
    };

    const deletUser=async(id)=>{
        console.log("Delete button clicked for user ID:", id);
        try {
            await axios.delete('http://localhost:8080/api/v1/employee/' + id);
            console.log("User deleted successfully");
            loadUsers();
        } catch (error) {
            console.error("Error deleting user:", error);
        }

    }

    return (
        <div className='container'>
            <div className='py-4'>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Emial Id</th>
                            <th scope="col">Actions</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            employees.map((employee, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.emailId}</td>
                                    <td>
                                        <Link className='btn btn-outline-primary mx-2' to={`/editUser/${employee.id}`}> Edit</Link>
                                        <button className='btn btn-danger mx-2' onClick={()=>deletUser(employee.id)}> Delete</button>
                                    </td>
                                </tr>

                            ))
                        }


                    </tbody>
                </table>


            </div>
        </div>
    )
}
