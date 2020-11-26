import React from 'react'

const Staffs = () => {
    return (
        <section className="staff">
            <div className="container mx-auto">
                <div className="text-4xl font-bold p-16 pb-10 text-center">Our Professional <span className="text-blue-500">Staff</span></div>
                <div className="grid grid-cols-2 gap-8 mb-24">
                    <div className="staff-item grid grid-cols-2">
                        <img src="images/artist1.jpg" width="80%" alt="" />
                        <div className="bg-blue-500 pt-4 pl-4 pr-4 text-white -ml-16">
                            <p className="font-bold text-2xl">Melisa bush</p>
                            <p className="text-base mb-3">Chief Advisior</p>
                            <p className="text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tempus erat, et luctus quam. Maecenas cursus porta tortor, vel consectetur ante volutpat imperdiet.</p>
                            <div className="pt-2">
                                <i className="fab fa-facebook-f px-2"></i>
                                <i className="fab fa-twitter px-2"></i>
                                <i className="fab fa-google px-2"></i>
                                <i className="fab fa-linkedin-in px-2"></i>
                                </div>
                        </div>
                    </div>
                    <div className="staff-item grid grid-cols-2">
                        <img src="images/artist2.jpg" width="80%" alt="" />
                        <div className="bg-blue-500 pt-4 pl-4 pr-4 text-white -ml-16">
                            <p className="font-bold text-2xl">Melisa bush</p>
                            <p className="text-base mb-3">Chief Advisior</p>
                            <p className="text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tempus erat, et luctus quam. Maecenas cursus porta tortor, vel consectetur ante volutpat imperdiet.</p>
                            <div className="pt-2">
                                <i className="fab fa-facebook-f px-2"></i>
                                <i className="fab fa-twitter px-2"></i>
                                <i className="fab fa-google px-2"></i>
                                <i className="fab fa-linkedin-in px-2"></i>
                                </div>
                        </div>
                    </div>
                    <div className="staff-item grid grid-cols-2">
                        <div className="bg-blue-500 pt-4 pl-4 pr-4 text-white -mr-16">
                            <p className="font-bold text-2xl">Kelvin Broad</p>
                            <p className="text-base mb-3">Chief Advisior</p>
                            <p className="text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tempus erat, et luctus quam. Maecenas cursus porta tortor, vel consectetur ante volutpat imperdiet.</p>
                            <div className="pt-2">
                                <i className="fab fa-facebook-f px-2"></i>
                                <i className="fab fa-twitter px-2"></i>
                                <i className="fab fa-google px-2"></i>
                                <i className="fab fa-linkedin-in px-2"></i>
                                </div>
                        </div>
                        <img src="images/artist3.jpg" className="spec-img" width="80%" alt="" />
                    </div>
                    <div className="staff-item grid grid-cols-2">
                        <div className="bg-blue-500 pt-4 pl-4 pr-4 text-white -mr-16">
                            <p className="font-bold text-2xl">Kelvin Broad</p>
                            <p className="text-base mb-3">Chief Advisior</p>
                            <p className="text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tempus erat, et luctus quam. Maecenas cursus porta tortor, vel consectetur ante volutpat imperdiet.</p>
                            <div className="pt-2">
                                <i className="fab fa-facebook-f px-2"></i>
                                <i className="fab fa-twitter px-2"></i>
                                <i className="fab fa-google px-2"></i>
                                <i className="fab fa-linkedin-in px-2"></i>
                            </div>
                        </div>
                        <img src="images/artist4.jpg" className="spec-img" width="80%" alt="" />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Staffs
