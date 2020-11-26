import logo from './logo.svg';
import './App.css';
import './tailwind.output.css'
import Nav from './components/Nav';
import Banner from './components/Banner';
import Welcome from './components/Welcome';
import Products from './components/Products';
import Why from './components/Why';
import PreFooter from './components/PreFooter';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import AddProduct from './components/AddProduct';
import Staffs from './components/Staffs';
import EditProduct from './components/EditProduct';
import Swal from 'sweetalert2'
import Customers from './components/Customers';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import Bread from './components/Bread';
import Services from './components/Services';
import DetailProduct from './components/DetailProduct';


import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Gallery from './components/Gallery';


function App() {

  const API_PRODUCT = `http://localhost:1337/products`;

  const [products, setProducts] = useState([]);

  const API_CATE = `http://localhost:1337/categories`;

  const [categories, setCate] = useState([]);

  const API_BLOG = `http://localhost:1337/blogs`;

  const [blogs, setBlogs] = useState([]);

  // show product
  useEffect(() => {
    fetch(API_PRODUCT)
      .then(response => response.json())
      .then(data => setProducts(data));
    fetch(API_CATE)
      .then(response => response.json())
      .then(data => setCate(data));
    fetch(API_BLOG)
      .then(response => response.json())
      .then(data => setBlogs(data));
  }, [])

  const onCategory = (id) => {
    fetch(API_PRODUCT)
    .then(response => response.json())
    .then(data => setProducts(data))
    const API_CATEGORY = `${API_CATE}/${id}`;
    fetch(API_CATEGORY)
      .then(response => response.json())
      .then(() => {
        const newProduct = products.filter(product => product.category.id === id);
        console.log(id);
        setProducts(newProduct);
      })

  }

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/about">
            <Bread data="About" bg="about-bread" />
            <About />
          </Route>
          <Route exact path="/services">
            <Bread data="Services" bg="services-bread" />
            <Services />
          </Route>
          <Route exact path="/gallery">
            <Bread data="Gallery" bg="gallery-bread" />
            <Gallery />
          </Route>
          <Route exact path="/blog">
            <Bread data="Blog" bg="blog-bread" />
            <Blogs blogs={blogs} />
          </Route>
          <Route exact path="/shop">
            <Bread data="Shop" bg="shop-bread" />
            <Products products={products} categories={categories} category={onCategory} />
          </Route>
          <Route exact path="/shop/product/:id">
            <Bread data="Product" bg="shop-bread" />
            <DetailProduct />
          </Route>
          <Route exact path="/contact">
            <Bread data="Contact" bg="contact-bread" />
            <Contact />
          </Route>
        </Switch>
        <PreFooter />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
