import React from 'react'
import { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';

const SignUp = () => {
    const [credentials, setcredentials] = useState({
        name: "",
        email: "",
        password: ""
      });
      let navigate = useNavigate();
    const handleSubmit = async(e) => {
        e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        password: credentials.password,
        email: credentials.email
      }),
    });

    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter Valid Credentials");
    }
    else{
      navigate("/login");
    }
    }
    const onChange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value });
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label >Username</label>
                    <input type="text" name='name' value={credentials.name} onChange={onChange} className="form-control" id="exampleInputName1"  placeholder="Enter Username" />
                </div>
                <div className="form-group">
                    <label >Email address</label>
                    <input type="email" name='email' value={credentials.email} onChange={onChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input type="password" name='password' value={credentials.password} onChange={onChange} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <Link to="/login" className="m-3 btn btn-danger">
            Already a user
          </Link>
        </div>
    )
}

export default SignUp