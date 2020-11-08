import React from 'react'

const Products = () => {
    return (
        <section className="products">
            <h1 className="text-4xl py-4">Sản phẩm nổi bật</h1>
            <div className="grid grid-cols-3 gap-3">
                <div className="pro-item border-solid border-2 border-gray-200 p-4">
                    <img src="./product-img-demo.jpg" className="" alt="" />
                    <div className="pro-title text-orange-500 text-xl font-semibold pt-5">
                        Tieu de bai viet
                </div>
                    <div className="pro-content">
                        Noi dung bai viet
                </div>
                </div>
                <div className="pro-item border-solid border-2 border-gray-200 p-4">
                    <img src="./product-img-demo.jpg" className="" alt="" />
                    <div className="pro-title text-orange-500 text-xl font-semibold pt-5">
                        Tieu de bai viet
                </div>
                    <div className="pro-content">
                        Noi dung bai viet
                </div>
                </div>
                <div className="pro-item border-solid border-2 border-gray-200 p-4">
                    <img src="./product-img-demo.jpg" className="" alt="" />
                    <div className="pro-title text-orange-500 text-xl font-semibold pt-5">
                        Tieu de bai viet
                </div>
                    <div className="pro-content">
                        Noi dung bai viet
                </div>
                </div>
            </div>
        </section>
    )
}

export default Products
