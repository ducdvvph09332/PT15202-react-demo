import React from 'react'

const Nav = () => {
    return (
        <nav className="grid grid-cols-2 bg-orange-300 flex items-center px-3">
            <div className="menu">
                <ul className="">
                    <li className="inline-block p-3">menu</li>
                    <li className="inline-block p-3">menu</li>
                    <li className="inline-block p-3">menu</li>
                    <li className="inline-block p-3">menu</li>
                </ul>
            </div>
            <div className="search text-right">
                <input type="text" name="" id=""/>
                <button>submit</button>
            </div>
        </nav>
    )
}

export default Nav
