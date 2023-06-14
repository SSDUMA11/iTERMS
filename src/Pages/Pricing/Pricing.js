import { useState, useEffect } from 'react';
import './pricing.scss';
import '../../fonts/fonts.scss';
///components
import PricingTable from '../../components/PricingTable/PricingTable'
import PricingTableMedia from '../../components/PricingTableMedia/PricingTableMedia'
import TrustedProvisions from '../../components/TrustedProvisions/TrustedProvisions';
import Questions from '../../components/questions/Questions';
import Footer from '../../components/footer/Footer';
import SwitchMonth from '../../components/Switch/SwitchMonth'

const Pricing = () => {

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 570); ///the table when the screen width is less than 570px

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 570);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div>
      <main className='pricing__page'>
        <div className='pricing__container'>
          <div className='pricing__block__title'>
            <p className='pricing__disclaimer'>flexible pricing</p>
            <h1 className='pricing__title'>Simple, transparent Pricing</h1>
            <p className='pricing__text'>No contracts. No surprise fees.</p>
          </div>
          <SwitchMonth/>
          {isSmallScreen ? <PricingTableMedia /> : <PricingTable />}
        </div>
      </main>

      <TrustedProvisions/>
      <Questions/>
      <Footer/>
      
    </div>
  )
}

export default Pricing