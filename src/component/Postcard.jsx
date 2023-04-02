import React from 'react'

const Postcard = (props) => {
    const { title,content,} = props;

  return (
    <div className='postkabox hover-effect'>
       <h2>{title}</h2>
    
       <h3>{content}</h3>
    </div>
  )
}

export default Postcard
