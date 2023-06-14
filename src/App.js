import {Suspense} from "react";
import Header from './components/header/Header';
import './App.scss';

function App() {

 

  return (
    <Suspense fallback = {null}>
      <div className='wrapper' >
        <Header/>
       </div>
    </Suspense>
  );
}
export default App;
