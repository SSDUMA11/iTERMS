import React from 'react';
import './PricingTable.scss';
import '../../fonts/fonts.scss';
///IMG
import doneG from './pictures/DoneG.svg'
import doneP from './pictures/DoneP.svg'
import creditCard from './pictures/creditCard.svg'

const PricingTable = () => {
  return (
    <div className='pricing__table'>
          <table className="table">
            <thead className='table__head'>
              <tr>
                <th className='credit__card'><img src={creditCard} alt='credit Card'/></th>
                <th className='pro'>
                  <div className='most__popular'><p>Most popular</p></div>
                  <div className='block__table'>
                    <span className='for__startups'>For startups</span>
                    <h3>Pro+</h3>
                    <p><sup>$</sup>1<sup>95</sup><span>/month</span></p>
                    <button>Choose Plan</button>
                  </div>
                </th>
                <th className='basic'>
                  <div className='block__table'>
                    <span className='for__businesses'>For businesses</span>
                    <h3>Basic</h3>
                    <p><sup>$</sup>0<span>/one-time</span></p>
                    <button>Continue Free</button>
                  </div>
                </th>
              </tr>
            </thead>

            <tbody className='table__body'>
              <tr>
                <td className='first__column item'>Content of Legal Policies</td>
                <td className='second__column white'></td>
                <td></td>
              </tr>
              <tr>
                <td className='first__column'>GDPR, CCPA, CalOPPA</td>
                <td className='second__column'><img src={doneG} alt='done'/></td>
                <td><img src={doneP} alt='done'/></td>
              </tr>
              <tr>
                <td className='first__column'>Any Remarketing Tools</td>
                <td className='second__column white'><img src={doneG} alt='done'/></td>
                <td><img src={doneP} alt='done'/></td>
              </tr>
              <tr>
                <td className='first__column'>Any Ads Tools</td>
                <td className='second__column'><img src={doneG} alt='done'/></td>
                <td><img src={doneP} alt='done'/></td>
              </tr>
              <tr>
                <td className='first__column'>Any Analytics Tools</td>
                <td className='second__column white'><img src={doneG} alt='done'/></td>
                <td><img src={doneP} alt='done'/></td>
              </tr>
              <tr>
                <td className='first__column'>Any Payment Processors</td>
                <td className='second__column'><img src={doneG} alt='done'/></td>
                <td><img src={doneP} alt='done'/></td>
              </tr>

              <tr>
                <td className='first__column item'>Integrate to Website</td>
                <td className='second__column white'></td>
              </tr>
              <tr>
                <td className='first__column'>Hosted Policies</td>
                <td className='second__column'><img src={doneG} alt='done'/></td>
                <td><span className='dash'></span></td>
              </tr>
              <tr>
                <td className='first__column'>Embed On Your Site</td>
                <td className='second__column white'><img src={doneG} alt='done'/></td>
                <td><span className='dash'></span></td>
              </tr>
              <tr>
                <td className='first__column'>Regular Doc Updates</td>
                <td className='second__column'><img src={doneG} alt='done'/></td>
                <td><span className='dash'></span></td>
              </tr>

              <tr>
                <td className='first__column item'>Customize & Download</td>
                <td className='second__column white'></td>
              </tr>
              <tr>
                <td className='first__column'>TXT FormatA</td>
                <td className='second__column'><img src={doneG} alt='done'/></td>
                <td><img src={doneP} alt='done'/></td>
              </tr>
              <tr>
                <td className='first__column'>HTML File (.html)</td>
                <td className='second__column white'><img src={doneG} alt='done'/></td>
                <td><span className='dash'></span></td>
              </tr>
              <tr>
                <td className='first__column'>DOCX File (.doc)</td>
                <td className='second__column'><img src={doneG} alt='done'/></td>
                <td><span className='dash'></span></td>
              </tr>
              <tr>
                <td className='first__column'>Unlimited downloads</td>
                <td className='second__column white'><img src={doneG} alt='done'/></td>
                <td><span className='dash'></span></td>
              </tr>
              <tr>
                <td className='first__column'>Custom Logo on Document</td>
                <td className='second__column'><img src={doneG} alt='done'/></td>
                <td><span className='dash'></span></td>
              </tr>
              <tr>
                <td className='first__column'>Custom Font on Document</td>
                <td className='second__column white'><img src={doneG} alt='done'/></td>
                <td><span className='dash'></span></td>
              </tr>
            </tbody>
          </table>
        </div>
        
    )
}

export default PricingTable