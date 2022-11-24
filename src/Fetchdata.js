import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { allProducts } from './redux/action'
import Carousel from './comps/carousel/Carousel';

function Fetchdata() {
    const dispatch = useDispatch()
    useEffect(() => {
        (async () => {
            const res = await axios.get(`https://dummyjson.com/products`)
        .then((res) => dispatch(allProducts(res.data.products)))
        .catch(err => console.log(err))
        })()
    }, [])
}

export default Fetchdata