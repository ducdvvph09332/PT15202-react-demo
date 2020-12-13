import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Gallery = () => {

    const API_GALLERY = `http://localhost:1337/galleries`
    const [galleries, setGalleries] = useState([])

    useEffect(() => {
        fetch(API_GALLERY)
            .then(response => response.json())
            .then(data => setGalleries(data));
        window.scrollTo(0, 0)
    }, [])
    return (
        <section className="gallery">
            <div className="text-center">
                <div className="py-10">
                    <Link className="hover-btn bg-white text-blue-500 border-2 border-blue-500 font-bold px-10 py-2 rounded hover:no-underline mx-2"><span> All</span></Link>
                    <Link className="hover-btn bg-blue-500 text-white font-bold px-10 py-2 rounded hover:no-underline mx-2"><span> News</span></Link>
                    <Link className="hover-btn bg-blue-500 text-white font-bold px-10 py-2 rounded hover:no-underline mx-2"><span> Funny</span></Link>
                    <Link className="hover-btn bg-blue-500 text-white font-bold px-10 py-2 rounded hover:no-underline mx-2"><span> Celebration</span></Link>
                </div>
            </div>
            <div className="">
                {galleries.map((item, index) => (
                    <div className="grid grid-cols-4" key={index}>
                        {item.image.map((url, index) => (
                            <img src={`http://localhost:1337${url.url}`} width="100%" height="280px" key={index} alt="" />
                        ))}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Gallery
