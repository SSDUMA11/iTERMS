import { useState } from 'react';
import './switch.scss';
import '../../fonts/fonts.scss';
import Switch from "react-switch";


const SwitchMonth = () => {

    const [checked, setChecked] = useState(false); ///switch

    const handleChange = nextChecked => {
        setChecked(nextChecked);
    };
    
  return (
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
  )
}

export default SwitchMonth