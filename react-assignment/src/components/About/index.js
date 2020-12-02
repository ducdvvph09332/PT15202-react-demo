import React, { useEffect } from 'react'
import Customers from '../Customers'
import Welcome from '../Welcome'
import Why from '../Why'

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <section className="about">
            <Welcome/>
            <Why/>
            <Customers/>
        </section>
    )
}

export default About
