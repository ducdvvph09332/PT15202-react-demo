import React from 'react'
import { Link } from 'react-router-dom'



const FeaturedProducts = ({ products }) => {
    return (
        <section className="products">
            <div className="container mx-auto text-white pb-20">
                <div className="text-4xl font-bold p-16 pb-10 text-center">Our Featured <span className="text-blue-500">Products</span></div>
                    <div className="col-span-3">
                        <div className="grid grid-cols-3 gap-x-10">
                            {products.map((product, index) => (
                                <Link to={`/shop/product/${product.id}`} className="hover:no-underline" key={index}>
                                    <div className="pro-item overflow-hidden mb-8 bg-white text-left text-black rounded hover:text-blue-500">
                                        <div className="overflow-hidden">
                                            <img src={`../../images/${product.image[0].name}`} className="pro-img transform hover:scale-125 transition duration-500" width="100%" alt="" />
                                        </div>
                                        <div className="pro-box text-xl font-semibold p-4">
                                            <div className="">{product.name}</div>
                                            <div className="desc text-sm font-normal mt-2">{product.short_desc}</div>
                                            <div className="grid grid-cols-2 items-center mt-10">
                                                <div className="text-blue-500">{product.price} VNĐ</div>
                                                <div className="grid justify-items-end">
                                                    <button className="hover-btn bg-blue-500 text-white py-1 px-4 rounded">
                                                        <i className="fas fa-cart-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default FeaturedProducts
