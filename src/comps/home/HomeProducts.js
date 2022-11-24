import React, { useState, useEffect  } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from './Card';
import '../../static/home/homeproducts.css'
import Cartbtn from './Cartbtn';
import Cart from '../cart/Cart';
import { addItem } from '../../redux/action/index'

function HomeProducts() {
    const allProducts = useSelector((state) => state.allProducts)
    const cate = useSelector((state) => state.categories)
    const [categoryProducts, setCategoryProducts] = useState([])
    const [products, setProducts] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        if(allProducts.length && cate === '') {
            setProducts(allProducts)
        }
    },[allProducts, cate])

    return (
        <div className="homeProducts">
            <div className="homeProducts_cont">
                {products.length ? (products.map((item, key) => {
                    return (
                        <div className="home_products_cont" key={key}>
                            <Card img={item.thumbnail} price={item.price} rating={item.rating} brand={item.brand} />
                            <Cartbtn buy={() => dispatch(addItem(item))} />
                        </div>
                    )
                })): null}
            </div>
            {/* <div className="cart">
                <Cart />
            </div> */}
        </div>
    )
}

export default HomeProducts