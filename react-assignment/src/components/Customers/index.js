import React from 'react'

const Customers = () => {
    return (
        <section className="customer">
            <div className="container mx-auto text-white">
                <div className="text-4xl font-bold p-16 pb-10 text-center">Our Happy <span className="text-blue-500">Customers</span></div>
                <div className="grid grid-cols-3">
                    <div className="text-center customer-item">
                        <img src="../../images/customer1.png" className="mx-auto" alt=""/>
                        <p className="text-blue-500 text-2xl font-bold my-3">Hilpton Broad</p>
                        <p className="mb-24 px-10">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of cla ssical Latin literature from 45 BC, making it over 2000 years old.</p>
                    </div>
                    <div className="text-center customer-item">
                        <img src="../../images/customer2.png" className="mx-auto" alt="" />
                        <p className="text-blue-500 text-2xl font-bold my-3">James Carlo</p>
                        <p className="mb-24 px-10">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of cla ssical Latin literature from 45 BC, making it over 2000 years old.</p>
                    </div>
                    <div className="text-center customer-item">
                        <img src="../../images/customer3.png" className="mx-auto" alt="" />
                        <p className="text-blue-500 text-2xl font-bold my-3">Stive Philips</p>
                        <p className="mb-24 px-10">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of cla ssical Latin literature from 45 BC, making it over 2000 years old.</p>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Customers
