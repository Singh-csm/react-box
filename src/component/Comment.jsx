import React from 'react'

const Comment = (props) => {
    const { image,
            category,
            price,
            quantity,
            status, } = props
         
  return (
    <div className='postkabox-1'>
      <h1>{image}</h1>
      <h2>{category}</h2>
      <h3>  {price}</h3>
      <h4>{quantity} </h4>
      <h5> {status }</h5>
    </div>
  )
}

export default Comment
