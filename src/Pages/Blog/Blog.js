import React from 'react';
import styles from './blog.module.scss';
import '../../fonts/fonts.scss';
import { useTranslation } from 'react-i18next';
import '../../i18n';
///components
import Posts from '../../components/Posts/Posts';
import Footer from '../../components/footer/Footer';

const Blog = () => {
  const { t } = useTranslation(['blog']);
  return (
    <>
      <div className={styles.first__screen}>
        <div className="blog__container">
          <div className={styles.blog__title}>
            <p className={styles.title__disclaimer}>{t ('disclaimer')}</p>
            <h1>{t ('title')}</h1>
            <p className={styles.title__text}>{t ('subtitle')}</p>
          </div>
          <Posts/>
        </div>
      </div>
      <Footer/> 
    </>
  );
};

export default Blog;