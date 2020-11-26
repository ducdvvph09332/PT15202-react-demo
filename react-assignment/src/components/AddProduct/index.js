import React, { useState } from 'react'

const AddProduct = ({addProduct}) => {

    const [product, setProduct] = useState({});
    const onHandleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value
        })
    }

    const onHandleSubmit = (e) => {
        e.preventDefault();
        addProduct(product);
    }

    return (
        <section className="add-product flex justify-center items-center">

            <div className="text-5xl font-bold p-16 text-white"><span className="text-blue-600">Create</span> New Product</div>
            <form action="" onSubmit={onHandleSubmit}>
                <input type="text" className="bg-gray-300 border border-transparent rounded-lg my-2 px-2" placeholder="Image" name="image" id=""
                    onChange={onHandleChange}
                />
                <br />
                <input type="text" className="bg-gray-300 border border-transparent rounded-lg my-2 px-2" placeholder="Name" name="name" id=""
                    onChange={onHandleChange}
                />'
                <br />
                <input type="text" className="bg-gray-300 border border-transparent rounded-lg my-2 px-2" placeholder="Price" name="price" id=""
                    onChange={onHandleChange}
                />
                <br />
                <br />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add</button>
            </form>
        </section>
    )
}

export default AddProduct
