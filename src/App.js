import React, {Suspense, useState} from 'react';
import Header from './components/header/Header';
import './App.scss';

export const MyContext = React.createContext();

function App() {

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 769); ///the table when the screen width is less than 769px
 
  return (
    <Suspense fallback = {null}>
      <div className="wrapper">
        <MyContext.Provider value={[isSmallScreen, setIsSmallScreen]}>
          <Header/>
        </MyContext.Provider>
      </div>
    </Suspense>
  );
}
export default App;
