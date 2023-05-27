import React from 'react'
import {NavLink} from 'react-router-dom';
import {Formik, Form, Field} from 'formik';
import './signUp.scss';
import '../../fonts/fonts.scss';
import facebook from "./pictures/Vector_sign_up(facebook).svg"
import google from "./pictures/Vector_sign_up(google).svg"

const SignUp = () => {
    const validateName = (value) =>{
        if(!value){
            return 'Required'
          }
          else if (/\d/.test(value)) {
            return 'Name should not contain numbers';
          } else if (value.length < 1) {
            return 'Name should be longer than 1 character';
        }
    }

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
    <div className="first-screen__sign__up">
            <main className="page">
                <div className="page__container">
                    <div className="page__blok">
                        <div className="blok__sign__up">

                            <div className="blok__title">
                                <h2>Sign up</h2>
                            </div>

                            <Formik initialValues={{
                                email: '',
                                password: '',
                                name: '',
                            }}
                            onSubmit={values => {console.log(values)}}>
                            {({errors, touched}) => (
                            <Form className="main-blok__form">

                                <div className="form-main-blok__input">

                                <Field name="name" placeholder="Your Name" validate={validateName} className={errors.name && touched.name ? "invalid" : ""}/>
                                
                                    <span className="line_one"></span>
                                    <span className="line_two"></span>
                                    {errors.name && touched.name && <p className='error'>{errors.name}</p>}
                                    <label>Your Name</label>
                                </div>

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

                                <div className="blok__terms__and__policy">
                                    <p>By proceeding, I agree with the <NavLink to="*" className="link__terms__and__policy">Terms of Service</NavLink> and <NavLink to="*" className="link__terms__and__policy">Privacy & Policy</NavLink></p>
                                </div>

                                <button type="submit" name = "button" className="form-main-blok__button">Sign in</button>
                            </Form>
                            )}
                            </Formik>

                               

                             <div className="sign__up__with__text">
                                    <p>Sign up with</p>
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

                            <div className="authorization">
                                <p>Already have an account? <NavLink to="/signIn">Log in</NavLink></p>
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

export default SignUp