import React, { useEffect } from 'react'
import { format } from 'date-fns'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const Blogs = ({ blogs }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <section className="blog">
            <div className="container mx-auto">
                <div className="text-4xl font-bold p-16 pb-10 text-center">Our Latest <span className="text-blue-500">Blogs</span></div>
                <div className="grid grid-cols-3 gap-10 pb-24">
                    {blogs.map((blog, index) => (
                        <div className="blog-item bg-gray-200 rounded" key={index}>
                            <div className="overflow-hidden rounded">
                                <img src={`http://localhost:1337${blog.image[0].url}`} className="blog-img transform hover:scale-110 transition duration-500" alt="" />
                            </div>
                            <div className="p-4">
                                <p className="blog-name text-xl font-semibold mb-2">{blog.name}</p>
                                <div className="my-2">
                                    <span className="text-blue-500"><i class="fas fa-user"></i> </span> Admin
                                    &nbsp;&nbsp;&nbsp;
                                    <span className="text-blue-500"><i class="fas fa-calendar-alt"></i> </span>{format(new Date(2020, 1, 11), 'yyyy-MM-dd')}
                                    &nbsp;&nbsp;&nbsp;
                                    <span className="text-blue-500"><i class="fas fa-tags"></i> </span> {blog.tag.name}
                                    &nbsp;&nbsp;&nbsp;
                                </div>
                                <p className="my-2">{blog.desc}</p>
                                <button className="text-base font-semibold text-blue-500"><Link to=""> Read more</Link></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Blogs
