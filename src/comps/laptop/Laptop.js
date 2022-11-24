import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Card from '../home/Card';
import Cartbtn from '../home/Cartbtn';
import { addItem } from '../../redux/action/index'

function Laptop() {
    const allProducts = useSelector((state) => state.allProducts)
    const cate = useSelector((state) => state.categories)
    const [products, setProducts] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        if(allProducts.length && cate !== ''){
            getProductsByCategory(cate)
        }
    },[allProducts, cate])

    function getProductsByCategory(category) {
      setProducts(arr => arr = [])
      allProducts.filter((product) => {
          if(product.category === category) {
              setProducts(old => [...old, product])
          }
      })
  }
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
    </div>
)
}

export default Laptop