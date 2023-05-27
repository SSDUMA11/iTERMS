import { useState, useEffect } from 'react';
import './pricing.scss';
import '../../fonts/fonts.scss';
import Switch from "react-switch";
///components
import PricingTable from '../../components/PricingTable/PricingTable'
import PricingTableMedia from '../../components/PricingTableMedia/PricingTableMedia'
import TrustedProvisions from '../../components/TrustedProvisions/TrustedProvisions';
import Questions from '../../components/questions/Questions';
import BlockFooter from '../../components/BlockFooter/BlockFooter'
import Footer from '../../components/footer/Footer';

const Pricing = () => {

  const [checked, setChecked] = useState(false); ///switch
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
  
  const handleChange = nextChecked => {
    setChecked(nextChecked);
  };

  return (
    <div>
      <main className='pricing__page'>
        <div className='pricing__container'>
          <div className='pricing__block__title'>
            <p className='pricing__disclaimer'>flexible pricing</p>
            <h1 className='pricing__title'>Simple, transparent Pricing</h1>
            <p className='pricing__text'>No contracts. No surprise fees.</p>
          </div>
          <div className="switch">
            <span className={checked ? 'active' : 'inactive'}>First month</span>
              <Switch
                onColor="#8770FF"
                offColor="#8770FF"
                uncheckedIcon={false}
                checkedIcon={false}
                height={24}
                width={35}
                handleDiameter={16}
                onHandleColor="#FFFFFF"
                onChange={handleChange}
                checked={checked}
                className="switch__month"
              />
            <span className={!checked ? 'active' : 'inactive'}>Following months</span>
          </div>

          {isSmallScreen ? <PricingTableMedia /> : <PricingTable />}
        </div>
      </main>

      <TrustedProvisions/>
      <Questions/>
      <BlockFooter/>
      <Footer/>
      
    </div>
  )
}

export default Pricing