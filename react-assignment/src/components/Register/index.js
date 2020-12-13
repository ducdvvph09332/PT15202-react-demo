import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Register = ({error, register }) => {
    console.log(error);
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
        register(data);
    }
    return (
        <section className="login bg-login py-24">
            <form action="" onSubmit={handleSubmit} className="form-login text-center mx-auto relative">
                <div className="form-login mx-auto bg-black opacity-75 rounded z-10 absolute"></div>
                <div className="mx-auto rounded shadow-lg px-10 py-10 z-20 relative">
                    <div className="">
                        <img src="../images/Feng_shui_logo.png" width="130px" className="mx-auto pt-4 pb-6" alt="" />
                        <div className="relative flex items-center">
                            <i class="fas fa-user text-blue-600 absolute left-0 -mt-1 pl-3"></i>
                            <input type="text" placeholder="Your Name" name="name" id="name" className="my-2 pl-5 w-full h-12 bg-gray-700 text-white"
                                onChange={onHandleChange}
                            />
                        </div>
                        <div className="relative flex items-center">
                            <i class="fas fa-user text-blue-600 absolute left-0 -mt-1 pl-3"></i>
                            <input type="text" placeholder="Your Email" name="email" id="email" className="my-2 pl-5 w-full h-12 bg-gray-700 text-white"
                                onChange={onHandleChange}
                            />
                        </div>
                        <div className="relative flex items-center">
                            <i class="fas fa-lock text-blue-600 absolute left-0 -mt-1 pl-3"></i>
                            <input type="password" placeholder="Your Password" name="password" id="password" className="my-2 pl-5 w-full h-12 bg-gray-700 text-white"
                                onChange={onHandleChange}
                            />
                        </div>
                        <input type="submit" className="px-3 py-2 w-full mt-6 bg-blue-500 text-white hover:opacity-75" value="Register" />
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
                        <div className="text-white py-3">Already have account? <Link to="/auth/login" className="text-blue-200">Sign In Now</Link></div>
                    </div>
                </div>

            </form>
        </section>
    )
}

export default Register
