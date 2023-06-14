import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from "swiper";
import 'swiper/scss';
import "swiper/css/scrollbar";
import './posts.scss';
import '../../fonts/fonts.scss';
import { post } from './Post';


const Posts = () => {
  ///Filtering and displaying posts based on the selected category, as well as determining the count of posts.
  const [data, setData] = useState(post);
  const filterResult = (catItem) => {
    let result = post;
    if (catItem) {
      result = post.filter((curData) => curData.category === catItem);
    } else {
      result = post;
    }
    setData(result);
    setCurrentPage(0);
  };

  const getCategoryCount = (category) => {
    return post.filter((curData) => curData.category === category).length;
  };
 
  ///Splitting the input array data into pages with a fixed number of elements per page.
  const [currentPage, setCurrentPage] = useState(0);
  const PageSize = 12;
  const filteredData = data.slice(
    currentPage * PageSize,
    (currentPage + 1) * PageSize
  );

  ///Updating the display of posts on the current page.
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
    window.scrollTo({ top: 100, behavior: 'smooth' }); ///scroll to the top of the page when the user clicks on pagination
  };

  ///The aside block changes when the screen width is less than 501px.
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 501);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 501);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <main className='page__posts'>
        {isSmallScreen ?
          <aside className='swiper-aside' >
            <h2>Categories</h2>
            <Swiper className="swiper"
              modules={[Scrollbar]}
              grabCursor={true}
              spaceBetween={30}
              slidesPerView={'auto'}
              speed={700}
              centeredSlides={true}
              loop={true}
              scrollbar={{
              hide: true,}}>
            
              {
                [
                'Accounts',
                'Bookkeeping',
                'Business',
                'Business Advice',
                'Cash',
                'Collection',
                'Contracts',
                'Invoices',
                'Ecommerce',
                'Misc',
                'Entrepreneur Interviews',
                'Freelancer',
                ].map((category) => (
                  <SwiperSlide className='category__item' key={category}>
                    <button className='swiper-btn' onClick={() => filterResult(category)}>
                      {category} ({getCategoryCount(category)})
                    </button>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </aside> 
          : 
          <aside className='sticky-aside'>
            <h2>Categories</h2>
            <ul className='category__list'>
              {
                ['Accounts',
                'Bookkeeping',
                'Business',
                'Business Advice',
                'Cash',
                'Collection',
                'Contracts',
                'Invoices',
                'Ecommerce',
                'Misc',
                'Entrepreneur Interviews',
                'Freelancer',
                ].map((category) => (
                  <li className='category__item' key={category}>
                    <button onClick={() => filterResult(category)}>
                      {category} ({getCategoryCount(category)})
                    </button>
                  </li>
                ))
              }
            </ul>
          </aside>
        }

        <div className='posts'>
          {filteredData.map((user) => (
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
                  Read more <span className='arrow'></span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      <ReactPaginate
        className='pagination'
        previousLabel={'<'}
        previousClassName={'previous'}
        nextClassName={'next'}
        nextLabel={'>'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={Math.ceil(data.length / PageSize)}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        activeClassName={'active_p'}
        activeLinkClassName={'active__link'}
      />
    </>
  );
};

export default Posts;