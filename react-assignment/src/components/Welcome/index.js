import React from "react";

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const Welcome = () => {
    return (
        <section className="intro">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 items-center">
                    <img src="images/intro.jpg" className="py-20" alt="" />
                    <div className="">
                        <div className="text-5xl font-bold">
                            <span className="text-blue-600">Welcome</span> to Feng Shui
                    </div>
                        <div className="py-2">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover
                        </div>
                        <div className="py-2 mb-4">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </div>
                            <Link className="hover-btn bg-blue-500 text-white font-bold px-10 py-2 rounded hover:no-underline" to="/contact"><span> Contact Us</span></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Welcome
