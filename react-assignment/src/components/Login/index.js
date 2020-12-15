import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = ({ error, login }) => {
    // console.log(error);
    const [data, setData] = useState({});
    const onHandleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        })
    }
    // console.log(data);
    const handleSubmit = (e) => {
        e.preventDefault();
        login(data);
    }
    return (
        <section className="login bg-login py-24">
            <form action="" onSubmit={handleSubmit} className="form-login text-center mx-auto relative">
                <div className="form-login mx-auto bg-black opacity-75 rounded z-10 absolute"></div>
                <div className="mx-auto rounded shadow-lg px-10 py-10 z-20 relative">
                    <div className="">
                        <img src="../images/Feng_shui_logo.png" width="130px" className="mx-auto pt-4 pb-6" alt="" />
                            {error !== "" ? (
                                <span className="text-red-500 text-center">{error}</span>
                            ) : ""}
                        <div className="relative flex items-center">
                            <i class="fas fa-user text-blue-600 absolute left-0 -mt-1 pl-3"></i>
                            <input type="text" placeholder="Your Email" name="email" id="email" className="my-2 pl-5 w-full h-12 bg-gray-700 text-white" required
                                onChange={onHandleChange}
                            />
                        </div>
                        <div className="relative flex items-center">
                            <i class="fas fa-lock text-blue-600 absolute left-0 -mt-1 pl-3"></i>
                            <input type="password" placeholder="Your Password" name="password" id="password" className="my-2 pl-5 w-full h-12 bg-gray-700 text-white" required
                                onChange={onHandleChange}
                            />
                        </div>
                        <input type="submit" className="px-3 py-2 w-full mt-6 bg-blue-500 text-white hover:opacity-75" value="Login" />
                        <div className="text-white grid grid-cols-2 mt-3">
                            <div className="text-left">
                                <input type="checkbox" name="" id="rememberMe" />&nbsp; <label htmlFor="rememberMe" >Remember me</label>
                            </div>
                            <div className="text-right">
                                <Link to="" className="text-blue-200 hover:no-underline hover:text-white text-blue-200">Forgot Password</Link>
                            </div>
                        </div>
                        <div className="py-3 text-white">
                            <span>Or Login With</span>
                        </div>
                        <div className="grid grid-cols-4 px-16 gap-5 text-white">
                            <a href="#" className="bg-fb py-2 rounded hover:opacity-75 hover:text-white">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="bg-tt py-2 rounded hover:opacity-75 hover:text-white">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="bg-gg py-2 rounded hover:opacity-75 hover:text-white">
                                <i class="fab fa-google"></i>
                            </a>
                            <a href="#" className="bg-ln py-2 rounded hover:opacity-75 hover:text-white">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>

                        <div className="text-white py-3">New member? <Link to="/auth/register" className="text-blue-200">Sign Up Now</Link></div>
                    </div>
                </div>

            </form>
        </section>
    )
}

export default Login
