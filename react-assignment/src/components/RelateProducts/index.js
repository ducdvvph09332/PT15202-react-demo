import React from 'react'
import { Link } from 'react-router-dom'

const RelateProducts = ({ products, detailRate, detailCate }) => {

    const RelateProducts = products.filter(item => item.rate === detailRate || item.category.name === detailCate)

    return (
        <section className="relate-products bg-gray-100 pb-20">
            <div className="container mx-auto bg-white rounded">
                <div className="text-4xl font-bold p-16 text-center">Relate <span className="text-blue-500">Products</span></div>
                <div className="grid grid-cols-3 gap-x-6">
                    {RelateProducts.map((product, index) => (
                        <Link to={`/shop/product/${product.id}`} className="hover:no-underline" key={index}>
                            <div className="pro-item overflow-hidden mb-8 bg-white text-left text-black rounded hover:text-blue-500">
                                <div className="overflow-hidden h-64">
                                    <img src={`http://localhost:1337${product.image[0].url}`} className="pro-img transform hover:scale-125 transition duration-500" width="100%" alt="" />
                                </div>
                                <div className="pro-box text-base font-semibold p-3">
                                    <div className="">{product.name}</div>
                                    <span className="text-blue-500 text-sm font-light">
                                        <i class="fas fa-tags"></i>&nbsp;
                                                            {product.category ? product.category.name : ""}
                                    </span>
                                    <div className="desc text-sm font-normal mt-1">{product.short_desc}</div>
                                    <div className="grid grid-cols-2 items-center mt-1">
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
        </section>
    )
}

export default RelateProducts
