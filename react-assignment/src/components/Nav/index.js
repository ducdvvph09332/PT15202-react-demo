import React, { useState } from 'react'

import {
    BrowserRouter as Router,
    Link,
    useLocation,
} from "react-router-dom";

const Nav = () => {
    const [nav, setNav] = useState(false);

    const changeNavBg = () => {
        if (window.scrollY > 100) {
            setNav(true);
        } else {
            setNav(false);
        }
    }
    window.addEventListener('scroll', changeNavBg)


    return (
        <nav className={`z-50 ${nav ? 'nav-scrolled' : ''}`}>
            <div className="px-32">
                <div className="grid grid-cols-5 items-center p-2">
                    <a href="#"><img src="../../images/Feng_shui_logo.png" width="90px" className="" alt="" /></a>
                    <ul className="col-span-3 text-xl font-medium">
                        <li className="inline-block p-4"><Link className="nav-content hover:no-underline hover:text-blue-400" to="/"> Home</Link></li>
                        <li className="inline-block p-4"><Link className="nav-content hover:no-underline hover:text-blue-400" to="/about">About</Link></li>
                        <li className="inline-block p-4"><Link className="nav-content hover:no-underline hover:text-blue-400" to="/services">Services</Link></li>
                        <li className="inline-block p-4"><Link className="nav-content hover:no-underline hover:text-blue-400" to="/gallery">Gallery</Link></li>
                        <li className="inline-block p-4"><Link className="nav-content hover:no-underline hover:text-blue-400" to="/blog">Blog</Link></li>
                        <li className="inline-block p-4"><Link className="nav-content hover:no-underline hover:text-blue-400" to="/shop">Shop</Link></li>
                        <li className="inline-block pl-4"><Link className="nav-content hover:no-underline hover:text-blue-400" to="/contact">Contact</Link></li>
                    </ul>
                    <div className="text-right">
                        <a className="px-2 nav-content hover:no-underline hover:text-blue-400"><i className="fas fa-user"></i> Login</a>
                        <a className="px-2 nav-content hover:no-underline hover:text-blue-400"><i className="fas fa-pencil-alt"></i> Register</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav
