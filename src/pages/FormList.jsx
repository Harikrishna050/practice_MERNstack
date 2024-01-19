import { React, useEffect, useState } from 'react';
import "./FormList.scss"
import axios from "axios";

const FormList = ({ datalist, fetchData, setFormData, setContact, setEdit }) => {
    const handleDelete = async (id) => {
        try {
            const response = await axios.delete("/delete/" + id);
            if (response.data.success) {
                alert("Your data successfully deleted!");
                fetchData();
                setContact(false);
                setEdit(false);
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
                });
            } else {
                alert("Deletion failed: " + response.data.message);
            }
        } catch (error) {
            console.error("An error occurred while deleting:", error);
            alert("Something went wrong");
        }
    }
    const [FormDataEdit, setFormDataEdit] = useState({
        id:"",
        name: "",
        email: "",
        subject: "",
        message: ""
      });

    const handleEdit =(id) => {
        const foundItem = datalist.find(item => item._id === id);
        setFormDataEdit({
            id:foundItem._id,
            name:foundItem.name,
            email:foundItem.email,
            subject:foundItem.subject,
            message:foundItem.message
        })
        setEdit(true);
    }

    useEffect(() => {
        setContact(false);
        setFormData(FormDataEdit);
      }, [FormDataEdit]); 


    return (
        <div className='table-container'>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Subject</th>
                        <th>Message</th>
                        <th>Operations</th>
                    </tr>
                </thead>

                <tbody>
                    {datalist[0] ? (datalist.map((data) => {

                        return (
                            <tr>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.subject}</td>
                                <td>{data.message}</td>
                                <td>
                                    <button className="btn-edit" onClick={() => { handleEdit(data._id) }}>Edit</button>
                                    <button className="btn-delete" onClick={() => handleDelete(data._id)}>Delete</button>
                                </td>
                            </tr>
                        )

                    })) : (<p>No data Found</p>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default FormList;
