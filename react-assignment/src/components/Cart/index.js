import React, { useEffect, useState } from 'react'
import NumberFormat from 'react-number-format';
import Nav from '../Nav';

const Cart = ({ cart, deleteCart }) => {
    // console.log(cart);

    // Total Price
    let initialPrice = 0;
    let totalPrice = cart.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.amount * currentValue.price
    }, initialPrice)
    // console.log(totalPrice);

    // let initialAmount = 0;
    // let totalAmount = cart.map(item => item)
    // .reduce(function (accumulator, currentValue) {
    // //     return accumulator + currentValue.amount
    // // }, initialAmount)
    // // // console.log(totalAmount);

    // let groupingCart = cart
    // .map(item => item.id)
    // .map((item, currentItem, array) => array.indexOf(item) === currentItem && currentItem)
    // .filter(item => cart[item])
    // .map(item => cart[item])

    // let newArr = cart.filter((item, index) => cart.indexOf(item)===index);
    // let cartId = cart.map(item=>item.id)
    // let uniqueId = cartId.filter((item, index) => cartId.indexOf(item) === index)
    // let newArr = cart.filter(item => item.id === uniqueId   )
    // console.log(newArr);
    // console.log(groupingCart)

    //SET AMOUNT    
    const[count, setCount] = useState([])
    

    useEffect(() => {
        window.scrollTo(0, 0)
        // cart.map(item => setCount(item.amount))
    }, [])
    // console.log(count);
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
                {(cart.length > 0) ? (
                    <>
                        {cart.map((item, index) => (
                            <div key={index} className="my-5 flex items-center grid grid-cols-6">
                                <div className="px-2 col-span-2 flex items-center gap-5"><img src={`http://localhost:1337${item.image[0].url}`} width="150px" alt="" /><span className="text-xl">{item.name}</span></div>
                                <div className="px-2 text-right"><NumberFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix={'₫'} /></div>
                                <div className="px-2 text-right">
                                    <button className="bg-blue-500 text-white px-3 rounded rounded-r-none" onClick={() => setCount(count - 1)}>-</button>
                                    <input type="number" name="" min="1" readOnly className="w-12 border-2 rounded pl-2" value={item.amount} id="" />
                                    <button className="bg-blue-500 text-white px-3 rounded rounded-r-none" onClick={() => setCount(count + 1)}>+</button>
                                </div>
                                <div className="px-2 text-right"><NumberFormat value={item.price * item.amount} displayType={'text'} thousandSeparator={true} prefix={'₫'} /></div>
                                <div className="px-2 text-center"><button className="bg-white text-blue-500 border-2 hover:border-red-500 hover:text-red-500 px-4 py-2 rounded rounded-r-none hover:shadow-lg" onClick={() => deleteCart(item.id)}>
                                    Xóa
                                    </button></div>
                            </div>
                        ))}
                    </>
                ) : (
                        <div className="rounded mt-3 p-3 text-lg bg-gray-100 text-center">
                            No Product Here
                        </div>
                    )}
            </div>

            <div className="container mx-auto bg-white rounded mt-3 p-3">
                <div className="grid grid-cols-6 text-gray-700 rounded shadow-md p-2 text-xl items-center">
                    <div className="col-span-2"></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className="">Total Price: <span className="text-lg text-blue-600"><NumberFormat value={totalPrice} displayType={'text'} thousandSeparator={true} prefix={'₫'} /></span></div>
                    <div className="px-2 text-center"><button className="bg-blue-500 text-white text-xl w-full h-full py-2 rounded rounded-r-none hover:shadow-lg transition duration-500">
                        ORDER
                    </button></div>
                </div>
            </div>
        </section>
    )
}

export default Cart
