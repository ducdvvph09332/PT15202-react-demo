import React, { useEffect, useState } from 'react'
import NumberFormat from 'react-number-format'
import { Link } from 'react-router-dom'

const Products = ({ products, categories, category }) => {

    //search by name
    const [search, setSearch] = useState("");
    const filterProductsByName = products.filter(product => product.name.toLowerCase().includes(search.toLocaleLowerCase()))

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className="shop products">
            <div className="container mx-auto text-white pb-20">
                <div className="text-4xl font-bold p-16 pb-10 text-center">Our New <span className="text-blue-500">Products</span></div>
                <div className="grid grid-cols-4 gap-10">
                    <div className="col-span-3">
                        <div className="grid grid-cols-3 gap-x-6">
                            {filterProductsByName.map((product, index) => (
                                <Link to={`/shop/product/${product.id}`} className="hover:no-underline" key={index}>
                                    <div className="pro-item overflow-hidden mb-8 bg-white text-left text-black rounded hover:text-blue-500">
                                        <div className="overflow-hidden h-64">
                                            <img src={`http://localhost:1337${product.image[0].url}`} className="pro-img transform hover:scale-125 transition duration-500" width="100%" alt="" />
                                        </div>
                                        <div className="pro-box text-base font-semibold p-3">
                                            <div className="">{product.name}</div>
                                            <span className="text-blue-500 text-sm font-light"><i class="fas fa-tags"></i> {product.category.name} </span>
                                            <div className="desc text-sm font-normal mt-1">{product.short_desc}</div>
                                            <div className="grid grid-cols-2 items-center mt-1">
                                                <div className="text-blue-500"><NumberFormat value={product.price} displayType={'text'} thousandSeparator={true} prefix={'₫'} /></div>
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
                    <div className="util col-span-1">
                        <form className="mb-6 text-black rounded relative flex items-center">
                            <input type="text" className="w-full h-10 pl-3" placeholder="Search" onChange={e => setSearch(e.target.value)} name="" id="" />
                            <button className="absolute right-0 mr-1 cursor-pointer bg-blue-500 text-white py-1 px-3 rounded">
                                <i className="fas fa-search fa-sm"></i>
                            </button>
                        </form>
                        <div className="bg-white text-blue-500 p-3 rounded mb-4">
                            <div className="font-semibold text-lg pb-2">PRODUCT CATEGORIES</div>
                            <div className="line mb-4"></div>
                            <div className="border-b-2 border-gray-200 my-3 flex items-center" onClick={() => category(0)}>
                                &nbsp;
                                <div className="cursor-pointer text-gray-600">All</div>
                            </div>
                            {categories.map((cate, index) => (
                                <div className="border-b-2 border-gray-200 my-3 flex items-center" key={index} onClick={() => category(cate.id)}>
                                    &nbsp;
                                    <div className="cursor-pointer">{cate.name}</div>
                                </div>
                            ))}
                        </div>
                        <div className="bg-white text-blue-500 p-3 rounded mb-4">
                            <div className="font-semibold text-lg pb-2">FILTER BY PRICE</div>
                            <div className="second-line mb-4"></div>
                            <form action="" className="">
                                <div className="grid grid-cols-5">
                                    <input type="number" placeholder="From" className="col-span-2 bg-gray-400 w-full focus:text-black pl-1" name="fromPrice" id=""
                                    />
                                    <span className="mx-auto">
                                        <i class="fas fa-sliders-h col-span-1"></i>
                                    </span>
                                    <input type="number" placeholder="To" className="col-span-2 bg-gray-400 w-full focus:text-black pl-1" name="toPrice" id=""
                                    />
                                </div>
                            </form>

                        </div>
                        <div className="bg-white text-blue-500 p-3 rounded mb-4">
                            <div className="font-semibold text-lg pb-2">PRODUCT BRANDS</div>
                            <div className="line mb-4"></div>
                            <div className="border-b-2 border-gray-200 my-3 flex items-center cursor-pointer">Ustone</div>
                            <div className="border-b-2 border-gray-200 my-3 flex items-center cursor-pointer">GaiA by Yang</div>
                            <div className="border-b-2 border-gray-200 my-3 flex items-center cursor-pointer">KAIA</div>
                            <div className="border-b-2 border-gray-200 my-3 flex items-center cursor-pointer">Habora</div>
                        </div>
                    </div>
                </div>
                <div className="text-center"></div>
            </div>
        </section>
    )
}

export default Products
