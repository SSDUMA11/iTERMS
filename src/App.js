import {Suspense} from "react";

import Header from './components/header/Header';
// import Questions from './components/questions/Questions'
// import TextContext from './components/text-context';
// import Footer from './components/footer/Footer';
// import ResetYourPassword from './components/footer/Footer';
// import Slider from './components/slider/Slider';
// import Oops from './Pages/Oops/Oops';
// import SliderCustomers from './components/sliderCustomers/SliderCustomers';
// import MySwiper from './components/MySwiper';
// import SignIn from "./Pages/SignIn/SignIn";
// import PolicyDetails from './Pages/PolicyDetails/PolicyDetails';
// import TrustedProvisions from './components/TrustedProvisions/TrustedProvisions'
import './App.scss';

function App() {

 

  return (
    <Suspense fallback = {null}>
      
        <div className='wrapper' >
          <Header/>
          {/* <SignIn/> */}
          {/* <PolicyDetails/> */}
        </div>
    </Suspense>

  );
}
export default App;
