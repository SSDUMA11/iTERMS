import React from 'react'
import {Formik, Form, Field} from 'formik';
import {NavLink} from 'react-router-dom';
import './signIn.scss';
import '../../fonts/fonts.scss';
import facebook from "./pictures/Vector_sign_in(facebook).svg"
import google from "./pictures/Vector_sign_in(google).svg"

const SignIn = () => {

    const validateEmail = (value) =>{
        if(!value){
            return 'Required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)){
            return 'Invalid email address'
        }   
    }
    const validatePassword = (value) =>{
        if(!value){
            return 'Required'
        } else if ( value.length < 8){
            return 'At least 8 characters long'
        }   
    }

  return (
    <>
    <div className="first-screen__sign__in">
            <main className="page">
                <div className="page__container">
                    <div className="page__blok">
                        <div className="blok__sign__in">

                            <div className="blok__title">
                                <h2>Sign in</h2>
                            </div>

                            <div className="sign__in__text"> 
                                    <p>Sign in with</p>
                            </div>

                            <div className="blok__sign__up__with">
                               
                                <div className="sign__up__with">

                                    <div className="sign__up__with__icon">
                                    <img src={google} alt="google"/>
                                    </div>

                                    <div className="sign__up__with__name">
                                            <a href="#">Google</a>
                                    </div>
                                </div>

                                <div className="sign__up__with">
                                    <div className="sign__up__with__icon">
                                        <img src={facebook} alt="facebook"/>    
                                    </div>

                                    <div className="sign__up__with__name">
                                        <a href="#">Facebook</a>
                                    </div>
                                </div>
                            </div>

                            <div className="sign__in__text"> 
                                <p>Or</p>
                            </div>

                            <Formik initialValues={{
                                email: '',
                                password: ''
                            }}
                            onSubmit={values => {console.log(values)}}>
                            {({errors, touched}) => (
                            <Form className="main-blok__form">
                                <div className="form-main-blok__input">

                                    <Field name="email" placeholder="Enter the Email" validate={validateEmail}  className={errors.email && touched.email ? "invalid" : ""}/>
                                    
                                    <span className="line_one"></span>
                                    <span className="line_two"></span>
                                    {errors.email && touched.email && <p className='error'>{errors.email}</p>}
                                    <label>Email</label>
                                </div>

                                <div className="form-main-blok__input">

                                    <Field name="password" placeholder="At least 8 characters long" maxLength="13" validate={validatePassword} className={errors.password && touched.password ? "invalid" : ""}/>
                                    
                                    <span className="line_one"></span>
                                    <span className="line_two"></span>
                                    {errors.password && touched.password && <p className='error'>{errors.password}</p>}
                                    <label>Password</label>
                                </div>

                                <button type="submit" name = "button" className="form-main-blok__button">Sign in</button>
                            </Form>
                            )}
                            </Formik>

                            <div className="authorization">
                                <p>Don't have an account? <NavLink to="/signUp">Sign up</NavLink></p>
                            </div>
                        </div>
                        <div className="page__blok__quadrate"></div>
                    </div> 
                </div>
            </main>
        </div>
    </>
  )
}

export default SignIn