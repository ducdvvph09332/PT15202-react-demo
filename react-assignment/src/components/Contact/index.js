import React from 'react'

const Contact = () => {
    return (
        <section className="contact pt-20 bg-gray-200">
            <div className="container mx-auto">
                <div className="grid grid-cols-3 gap-10">
                    <div className="text-center border-2 border-blue-600 rounded p-10 hover-box">
                        <i class="fas fa-envelope fa-3x text-blue-600 m-3"></i>
                        <p className="text-2xl font-semibold">Email</p>
                        <p className="">support@fengshui.com</p>
                    </div>
                    <div className="text-center border-2 border-blue-600 rounded p-10 hover-box">
                        <i class="fas fa-phone-alt fa-3x text-blue-600 m-3"></i>
                        <p className="text-2xl font-semibold">Phone</p>
                        <p className="">+842094832345</p>
                    </div>
                    <div className="text-center border-2 border-blue-600 rounded p-10 hover-box">
                        <i class="fas fa-map-marker-alt fa-3x text-blue-600 m-3"></i>
                        <p className="text-2xl font-semibold">Address</p>
                        <p className="">Trinh Van Bo Street, Xuan Phuong, Nam Tu Liem, Ha Noi</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 mt-20">
                <div className="">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.863981044331!2d105.74459841501292!3d21.038127785993407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2sFPT%20Polytechnic%20Hanoi!5e0!3m2!1sen!2s!4v1606041303879!5m2!1sen!2s" width="100%" height="100%" frameBorder={0} style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
                </div>
                <form action="" className="bg-blue-600 py-20 px-16 pt-10">
                    <span className="text-white text-3xl font-normal">Send A Message</span>
                    <div className="grid grid-rows-2 gap-10 mt-10">
                        <div className="grid grid-cols-2 gap-10">
                            <input type="text" className="p-2 w-full" name="name" placeholder="Name" id="" />
                            <input type="text" className="p-2 w-full" name="email" placeholder="Email" id="" />
                        </div>
                        <div className="grid grid-cols-2 gap-10">
                            <input type="text" className="p-2 w-full" name="phone" placeholder="Phone" id="" />
                            <input type="text" className="p-2 w-full" name="subject" placeholder="Subject" id="" />
                        </div>
                    </div>
                    <textarea className="mt-10 p-2 w-full" name="message" placeholder="Message" id="" rows="6"></textarea>
                    <button className="border-2 border-white text-white hover:bg-blue-800 mt-4 py-2 px-4">SUBMIT</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
