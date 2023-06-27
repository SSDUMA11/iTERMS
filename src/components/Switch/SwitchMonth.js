import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import './switch.scss';
import '../../fonts/fonts.scss';
import Switch from 'react-switch';


const SwitchMonth = () => {
  const { t } = useTranslation(['switch']);

  const [checked, setChecked] = useState(false); ///switch

  const handleChange = nextChecked => {
    setChecked(nextChecked);
  };
    
  return (
    <div className="switch">
      <span className={checked ? 'active' : 'inactive'}>{t ('firstMonth')}</span>
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
      <span className={!checked ? 'active' : 'inactive'}>{t ('followingMonths')}</span>
    </div>
  );
};

export default SwitchMonth;