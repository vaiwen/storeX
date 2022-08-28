import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'

const ProductList = () => {
    const products = useSelector(state => state.products)
    const [count, setCount] = useState(products.length)

    useEffect(() => {
        setCount(products.length)
    },[products])
 
    return (
        <div className='product-list'>
            <section className='info'>
                <p> {count} items found</p>
            </section>
            <div className='products'>
                {products.map((product, index) => (
                    <Product key={index} name={product.name} size={product.size} price={product.price} image={product.image} />
                ))}
            </div>
        </div>
    )
}

export default ProductList