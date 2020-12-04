import './App.css';
import './tailwind.output.css'
import Nav from './components/Nav';
import Products from './components/Products';
import PreFooter from './components/PreFooter';
import Footer from './components/Footer';
import { useCallback, useEffect, useState } from 'react';
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
  Link,
  useHistory,
  Redirect
} from "react-router-dom";
import Gallery from './components/Gallery';
import Why from './components/Why';
import RelateProducts from './components/RelateProducts';
import Cart from './components/Cart';
import Swal from 'sweetalert2';
import Login from './components/Login';

function App() {
  const API_PRODUCT = `http://localhost:1337/products`;
  const [products, setProducts] = useState([]);
  const API_CATE = `http://localhost:1337/categories`;
  const [categories, setCate] = useState([]);
  const API_BLOG = `http://localhost:1337/blogs`;
  const [blogs, setBlogs] = useState([]);
  const [id, setId] = useState(null);

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
    window.scrollTo(0, 0)
  }, [])

  const onCategory = (id) => {
    setId(id);
  }


  useEffect(() => {
    if (id === 0) {
      fetch(API_PRODUCT)
        .then(response => response.json())
        .then(data => setProducts(data));
    } else {
      const API_CATEGORY = `${API_CATE}/${id}`;
      fetch(API_CATEGORY)
        .then(response => response.json())
        .then(data => {
          // console.log(data);
          setProducts(data.products);
        })
    }
  }, [id])

  //add to cart
  const [cart, setCart] = useState([]);

  const onCart = (id, amount) => {
    fetch(`${API_PRODUCT}/${id}`)
      .then(response => response.json())
      .then(data => setCart([
        ...cart,
        {
          amount: amount,
          ...data
        }
      ]))
      .then(() => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Add to cart successfully',
          showConfirmButton: false,
          timer: 1500
        })
      })
  }
  // console.log(cart);

  // delete cart item
  const onDeleteCart = (id) => {
    const newCart = cart.filter(item => item.id !== id);
    setCart(newCart);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Remove product successfully',
      showConfirmButton: false,
      timer: 1500
    })
  }

  // login

  const data_user = {
    email: "ducdinh@gmail.com",
    password: "123123"
  }
  const [path, setPath] = useState({ redirect: null })
  const [user, setUser] = useState({ email: "" });
  const [error, setError] = useState("");

  const onLoginData = (data) => {
    if (data.email === data_user.email && data.password === data_user.password) {
      setUser({
        email: data.email
      })
      setPath({
        redirect: "ok"
      })
    }
  }

  // console.log(user);
  const onLogout = () => {
    setUser({
      email: ""
    });
    setPath({
      redirect: null
    })
  }
  if (path.redirect) {
    return (
      <Router>
        <div className="App">
          <Nav user={user} />
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
              <Why />
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
              <DetailProduct addToCart={onCart} user={user} />
              <RelateProducts products={products} />
            </Route>
            <Route exact path="/contact">
              <Bread data="Contact" bg="contact-bread" />
              <Contact />
            </Route>
            <Route exact path="/cart">
              <Bread data="Cart" bg="cart-bread" />
              <Cart cart={cart} deleteCart={onDeleteCart} />
            </Route>
          </Switch>
          <PreFooter />
          <Footer />
        </div>
      </Router>
    );
  }
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/auth/login">
            <Login login={onLoginData} />
          </Route>
          <>
            <Nav user={user} />
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
                <Why />
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
                <DetailProduct addToCart={onCart} user={user} />
                <RelateProducts products={products} />
              </Route>
              <Route exact path="/contact">
                <Bread data="Contact" bg="contact-bread" />
                <Contact />
              </Route>
              <Route exact path="/cart">
                <Bread data="Cart" bg="cart-bread" />
                <Cart cart={cart} deleteCart={onDeleteCart} />
              </Route>
            </Switch>
            <PreFooter />
            <Footer />
          </>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
