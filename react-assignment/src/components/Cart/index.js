import React, { useEffect, useState } from 'react'
import NumberFormat from 'react-number-format';
import Nav from '../Nav';

const Cart = ({ cart, deleteCart }) => {

    const GroupingCart = cart.reduce((accumulator, currentValue) => {
        if (accumulator.indexOf(currentValue.id) === -1) {
            accumulator.push(currentValue)
        }
        return accumulator
    }, [])
    console.log(GroupingCart);

useEffect(() => {
    window.scrollTo(0, 0)
}, [])
return (
    <section className="Cart bg-gray-100 pt-4 pb-4">
        <div className="container mx-auto bg-white rounded py-3">
            <div className="grid grid-cols-6 bg-blue-100 rounded shadow-md py-1">
                <div className="px-2 col-span-2 text-xl text-gray-700 border-r-2">Product</div>
                <div className="px-2 text-xl text-gray-700 border-r-2">Unit Price</div>
                <div className="px-2 text-xl text-gray-700 border-r-2">Quantity</div>
                <div className="px-2 text-xl text-gray-700 border-r-2">Into Price</div>
                <div className="px-2 text-xl text-gray-700 border-r-2">Action</div>
            </div>
            {cart.map((item, index) => (
                <div key={index} className="my-5 flex items-center grid grid-cols-6 text-left">
                    <div className="px-2 col-span-2 flex items-center gap-5"><img src={`http://localhost:1337${item.image[0].url}`} width="150px" alt="" /><span className="text-xl">{item.name}</span></div>
                    <div className="px-2 text"><NumberFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix={'₫'} /></div>
                    <div className="px-2 text">{item.amount}</div>
                    <div className="px-2 text"><NumberFormat value={item.price * item.amount} displayType={'text'} thousandSeparator={true} prefix={'₫'} /></div>
                    <div className="px-2 text-center"><button className="bg-white text-blue-500 border-2 hover:border-red-500 hover:text-red-500 px-4 py-2 rounded rounded-r-none hover:shadow-lg" onClick={() => deleteCart(item.id)}>
                        Xóa
                                    </button></div>
                </div>
            ))}
        </div>

        <div className="container mx-auto bg-white rounded mt-3 p-3">
            <div className="grid grid-cols-6 text-gray-700 rounded shadow-md p-2 text-xl items-center">
                <div className="col-span-2"></div>
                <div className=""></div>
                <div className=""></div>
                <div className="">Total Price: <span className="text-lg text-blue-600"><NumberFormat value={0} displayType={'text'} thousandSeparator={true} prefix={'₫'} /></span></div>
                <div className="px-2 text-center"><button className="bg-blue-500 text-white text-xl w-full h-full py-2 rounded rounded-r-none hover:shadow-lg transition duration-500">
                    Thanh toán
                    </button></div>
            </div>
        </div>
    </section>
)
}

export default Cart
