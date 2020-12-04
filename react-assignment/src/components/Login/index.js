import React, { useState } from 'react'

const Login = (loginData) => {
    const { login, error } = loginData;
    const [data, setData] = useState({});
    const onHandleChange = (e) => {
        const {name, value} = e.target;
        setData({
            ...data,
            [name] : value
        })
    }
    console.log(data);
    const handleSubmit = (e) => {
        e.preventDefault();
        login(data);
    }

    return (
        <form action="" onSubmit={handleSubmit} className="">
            <h2>Login</h2>
            
            <div>
                <label htmlFor=""> Email :</label>
                <input type="text" name="email" id="email" className="border" required
                    onChange={onHandleChange}
                />
            </div>
            <div>
                <label htmlFor="password"> Password :</label>
                <input type="password" name="password" id="password" className="border" required
                    onChange={onHandleChange}
                />
            </div>
            <input type="submit" value="Login" />
        </form>
    )
}

export default Login
