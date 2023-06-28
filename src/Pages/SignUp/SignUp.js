import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useNavigate } from 'react-router-dom';
import {Formik, Form, Field} from 'formik';
import PropTypes from 'prop-types';
import styles from './signUp.module.scss';
import '../../fonts/fonts.scss';
import '../../i18n';
///IMG
import facebook from './pictures/facebook.webp';
import google from './pictures/google.webp';

const SignUp = ({setIsLoggedIn}) => {
  const { t } = useTranslation(['signUp']);

  ///after filling out the form, it takes you to the main page
  const navigate = useNavigate();
  const handleFormSubmit = () => {
    navigate('/');
    setIsLoggedIn(true);
  };

  ///validates the form
  const validateName = (value) => {
    if (!value) {
      return 'Required';
    } else if (/\d/.test(value)) {
      return 'Name should not contain numbers';
    } else if (value.length < 1) {
      return 'Name should be longer than 1 character';
    }
  };
  
  const validateEmail = (value) => {
    if (!value) {
      return 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      return 'Invalid email address';
    }
  };
  const validatePassword = (value) => {
    if (!value) {
      return 'Required';
    } else if (value.length < 8) {
      return 'At least 8 characters long';
    }
  };


  return (
    <div className={styles.first__screen}>
      <main className={styles.page}>
        <div className={styles.page__container}>
          <div className={styles.page__blok}>
            <div className={styles.blok__sign__up}>

              <div className={styles.blok__title}>
                <h2>{t ('title')}</h2>
              </div>

              <Formik initialValues={{
                email: '',
                password: '',
                name: '',
              }}
              onSubmit={handleFormSubmit}>
                {({errors, touched}) => (
                  <Form className={styles.form}>
                    <div className={styles.blok__input}>
                      <Field name="name" placeholder="Your Name" validate={validateName} className={`${errors.name && touched.name ? 'invalid' : ''}`}/>
                
                      <span className={styles.line_one}></span>
                      <span className={styles.line_two}></span>
                      {errors.name && touched.name && <p className={styles.error}>{errors.name}</p>}
                      <label>{t ('name')}</label>
                    </div>

                    <div className={styles.blok__input}>
                      <Field name="email" placeholder="Enter the Email" validate={validateEmail}  className={`${errors.email && touched.email ? 'invalid' : ''}`}/>
                        
                      <span className={styles.line_one}></span>
                      <span className={styles.line_two}></span>
                      {errors.email && touched.email && <p className={styles.error}>{errors.email}</p>}
                      <label>{t ('email')}</label>
                    </div>

                    <div className={styles.blok__input}>
                      <Field name="password" type="password" placeholder="At least 8 characters long" maxLength="13" validate={validatePassword} className={`${errors.password && touched.password ? 'invalid' : ''}`}/>
                  
                      <span className={styles.line_one}></span>
                      <span className={styles.line_two}></span>
                      {errors.password && touched.password && <p className={styles.error}>{errors.password}</p>}
                      <label>{t ('password')}</label>
                    </div>

                    <div className={styles.blok__terms__and__policy}>
                      <p>{t('text')} <NavLink to="*" className={styles.link__terms__and__policy}>Terms of Service</NavLink> {t ('and')} <NavLink to="*" className={styles.link__terms__and__policy}>{t ('linkTwo')}</NavLink></p>
                    </div>

                    <button type="submit" name = "button" className={styles.form__button}>{t ('buttonOne')}</button>
                  </Form>
                )}
              </Formik>

              <div className={styles.sign__up__with__text}>
                <p>{t ('disclaimerOne')}</p>
              </div>

              <div className={styles.blok__sign__up__with}>
                <div className={styles.sign__up__with}>
                  <div className={styles.sign__up__with__icon}>
                    <img src={google} alt="google"/>
                  </div>
                  <div className={styles.sign__up__with__name}>
                    <button onClick={handleFormSubmit}>Google</button>
                  </div>
                </div>
                <div className={styles.sign__up__with}>
                  <div className={styles.sign__up__with__icon}>
                    <img src={facebook} alt="facebook"/>
                  </div>
                  <div className={styles.sign__up__with__name}>
                    <button onClick={handleFormSubmit}>Facebook</button>
                  </div>
                </div>
              </div>
              <div className={styles.authorization}>
                <p>{t ('textTwo')}<NavLink to="/signIn">{t ('logIn')}</NavLink></p>
              </div>
            </div>
            <div className={styles.page__blok__quadrate}></div>
          </div>    
        </div>
      </main>
    </div>
  );
};

SignUp.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default SignUp;