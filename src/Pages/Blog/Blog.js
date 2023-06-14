import React from 'react'
import './blog.scss';
import '../../fonts/fonts.scss';
///components
import Posts from '../../components/Posts/Posts';
import Footer from '../../components/footer/Footer';

const Blog = () => {
  return (
    <>
    <div className='first__screen'>
      <div className='blog__container'>
        <div className='blog__title'>
          <p className='title__disclaimer'>Keep Up With the Latest</p>
          <h1>Discover What`s New</h1>
          <p className='title__text'>Learn from the experts at iTerms to ensure you stay on top of
          industry legalities and changing legal landscapes at all times.</p>
        </div>
        <Posts/>
      </div>
    </div>
    <Footer/> 
    </>
  )
}

export default Blog