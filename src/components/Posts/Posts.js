import React, { useState} from 'react';
import ReactPaginate from 'react-paginate';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import styles from './posts.module.scss';
import '../../fonts/fonts.scss';
import { post } from './Post';
///IMG
import picture from './pictures/post.webp';
///components
import Categories from '../Categories/Categories';

const Posts = () => {
  ///is responsible for translating the component
  const { t } = useTranslation(['posts']);
  const postsObj = t('post',{returnObjects:true});

  /// the code updates the category property of each object in the postsObj array with the corresponding category value from the post array.
  post.forEach((post, idx) => {
    postsObj[idx].category = post.category;
  });
  ///Filtering and displaying posts based on the selected category, as well as determining the count of posts.
  const [data, setData] = useState(postsObj);
  const filterResult = (catItem) => {
    let result = postsObj;
    if (catItem) {
      result = postsObj.filter((curData) => curData.category === catItem);
    } else {
      result = postsObj;
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
    (currentPage + 1) * PageSize,
  );

  ///Updating the display of posts on the current page.
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
    window.scrollTo({ top: 100, behavior: 'smooth' }); ///scroll to the top of the page when the user clicks on pagination
  };

  return (
    <>
      <main className={styles.page__posts}>

        <Categories filterResult={filterResult} getCategoryCount={getCategoryCount}/>

        <div className={styles.posts}>
          {filteredData.map((user) => (
            <div className={styles.post} key={user.id}>
              <div className={styles.post__img}>
                <img src={picture} alt="img" />
              </div>
              <div className={styles.post__title}>
                <p>{user.title}</p>
              </div>
              <div className={styles.post__text}>
                <p>{user.text}</p>
              </div>
              <div className={styles.post__btn}>
                <a href="/blogDetail">
                  Read more <span className={styles.arrow}></span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      <ReactPaginate
        className={styles.pagination}
        previousLabel={'<'}
        previousClassName={styles.previous}
        nextClassName={styles.next}
        nextLabel={'>'}
        breakLabel={'...'}
        breakClassName={styles.break_me}
        pageCount={Math.ceil(data.length / PageSize)}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        onPageChange={handlePageChange}
        containerClassName={styles.pagination}
        activeClassName={styles.active_p}
        activeLinkClassName={styles.active__link}
      />
    </>
  );
};

export default Posts;