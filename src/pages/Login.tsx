import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import '../styles/login.scss';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
    const navigate = useNavigate();

    const {setToken} = useContext(AuthContext);

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Required'),
            password: Yup.string().min(4, "Must be 4 characters or more.").required('Required')
        }),
        onSubmit: async (values) => {
            try {
                const response = await fetch('/api/login', {
                    method: 'POST', body: JSON.stringify({ username: values.username, password: values.password }), headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const data = await response.json();
                setToken(data.authToken);
                navigate("/");
            } catch (error) {
                alert(error);
            }
        }
    })

    return (
        <div className='login__container'>
            <div className='login__header'>
                <p>Welcome to Clinic Schedule App.</p>
            </div>
            <div className='login__body'>
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder='Enter Username' name='username' onChange={formik.handleChange} value={formik.values.username} />
                    {
                        formik.touched.username && formik.errors.username ? <div>{formik.errors.username}</div> : null
                    }
                    <label htmlFor="password">Password</label>
                    <input type="text" placeholder='Enter Password' name='password' onChange={formik.handleChange} value={formik.values.password} />
                    {
                        formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null
                    }
                    <button type='submit'>Login</button>
                </form>
            </div>
            <div className='login__footer'>
                <h6>Developed By @branch.</h6>
            </div>
        </div>
    )
}

export default Login;