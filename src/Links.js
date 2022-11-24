import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from './comps/signIn/SignIn';
import SignUp from './comps/signUp/SignUp';
import Home from './comps/home/Home';
import Cart from './comps/cart/Cart';
import Smartphone from './comps/smartphone/Smartphone';
import Grocery from './comps/grocery/Grocery'
import Fragrance from './comps/fragrance/Fragrance'
import Laptop from './comps/laptop/Laptop'
import SkinCare from './comps/skincare/SkinCare'
import HomeDecoration from './comps/homeDecoration/HomeDecoration';
import Payment from './comps/payment/Payment';

function Links() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/cart" element={<Cart />} />
                <Route exact path="/smartphones" element={<Smartphone />} />
                <Route exact path="/groceries" element={<Grocery />} />
                <Route exact path="/fragrances" element={<Fragrance />} />
                <Route exact path="/laptops" element={<Laptop />} />
                <Route exact path="/skinCare" element={<SkinCare />} />
                <Route exact path="/home-decoration" element={<HomeDecoration />} />
                <Route exact path='/sign_in' element={<SignIn />} />
                <Route exact path='/sign_up' element={<SignUp />} />
                <Route exact path='/payment' element={<Payment />} />
            </Routes>
        </div>
    )
}

export default Links