import React from 'react';
import { useTranslation } from 'react-i18next';
import {Formik, Form, Field} from 'formik';
import { NavLink, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './signIn.module.scss';
import '../../fonts/fonts.scss';
import '../../i18n';
///IMG
import facebook from './pictures/facebook.webp';
import google from './pictures/google.webp';

const SignIn = ({setIsLoggedIn}) => {

  const { t } = useTranslation(['signIn']);
  ///after filling out the form, it takes you to the main page
  const navigate  = useNavigate();
  const handleFormSubmit = () => {
    navigate('/');
    setIsLoggedIn(true);
  };

  ///validates the form
  const validateEmail = (value) =>{
    if(!value){
      return 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)){
      return 'Invalid email address';
    }   
  };
  const validatePassword = (value) =>{
    if(!value){
      return 'Required';
    } else if ( value.length < 8){
      return 'At least 8 characters long';
    }   
  };

  return (
    <div className={styles.first__screen}>
      <main className={styles.page__container}>
        <div className={styles.page__container}>
          <div className={styles.page__blok}>
            <div className={styles.sign__in}>

              <div className={styles.title}>
                <h2>{t ('title')}</h2>
              </div>

              <div className={styles.sign__in__text}> 
                <p>{t ('disclaimerOne')}</p>
              </div>

              <div className={styles.blok__sign__up__with}>
                               
                <div className={styles.sign__up__with}>

                  <div className={styles.icon}>
                    <img src={google} alt="google"/>
                  </div>

                  <div className={styles.sign__in__btn}>
                    <button onClick={handleFormSubmit}>Google</button>
                  </div>
                </div>

                <div className={styles.sign__up__with}>
                  <div className={styles.icon}>
                    <img src={facebook} alt="facebook"/>    
                  </div>

                  <div className={styles.sign__in__btn}>
                    <button onClick={handleFormSubmit}>Facebook</button>
                  </div>
                </div>
              </div>

              <div className={styles.or}> 
                <p>{t ('or')}</p>
              </div>

              <Formik initialValues={{
                email: '',
                password: '',
              }}
              onSubmit={handleFormSubmit}>
                {({errors, touched}) => (
                  <Form className={styles.blok__form}>
                    <div className={styles.blok__input}>

                      <Field name="email" placeholder="Enter the Email" validate={validateEmail}  className={`${errors.email && touched.email ? 'invalid' : ''}`}/>
                                    
                      <span className={styles.line_one}></span>
                      <span className={styles.line_two}></span>
                      {errors.email && touched.email && <p className={styles.error}>{errors.email}</p>}
                      <label>{t ('email')}</label>
                    </div>

                    <div className={styles.blok__input}>

                      <Field name="password" type="password" placeholder="At least 8 characters long" maxLength="13" validate={validatePassword}   className={`${errors.password && touched.password ? 'invalid' : ''}`}/>
                                    
                      <span className={styles.line_one}></span>
                      <span className={styles.line_two}></span>
                      {errors.password && touched.password && <p className={styles.error}>{errors.password}</p>}
                      <label>{t ('password')}</label><NavLink className={styles.forgot__password} to="/resetYourPassword">{t ('forgotPassword')}</NavLink>
                    </div>

                    <button type="submit" name = "button" className={styles.form__button}>{t ('buttonOne')}</button>
                  </Form>
                )}
              </Formik>

              <div className={styles.authorization}>
                <p>{t ('text')} <NavLink to="/signUp">{t ('signUp')}</NavLink></p>
              </div>
            </div>
            <div className={styles.page__blok__quadrate}></div>
          </div> 
        </div>
      </main>
    </div>
  );
};

SignIn.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default SignIn;