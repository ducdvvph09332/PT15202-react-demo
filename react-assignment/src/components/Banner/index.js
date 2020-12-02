import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = () => {
    return (
        <AutoplaySlider
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={4000}
        >
            <section className="banner bg-1 bg-fixed bg-cover flex text-center text-white grid justify-items-center items-center">
                <div className="py-64">
                    <div className="text-6xl font-semibold">Effect Of Feng Shui</div>

                    <div className="text-medium mx-32 px-64">It focuses on how things in our physical world influence how we think and behave. Feng shui originated in China and is a belief system in which there is a spiritual relationship between the physical elements of nature and is a belief system in which there is a spiritual relationship</div>
                    <div className="my-20">
                        <Link className="hover-btn bg-blue-500 text-white font-bold px-6 py-3 mx-2 rounded hover:no-underline" to="/services"><span> Our Services</span></Link>
                        <Link className="hover-btn bg-blue-500 text-white font-bold px-6 py-3 mx-2 rounded hover:no-underline" to="/contact"><span> Contact Us</span></Link>
                    </div>
                </div>
            </section>
            <section className="banner bg-3 bg-fixed bg-cover flex text-center text-white grid justify-items-center items-center">
                <div className="py-64">
                    <div className="text-6xl font-semibold">Best Gift For Friends</div>

                    <div className="text-medium mx-32 px-64">It focuses on how things in our physical world influence how we think and behave. Feng shui originated in China and is a belief system in which there is a spiritual relationship between the physical elements of nature and is a belief system in which there is a spiritual relationship</div>
                    <div className="my-20">
                        <Link className="hover-btn bg-blue-500 text-white font-bold px-6 py-3 mx-2 rounded hover:no-underline" to="/services"><span> Our Services</span></Link>
                        <Link className="hover-btn bg-blue-500 text-white font-bold px-6 py-3 mx-2 rounded hover:no-underline" to="/contact"><span> Contact Us</span></Link>
                    </div>
                </div>
            </section>
            <section className="banner bg-2 bg-fixed bg-cover flex text-center text-white grid justify-items-center items-center">
                <div className="py-64">
                    <div className="text-6xl font-semibold">Many Designs</div>

                    <div className="text-medium mx-32 px-64">It focuses on how things in our physical world influence how we think and behave. Feng shui originated in China and is a belief system in which there is a spiritual relationship between the physical elements of nature and is a belief system in which there is a spiritual relationship</div>
                    <div className="my-20">
                        <Link className="hover-btn bg-blue-500 text-white font-bold px-6 py-3 mx-2 rounded hover:no-underline" to="/services"><span> Our Services</span></Link>
                        <Link className="hover-btn bg-blue-500 text-white font-bold px-6 py-3 mx-2 rounded hover:no-underline" to="/contact"><span> Contact Us</span></Link>
                    </div>
                </div>
            </section>
        </AutoplaySlider>
    )
}

export default Banner
