import React from 'react'
import './article.css'
const Article = ({imgurl,date,title}) => {
  return (
    <div className='gpt3_article'>
      <div  className='gpt3_article-img'>
        <img src={imgurl}/>
      </div>
      <div className='gpt3_article-text-component'>
        <p>{date}</p>
        <h1>{title}</h1>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article