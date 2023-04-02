import React from 'react'
import Postcard from './Postcard'
import "../App.css"
const Post = () => {
    const dataarr = [{
        _id: 1,
        title: 'title',
        content: 'content',
       
    },{
        _id: 2,
        title: 'title',
        content: 'content',
        
    },{
        _id: 3,
        title: 'title',
        content: 'content',
        
    },{
        _id: 4,
        title: 'title',
        content: 'content',
        
    },
    {
        _id: 1,
        title: 'title',
        content: 'content',
      
        
    },{
        _id: 2,
        title: 'title',
        content: 'content',
        
    }
  
    
    ]

    
  return (
    <div>
   
       {
        dataarr.map((item) => {
            return <Postcard key={item._id} title={item.title} content ={item.content}  />
        })
       }

    </div>
  )
}

export default Post
