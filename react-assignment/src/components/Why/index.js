import React from 'react'

const Why = () => {
    return (
        <section className="why">
            <div className="container mx-auto">
                <div className="grid grid-cols-3">
                    <div className="col-span-1"></div>
                    <div className="col-span-2 text-left">
                        <div className="text-4xl font-bold p-16 pb-10"><span className="text-blue-600">Why </span>Choose Us</div>
                        <div className="why-item text-white text-xl font-semibold p-3 bg-blue-500 ml-16 mb-10 rounded">Respecting Your Time</div>
                        <div className="why-item text-white text-xl font-semibold p-3 bg-blue-500 ml-16 mb-10 rounded">Latest In Technology</div>
                        <div className="why-item text-white text-xl font-semibold p-3 bg-blue-500 ml-16 mb-10 rounded">Professional Staff</div>
                        <div className="why-item text-white text-xl font-semibold p-3 bg-blue-500 ml-16 mb-32 rounded">Free Home Dilevery</div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Why
