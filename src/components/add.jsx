import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';

function AddStudent() {

    const history = useHistory();
    const [Input, setStudent] = useState({
        name: '',
        brand: '',
        course: '',
        email: '',
        phone: '',
        error_list: [],
        title: '',
        description: '',
        category_id: '',
        image: '',
        status: '',
    });

    const handleInput = (e) => {
        e.persist();
        setStudent({...Input, [e.target.name]: e.target.value })
    }

    const saveStudent = (e) => {
        e.preventDefault();

        const img = document.getElementById('image').files[0]

        const data = {
            name:Input.name,
            brand:Input.brand,
            title:Input.title,
            course:Input.course,
            email:Input.email,
            phone:Input.phone,
            image: img,
        }

        axios.post(`/api/crud/store`, data).then(res => {

            if(res.data.status === 200)
            {
                setStudent({
                    name: '',
                    course: '',
                    email: '',
                    phone: '',
                    error_list: [],
                });
                history.push('/students');
            }
            else if(res.data.status === 422)
            {
                setStudent({...Input, error_list: res.data.validate_err });
            }
        });
    }

    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Add Students
                                    <Link to={'/'} className="btn btn-danger btn-sm float-end"> BACK</Link>
                                </h4>
                            </div>
                            <div className="card-body">

                                <form onSubmit={saveStudent} >

                                    <div className="form-group mb-3">
                                        <label>Student Name</label>
                                        <input type="text" name="name" onChange={handleInput} value={Input.name} className="form-control" />
                                        <span className="text-danger">{Input.error_list.name}</span>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label>Image</label>
                                        <input type="file" id="image"  className="form-control" />
                                    </div>

                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary">Save Student</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default AddStudent;
