import React, { useEffect, useState } from 'react'
import Banner from '../Banner'
import Blogs from '../Blogs'
import Customers from '../Customers'
import Products from '../Products'
import Staffs from '../Staffs'
import Welcome from '../Welcome'
import FeaturedProducts from '../FeaturedProducts'
import MostViewBlogs from '../MostViewBlogs'

const Home = () => {

  const API_PRODUCT = `http://localhost:1337/products?_limit=6`;

  const [products, setProducts] = useState([]);

  const API_BLOG = `http://localhost:1337/blogs?_limit=6`;

  const [blogs, setBlogs] = useState([]);

  // show product
  useEffect(() => {
    fetch(API_PRODUCT)
      .then(response => response.json())
      .then(data => setProducts(data));
    fetch(API_BLOG)
      .then(response => response.json())
      .then(data => setBlogs(data));
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Banner />
      <Welcome />
      <FeaturedProducts products={products} />
      <Staffs />
      <Customers />
      <MostViewBlogs blogs={blogs} />
    </>
  )
}

export default Home
