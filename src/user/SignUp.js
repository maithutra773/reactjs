import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { API } from '../config'

const SignUp = () => {
    const { register, handleSubmit, formState:{ errors } } = useForm();
    const [ error, setError] = useState("");
    const [ sucess, setSucess] = useState(false);
    
    const showError = () => {
        return <div className="alert alert-danger" style={{ display: error ? "block" : "none" }}>
            {error}
        </div>
    }
    const showSucess = () => {
        return <div className="alert alert-danger" style={{ display: sucess ? "block" : "none" }}>
            Bạn tạo tài khoản thành công . Cick để <Link to="/signin">đăng nhập</Link>
        </div>
    }
    const signUp = (user) => {
        return fetch(`${API}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .catch(error => console.log(error))
    }
   
    const onSubmit = (data, e) => {
        signUp(data)
            .then(dataInput => {
                if (dataInput.error) {
                    setError(dataInput.error);
                } else {
                    e.target.reset()
                    setError("");
                    setSucess(true)
                }


            })
    }
    const signUpForm = () => {
        return (
            
            <form onSubmit = { handleSubmit(onSubmit) } className="mx-5 my-5 py-5 px-5 bg-gray-100 border border-gray-200">
               <h2 className =" my-3">Đăng kí tài khoản </h2>
               
                <div className="mb-3">
                    <label htmlFor="name" className=" form-label">Name</label>
                    <input type = " text" 
                        id="name" 
                        className="form-control"
                        {...register('name')}
                        ></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className=" form-label">Email</label>
                    <input type = "email" 
                        id="email" 
                        className="form-control"
                        {...register('email')}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className=" form-label">Mật khẩu </label>
                    <input type = "password" 
                        id="password" 
                        className="form-control"
                        {...register('password')}></input>
                </div>
                <button className="btn btn-primary">Đăng kí</button>
            </form>
        )
    }
    return (
        <div>
            { signUpForm()}
            {showError()}
            {showSucess()}
        </div>
    )
}

export default SignUp
