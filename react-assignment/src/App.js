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
import Split from 'react-split';
import axios from 'axios';

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
import Register from './components/Register';

function App() {
  const API_PRODUCT = `http://localhost:1337/products`;
  // const [products, setProducts] = useState([]);
  const API_CATE = `http://localhost:1337/categories`;
  const [categories, setCate] = useState([]);
  const API_BLOG = `http://localhost:1337/blogs`;
  const [blogs, setBlogs] = useState([]);

  // SHOW PRODUCT
  useEffect(() => {
    // fetch(API_PRODUCT)
    //   .then(response => response.json())
    //   .then(data => setProducts(data));
    fetch(API_CATE)
      .then(response => response.json())
      .then(data => setCate(data));
    fetch(API_BLOG)
      .then(response => response.json())
      .then(data => setBlogs(data));
    window.scrollTo(0, 0)
  }, [])

  //ADD TO CART
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

  // DELETE CART ITEM
  const onDeleteCart = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
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
    })
  }

  // LOGIN

  const [logInfo, setLogInfo] = useState(null);
  const [error, setError] = useState("");

  const onLoginData = (data) => {
    axios
      .post('http://localhost:1337/auth/local', {
        identifier: data.email,
        password: data.password,
      })
      .then(response => {
        // Handle success.
        setLogInfo(response.data.user)
        // console.log(response.data.user);
        setError("")
        window.history.back();
      })
      .catch(() => {
        setError("Sai thông tin đăng nhập");
      });
  }

  // LOGOUT
  const onLogout = () => {
    setLogInfo(null);
    setError("");
  }
  // const [loading, setLoading] = useState(false);

  //VALIDATION
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");


  // REGISTER

  const onRegister = (data) => {
    if(!data.name){
      setErrorName("Không được để trống tên!");
    } else if(data.name.length < 3){
      setErrorName("Độ dài lớn hơn 2 và nhỏ hơn 50 ký tự!");
    } else{
      setErrorName("");
    }
    if (!data.email){
      setErrorEmail("Không được để trống email!");
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)){
      setErrorEmail("Email không đúng định dạng!");
    } else{
      setErrorEmail("");
    }
    if (!data.password){
      setErrorPassword("Không được để trống mật khẩu!");
    } else if(data.password.length < 6){
      setErrorPassword("Mật khẩu ít nhất 6 ký tự!");
    } else{
      setErrorPassword("");
    }

    if (errorName === "" && errorEmail === "" && errorPassword === "") {
      axios
        .post('http://localhost:1337/auth/local/register', {
          username: data.name,
          email: data.email,
          password: data.password,
        })
        .then(response => {
          // Handle success.
          setLogInfo(response.data.user);
          window.history.back()
        })
    }
  }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/auth/login">
            <Login login={onLoginData} error={error} />
          </Route>
          <Route exact path="/auth/register">
            <Register register={onRegister} errorName={errorName} errorEmail={errorEmail} errorPassword={errorPassword}/>
          </Route>
          <>
            <Nav logInfo={logInfo} logout={onLogout} />
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
                <Products categories={categories} />
              </Route>
              <Route exact path="/shop/product/:id">
                <Bread data="Product" bg="shop-bread" />
                <DetailProduct addToCart={onCart} logInfo={logInfo} />
              </Route>
              <Route exact path="/contact">
                <Bread data="Contact" bg="contact-bread" />
                <Contact />
              </Route>
              <Route exact path="/cart">
                {(logInfo !== null) ? (
                  <>
                    <Bread data="Cart" bg="cart-bread" />
                    <Cart cart={cart} deleteCart={onDeleteCart} />
                  </>
                ) : (
                    <Redirect to="/auth/login" />
                  )}
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
