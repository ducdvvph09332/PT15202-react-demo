import React from 'react'
import Customers from '../Customers'
import Welcome from '../Welcome'
import Why from '../Why'

const About = () => {
    return (
        <section className="about">
            <Welcome/>
            <Why/>
            <Customers/>
        </section>
    )
}

export default About
