import React, { useRef } from 'react'

const Product = ({ name, size, price, image }) => {
  const afterPrice = price.split('.')
  const imageRef = useRef(null)
  return (
    <div className='product'>
      <div ref={imageRef} className='product-image' style={{backgroundImage : image}}>
        <div className='shipping'>Free Shipping</div>
      </div>
      <p className='product-title'>{name}</p>
      <div className='price-info'>
        <small>$</small>
        <b>{afterPrice[0]}</b>
        <span>{`.${afterPrice[1]}`}</span>
        <p className='installment'>or 9 x {(price / 9).toFixed(2)}</p>
      </div>
      <div className='add'>Add to cart</div>
    </div>
  )
}

export default Product