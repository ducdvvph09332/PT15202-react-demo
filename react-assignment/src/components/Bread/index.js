import React from 'react'

const Bread = ({data, bg}) => {
    return (
        <section className={`bread text-center text-white pb-16 pt-40 ${bg}`}>
            <div className="text-5xl font-bold">{data}</div>
            <div className="line mx-auto"></div>
            <div className="second-line mx-auto m-2"></div>
            <div className="m-4 text-lg font-semibold">Home / <span className="text-blue-500">{data}</span></div>
        </section>
    )
}

export default Bread
