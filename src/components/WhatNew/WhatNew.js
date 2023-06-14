import React from 'react'
import './what_new.scss';
import '../../fonts/fonts.scss';
import { news } from './New';

const WhatNew = () => {
  return (
    <div className='__container'>
      <div className='posts__new'>
        {news.map(user =>(
          <div className='post' key={user.id}>
            <div className='post__img'>
              <img src={user.img} alt='img' />
            </div>
            <div className='post__title'>
              <p>{user.title}</p>
            </div>
            <div className='post__text'>
              <p>{user.text}</p>
            </div>
            <div className='post__btn'>
              <a href='*'>
                Read more<span className='arrow'></span>
              </a>
            </div>
          </div>
        ))}
      </div>
      <button className='new__posts__btn'><a href='/blog'>Read More</a></button>
    </div>
  )
}

export default WhatNew