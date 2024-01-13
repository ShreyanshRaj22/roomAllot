import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [credentials, setcredentials] = useState({
        email: "",
        password: "",
    });
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/loginuser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: credentials.password,
            email: credentials.email
          }),
        });
    
        const json = await response.json();
        console.log(json);
        if (!json.success) {
          alert("Enter Valid Credentials");
        }
        if (json.success) {
          localStorage.setItem("userEmail",credentials.email);
          localStorage.setItem("authToken",json.authToken);
          console.log(localStorage.getItem("authToken"))
          navigate("/");
        }
    }
    const onChange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label >Email address</label>
                    <input type="email" name='email' onChange={onChange} value={credentials.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input type="password" name='password' onChange={onChange} value={credentials.password} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/signup" className="m-3 btn btn-danger">
                    Create an Account
                </Link>
            </form>
        </div>
    )
}

export default Login