import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { API } from '../config'
const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    let history = useHistory();

    const signIn = (user) => {
        return fetch(`${API}/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .catch(error => console.log(error))
    }
    const onSubmit = (data) => {
        setLoading(true);
        signIn(data)
            .then(dataUser => {
                if (dataUser.error) {
                    setError(dataUser.error);
                    setLoading(false);
                } else {
                   
                        history.push('/')
                }
            })
    }
   
   
    const showError = () => {
        return <div className="alert alert-danger" style={{ display: error ? "block" : "none" }}>
            {error}
        </div>
    }
    const showLoading = () => {
        return loading && <div className="alert alert-info">
            <h5>...Loading</h5>
        </div>
    }


    const signInForm = () => {

        return (
            <form onSubmit={handleSubmit(onSubmit)} className="mx-5 my-5 py-5 px-5 bg-gray-100 border border-gray-200">
                <h2 className =" my-3">Đăng Nhập tài khoản </h2>
                <div className="mb-3 ">
                    <label for="floatingInput"htmlFor="product-name" className="form-label">Email address</label>
                    <input type="email" placeholder="name@example.com"
                        className="form-control"
                        id="email"
                        {...register('email')}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="product-name" className="form-label">Mật khẩu</label>
                    <input type="password"
                        className="form-control"
                        id="password" placeholder="Password"
                        {...register('password')}
                    />
                </div>
                <button class=" btn btn-lg btn-primary my-5" type="submit">Sign in</button>
            </form>
        )

    }
    return (
        <div>
            {signInForm()}
            {showError()}
            {showLoading()}
        </div>
    )
}

export default SignIn