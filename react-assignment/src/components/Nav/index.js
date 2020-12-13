import React, { useEffect, useState } from 'react'

import {
    BrowserRouter as Router,
    Link,
    useLocation,
} from "react-router-dom";

const Nav = ({ logInfo, logout }) => {
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
                <div className="grid grid-cols-5 items-center py-2">
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
                    <div className="text-right text-base">
                        {(logInfo.length !== 0) ? (
                            <>
                                <div className="flex items-center pl-24">
                                    <div className="relative user-menu">
                                        <Link to="" className="px-1 nav-content hover:no-underline hover:text-blue-500"><i className="fas fa-user"></i> {logInfo[0].name} &nbsp;</Link>
                                        <button className="user-item absolute bg-white rounded py-1 pl-1 text-blue-500" onClick={logout}> <i class="fas fa-sign-out-alt"></i> Logout &nbsp;</button>
                                    </div>
                                    <Link to="/cart" className="px-1 nav-content hover:no-underline hover:text-blue-400"><i class="fas fa-shopping-cart"></i> Cart</Link>
                                </div>
                            </>
                        ) : (
                                <>
                                    <div className="flex items-center pl-20">
                                        <Link to="/auth/login" className="px-1 nav-content hover:no-underline hover:text-blue-400"><i className="fas fa-user"></i> Login</Link>&nbsp;&nbsp;
                                    <Link to="/auth/register" className="px-1 nav-content hover:no-underline hover:text-blue-400"><i className="fas fa-pencil-alt"></i> Register</Link>
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav
