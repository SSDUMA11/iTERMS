import React from 'react'
import './main.scss';
import '../../fonts/fonts.scss';


const Main = () => {
  return (
    <div className='__container'>
      <div className='switch'>
         <input className='checkbox' type='checked'/>
         <span className='slider'/>
      </div>
       
      
      {/* <label className='switch'>
        <input type="text" />
        <span className='slider'/>
      </label> */}
    </div>
  )
}

export default Main