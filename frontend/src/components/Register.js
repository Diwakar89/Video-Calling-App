import { Formik } from 'formik'
import React from 'react'
import Swal from 'sweetalert2';

const Register = () => {

    const userSubmit = async (formdata) => {
        console.log(formdata);

        // 1. URL
        // 2. Request Method
        // 3. JSON Data
        // 4. Type of Data

        const res = await fetch('http://localhost:5000/user/add', {
            method : 'POST',
            body : JSON.stringify(formdata),
            headers : { 'Content-Type' : 'application/json' }
        });

        console.log(res.status);
        if(res.status === 200){
            Swal.fire({
                icon: 'success',
                title : 'Success',
                text : 'You have registered successfully'
            })
        }else{
            
        }

    }

  return (
    <div className='vh-100' style={{backgroundColor: '#ccc'}}>
        <div className="col-md-4 mx-auto pt-5">
            <div className='card'>
                <div className="card-body">

                    <h3>Signup Form</h3>
                    
                    <Formik initialValues={{ username : '', email : '', password : '', age : '' }} onSubmit={userSubmit}>

                        { ( {values, handleChange, handleSubmit} ) => (
                            <form onSubmit={handleSubmit}>
                                <label>Username</label>
                                <input className='form-control mb-4' name="username" onChange={handleChange} value={values.username} />
                                <label>Email</label>
                                <input type="email" className='form-control mb-4' name="email" onChange={handleChange} value={values.email} />
                                <label>Password</label>
                                <input type="password" className='form-control mb-4' name="password" onChange={handleChange} value={values.password} />
                                <label>Age</label>
                                <input type="number" className='form-control mb-4' name="age" onChange={handleChange} value={values.age} />

                                <button type='submit' className='btn btn-primary'>Submit</button>
                            </form>
                        ) }

                    </Formik>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Register