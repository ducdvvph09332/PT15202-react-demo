import React from 'react'

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const Banner = () => {
    return (
        <section className="banner flex text-center text-white grid justify-items-center items-center">
            <div className="container mx-auto py-64">
                <div className="text-5xl font-bold">Effect Of Feng Shui</div>

                <div className="text-medium px-64">It focuses on how things in our physical world influence how we think and behave. Feng shui originated in China and is a belief system in which there is a spiritual relationship between the physical elements of nature and is a belief system in which there is a spiritual relationship</div>
                <div className="my-20">
                    <Link className="hover-btn bg-blue-500 text-white font-bold px-6 py-2 mx-2 rounded hover:no-underline" to="/services"><span> Our Services</span></Link>
                    <Link className="hover-btn bg-blue-500 text-white font-bold px-6 py-2 mx-2 rounded hover:no-underline" to="/contact"><span> Contact Us</span></Link>
                </div>
            </div>
        </section>
    )
}

export default Banner
