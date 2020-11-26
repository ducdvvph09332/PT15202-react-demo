import React from 'react'
import { Link } from 'react-router-dom'



const Products = ({ products, categories, category }) => {
    return (
        <section className="products">
            <div className="container mx-auto text-white pb-20">
                <div className="text-4xl font-bold p-16 pb-10 text-center">Our New <span className="text-blue-500">Products</span></div>
                <div className="grid grid-cols-4 gap-10">
                    <div className="col-span-3">
                        <div className="grid grid-cols-3 gap-x-10">
                            {products.map((product, index) => (
                                <Link to={`/shop/product/${product.id}`} className="hover:no-underline" key={index}>
                                    <div className="pro-item overflow-hidden mb-8 bg-white text-left text-black rounded hover:text-blue-500">
                                        <div className="overflow-hidden">
                                            <img src={`../../images/${product.image[0].name}`} className="pro-img transform hover:scale-125 transition duration-500" width="100%" alt="" />
                                        </div>
                                        <div className="pro-box text-base font-semibold p-4">
                                            <div className="">{product.name} - {product.category ? product.category.id : 'null'}</div>
                                            <div className="desc text-sm font-normal mt-2">{product.short_desc}</div>
                                            <div className="grid grid-cols-2 items-center mt-10">
                                                <div className="text-blue-500">{product.price} VNĐ</div>
                                                <div className="grid justify-items-end">
                                                    <button className="hover-btn bg-blue-500 text-white py-1 px-3 rounded">
                                                        <i className="fas fa-cart-plus fa-sm"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="util col-span-1 bg-white text-blue-500 rounded pt-3 pl-3">
                        <div className="font-semibold text-lg pb-2">Product Categories</div>
                        <div className="second-line mb-4"></div>
                        {categories.map((cate, index) => (
                            <div className="border-b-2 border-gray-200 my-3 flex items-center" key={index}>
                                <input type="checkbox" className="" id=""/>
                                <div className="cursor-pointer" onClick={() => category(cate.id)}>{cate.name}</div>
                            </div>
                        ))}


                    </div>
                </div>

            </div>
        </section>
    )
}

export default Products
