import React, { useEffect, useState } from 'react'
import { Link, Redirect, useParams } from 'react-router-dom'
import NumberFormat from 'react-number-format';
import FeaturedProducts from '../FeaturedProducts'
import RelateProducts from '../RelateProducts';

const DetailProduct = ({ addToCart, logInfo }) => {
    let { id } = useParams();
    const API_DETAIL_PRODUCT = `http://localhost:1337/products/${id}`;
    const [detail, setDetail] = useState([]);
    const [count, setCount] = useState(1);
    if (count < 1) {
        setCount(1)
    }
    if (count > detail.slug) {
        setCount(detail.slug)
    }


    useEffect(() => {
        fetch(API_DETAIL_PRODUCT)
            .then(response => response.json())
            .then(data => setDetail(data));
        window.scrollTo(0, 0)
    }, [id])

    const API_PRODUCT = `http://localhost:1337/products`;
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(API_PRODUCT)
            .then(response => response.json())
            .then(data => setProducts(data));
    }, [])

    // DETAIL FROM
    const [imageIndex, setImageIndex] = useState(0);

    const stars = []
    for (let i = 1; i <= detail.rate; i++) {
        stars.push(<><i class="fas fa-star"></i>&nbsp;</>);
    }

    return (
        <>
            <section className="detail-product bg-gray-100 py-4">
                <div className="container mx-auto py-20 bg-white rounded">
                    <div className="grid grid-cols-10 gap-10">
                        <div className="col-span-4">
                            <img src={detail.image ? `http://localhost:1337${detail.image[imageIndex].url}` : "null"} alt="" className="" />
                            <div className="detail-item grid grid-cols-3 gap-3">
                                {detail.image ? detail.image.map((img, index) => (
                                    <img src={`http://localhost:1337${img.url}`} onClick={()=>{
                                        setImageIndex(index);
                                    }} key={index} className="my-2" />
                                )) : "null"}
                            </div>
                        </div>
                        <div className="col-span-6">
                            <p className="text-4xl">{detail.name}</p>
                            <p className="mb-3">
                                <span className="text-yellow-400 border-r-2 border-gray-500 pr-2">
                                    {stars}
                                </span>
                                <span className="px-2 border-r-2 border-gray-500">
                                    <span className="text-gray-600">Rate: </span>20
                            </span>
                                <span className="px-2">
                                    <span className="text-gray-600">Sold: </span> 50
                            </span>

                            </p>
                            <p className="text-2xl bg-gray-100 py-3 rounded px-3 text-blue-600">
                                <NumberFormat value={detail.price} displayType={'text'} thousandSeparator={true} prefix={'₫'} />
                            </p>
                            <p className="mt-3 text-lg">{detail.short_desc}</p>
                            <p className="mt-10 text-lg"><span className="text-blue-500">Category: </span> {detail.category ? detail.category.name : "null"}</p>
                            <p className="my-4">
                                <div className="">
                                    <button className="bg-blue-500 text-white px-3 rounded rounded-r-none" onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
                                    <input type="number" name="" min="1" className="w-12 border-2 rounded pl-2" value={count} id="" />
                                    <button className="bg-blue-500 text-white px-3 rounded rounded-l-none" onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
                                    <span className="ml-3 text-gray-600">{detail.slug - count} products available</span>
                                </div>
                            </p>
                            <p className="mt-3">
                                {(logInfo.length !== 0) ? (
                                    <>
                                        <button className="hover-btn bg-blue-500 py-2 px-3 rounded text-white text-xl"
                                            onClick={() => addToCart(detail.id, count)}>
                                            <span><i class="fas fa-cart-plus"></i>&nbsp; Add To Cart</span></button>
                                    &nbsp; &nbsp;
                                    <button className="hover-btn bg-blue-500 py-2 px-3 rounded text-white text-xl" onClick={() => addToCart(detail.id, count)}><span> Buy Now</span></button>
                                    </>
                                ): (
                                        <>
                                        <Link to = "/auth/login" className = "btn hover-btn bg-blue-500 py-2 px-3 rounded text-white text-xl">
                                            <span><i class="fas fa-cart-plus"></i>&nbsp; Add To Cart</span></Link>
                                        &nbsp; &nbsp;
                                    <Link to="/auth/login" className="btn hover-btn bg-blue-500 py-2 px-3 rounded text-white text-xl"><span> Buy Now</span></Link>
                                    </>
                                    )}
                            </p>
                        </div>
                    </div>
                    <div className="mt-20">
                        <div className="text-2xl text-blue-500 border-b-2 border-blue-500"> Description</div>
                        <div className="mt-3">{detail.desc}</div>
                    </div>
                </div>
            </section >
            <RelateProducts products={products} detailId = {id} detailRate = {detail.rate} detailCate = {detail.category ? detail.category.name : ""}/>
        </>
    )
}

export default DetailProduct
