import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { counterItem, filterSize } from '../stores/FilterSlice'

const Navbar = () => {
  const sizeRef = useRef([])
  const [size, setSize] = useState('')
  const dispatch = useDispatch()

  const sizeArray = ['XS', 'S', 'M', 'ML', 'L', 'XL']

  const addRef = (el) => {
    if (el && !sizeRef.current.includes(el)) {
      sizeRef.current.push(el)
    }
  }

  const handleSize = (el) => {
    // setSize(sizeRef.current[0].innerHTML.toLowerCase())
    setSize(el.target.textContent.toLowerCase())
    dispatch(counterItem)
    console.log(el.target.textContent)
  }

  useEffect(() => {
    dispatch(filterSize({
      size: size
    }))
  }, [size])

  return (
    <div className='navbar'>
      <h3>Sizes:</h3>
      <div className='sizes'>
        {
          sizeArray.map((item, index) => (
            <div key={index} ref={addRef} onClick={handleSize}>
              {item}
            </div>
          ))
        }
        {/* <div ref={sizeRef} onClick={handleSize}>XS</div>
        <div ref={sizeRef} onClick={handleSize}>S</div>
        <div ref={sizeRef} onClick={handleSize}>M</div>
        <div ref={sizeRef} onClick={handleSize}>ML</div>
        <div ref={sizeRef} onClick={handleSize}>L</div>
        <div ref={sizeRef} onClick={handleSize}>XL</div> */}
      </div>
      <p className='footer'> StoreX All rights reserved 2022</p>
    </div>
  )
}

export default Navbar