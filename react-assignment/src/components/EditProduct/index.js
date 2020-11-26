import React, { useState } from 'react'

const EditProduct = ({ product, onEdit}) => {

    const [newProduct, setNewProduct] = useState({});
    const onHandleChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({
            ...product,
            [name]: value
        })
    }

    const onHandleSubmit = (e) => {
        e.preventDefault();
        onEdit(newProduct);
    }

    return (
        <section className="edit-product flex justify-center items-center">
            <form action="" onSubmit={onHandleSubmit}>
                <input type="text" className="bg-gray-300 border border-transparent rounded-lg my-2 px-2" placeholder="Image" name="image" id=""
                    defaultValue={product.image}
                    onChange={onHandleChange}
                />
                <br />
                <input type="text" className="bg-gray-300 border border-transparent rounded-lg my-2 px-2" placeholder="Name" name="name" id=""
                    defaultValue={product.name}
                    onChange={onHandleChange}
                />'
                <br />
                <input type="text" className="bg-gray-300 border border-transparent rounded-lg my-2 px-2" placeholder="Price" name="price" id=""
                    defaultValue={product.price}
                    onChange={onHandleChange}
                />
                <br />
                <br />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right">Edit</button>
            </form>
            <div className="text-5xl font-bold p-16 text-white"> <span className="text-blue-600">Edit</span> Your Product</div>
        </section>
    )
}

export default EditProduct
