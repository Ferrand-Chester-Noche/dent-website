import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className='services-content'>
      <div className='buttons-container'>
        <button className="patientBtn">New Patient</button>
        <button className="patientBtn">Returning Patient</button>
      </div>
      <div className='services-pricelist'>
        <div className='title-div'>
          <p className='services-title'>Services</p>
        </div>
        <hr className='title-hr' />
        <div className='table'>
          <p>Periodontics</p>
          <div className='row-head'>
            <div className='column-head'>Clinical Service</div>
            <div className='column-head'>Price PHP</div>
          </div>
          <div className='row'>
            <div className='column'>Scaling and Polishing</div>
            <div className='column'>45</div>
          </div>
          <div className='row'>
            <div className='column'>Periodontal Theraphy</div>
            <div className='column'>225</div>
          </div>
          <div className='row'>
            <div className='column'>Perio Surgery</div>
            <div className='column'>300</div>
          </div>
          <div className='row'>
            <div className='column'>Root Planing</div>
            <div className='column'>225</div>
          </div>

          <p>Restorative Dentistry</p>
          <div className='row-head'>
            <div className='column-head'>Clinical Service</div>
            <div className='column-head'>Price PHP</div>
          </div>
          <div className='row'>
            <div className='column'>Amalgam Restoration</div>
            <div className='column'>60</div>
          </div>
          <div className='row'>
            <div className='column'>Posterior Composite</div>
            <div className='column'>190</div>
          </div>
          <div className='row'>
            <div className='column'>Class IV</div>
            <div className='column'>150</div>
          </div>
          <div className='row'>
            <div className='column'>Class III/V</div>
            <div className='column'>100</div>
          </div>
          <div className='row'>
            <div className='column'>Cavity Base</div>
            <div className='column'>50</div>
          </div>
          <div className='row'>
            <div className='column'>Cavity Liner</div>
            <div className='column'>15</div>
          </div>
          
          <p>Prosthodontics</p>
          <div className='row-head'>
            <div className='column-head'>Clinical Service</div>
            <div className='column-head'>Price PHP</div>
          </div>
          <div className='row'>
            <div className='column'>Single Crown</div>
            <div className='column'>225+lab</div>
          </div>
          <div className='row'>
            <div className='column'>Fix Bridge</div>
            <div className='column'>670+lab</div>
          </div>
          <div className='row'>
            <div className='column'>Complete Dentures</div>
            <div className='column'>930+lab</div>
          </div>
          <div className='row'>
            <div className='column'>Single Complete Denture</div>
            <div className='column'>465</div>
          </div>
          <div className='row'>
            <div className='column'>Removable Partial Denture (RPD)</div>
            <div className='column'>480+lab</div>
          </div>
          <div className='row'>
            <div className='column'>Rpd - Rpd</div>
            <div className='column'>960+lab</div>
          </div>
          
          <p>Pedodontics</p>
          <div className='row-head'>
            <div className='column-head'>Clinical Service</div>
            <div className='column-head'>Price PHP</div>
          </div>
          <div className='row'>
            <div className='column'>Topical Flouride Application</div>
            <div className='column'>130</div>
          </div>
          <div className='row'>
            <div className='column'>Pit and Fissure Sealant</div>
            <div className='column'>60</div>
          </div>
          <div className='row'>
            <div className='column'>Class I</div>
            <div className='column'>70</div>
          </div>
          <div className='row'>
            <div className='column'>Class III/IV</div>
            <div className='column'>70</div>
          </div>
          <div className='row'>
            <div className='column'>Build up</div>
            <div className='column'>45</div>
          </div>
          <div className='row'>
            <div className='column'>Pulpectomy/pulpotomy</div>
            <div className='column'>45</div>
          </div>
          <div className='row'>
            <div className='column'>Stainless Steel Crown</div>
            <div className='column'>110</div>
          </div>
          <div className='row'>
            <div className='column'>Strip off Crown</div>
            <div className='column'>110</div>
          </div>
          <div className='row'>
            <div className='column'>Band and Loop</div>
            <div className='column'>110</div>
          </div>
          <div className='row'>
            <div className='column'>Nance's Lingual Holding Arch</div>
            <div className='column'>165</div>
          </div>
          <div className='row'>
            <div className='column'>Saddle Space Maintainer</div>
            <div className='column'>75</div>
          </div>
          <div className='row'>
            <div className='column'>Zinc Oxide Eugenol</div>
            <div className='column'>30</div>
          </div>
          
          <p>Endodontics</p>
          <div className='row-head'>
            <div className='column-head'>Clinical Service</div>
            <div className='column-head'>Price PHP</div>
          </div>
          <div className='row'>
            <div className='column'>Root Canal Treatment Anterior</div>
            <div className='column'>225</div>
          </div>
          <div className='row'>
            <div className='column'>Root Canal Treatment Posterior</div>
            <div className='column'>335</div>
          </div>

          <p>Oral Surgery</p>
          <div className='row-head'>
            <div className='column-head'>Clinical Service</div>
            <div className='column-head'>Price PHP</div>
          </div>
          <div className='row'>
            <div className='column'>Regular Extraction</div>
            <div className='column'>45</div>
          </div>
          <div className='row'>
            <div className='column'>Complicated Extraction</div>
            <div className='column'>300</div>
          </div>
          <div className='row'>
            <div className='column'>Special Case</div>
            <div className='column'>150</div>
          </div>
          <div className='row'>
            <div className='column'>X ray</div>
            <div className='column'>15</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services;
