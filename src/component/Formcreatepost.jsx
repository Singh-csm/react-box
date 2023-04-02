import React from 'react'
import Comment from './Comment'
import "../App.css"
const Formcreatepost = () => {
    const list = [{
        _id: 1,
        title: 'title',
        description: 'description',
        image: 'image',
        category: 'category',
        price: 100,
        quantity: 10,
        status: 'active'
    },{
        _id: 2,
        title: 'title',
        description: 'description',
        image: 'image',
        category: 'category',
        price: 100,
        quantity: 10,
        status: 'active'
    },{
        _id: 3,
        title: 'title',
        description: 'description',
        image: 'image',
        category: 'category',
        price: 100,
        quantity: 10,
        status: 'active'
    },{
        _id: 4,
        title: 'title',
        description: 'description',
        image: 'image',
        category: 'category',
        price: 100,
        quantity: 10,
        status: 'active'
    },{
        _id: 5,
        title: 'title',
        description: 'description',
        image: 'image',
        category: 'category',
        price: 100,
        quantity: 10,
        status: 'active'
    }]
  return (
    <div>
      {
        list.map((x)=>{
            return <Comment key ={x._id} title={x.title} description={x.description} category={x.category} price={x.price} status={x.status} />
        })
      }
    </div>
  )
}

export default Formcreatepost
