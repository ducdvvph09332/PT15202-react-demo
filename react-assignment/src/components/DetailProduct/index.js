import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DetailProduct = () => {
    let { id } = useParams();
    const API_DETAIL_PRODUCT = `http://localhost:1337/products/${id}`;
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        fetch(API_DETAIL_PRODUCT)
            .then(response => response.json())
            .then(data => setDetail(data));

    }, [])
    return (
        <section className="detail-product">
            <div className="container mx-auto py-20">
                <div className="grid grid-cols-2">
                    <div className="grid grid-cols-2">
                        <img src={detail.image ? `../../images/${detail.image[0].name}` : "null"} alt="" className="" />
                        <div className="">
                            <p className="">{detail.name}</p>
                            <p className="">{detail.price}</p>
                            <p className="">{detail.short_desc}</p>
                            <p className="">{detail.desc}</p>
                        </div>
                    </div>
                    <div className=""></div>
                </div>
            </div>
        </section>
    )
}

export default DetailProduct
