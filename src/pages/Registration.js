import React from 'react';
import './Registration.css';

const Registration = () => {
  return (
    <div className='registration-form'>
      <div className='form-header'>
        <h2>Registration Form</h2>
      </div>
      <hr></hr>
      <div className='form-row-chart'>
        <div className='date'>
          <label>Date:</label>
          <input type='date' />
        </div>
        <div className='chart-no'>
          <label>Patient Chart No.:</label>
          <input type='text' />
        </div>
      </div>
      <p>Personal Information</p>
      <div className='form-row-name'>
        <div className='sname'>
          <label>Surname:</label>
          <input type='text' />
        </div>
        <div className='fname'>
          <label>First Name:</label>
          <input type='text' />
        </div>
        <div className='mname'>
          <label>Middle Name:</label>
          <input type='text' />
        </div>
      </div>

      <div className='form-row-diversity'>
        <div className='gender'>
          <label>Gender:</label>
          <select>
            <option>Select Option</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div className='civil-stat'>
          <label>Civil Status:</label>
          <select>
            <option>Select Option</option>
            <option>Single</option>
            <option>Married</option>
            <option>Widowed</option>
            <option>Divorced</option>
          </select>
        </div>   
      </div>
      <div className='form-row-age'>
        <div className='bday'>
          <label>Birthdate:</label>
          <input type='date' />
        </div>
        <div className='age'>
          <label>Age:</label>
          <input type='number' />
        </div>
      </div>
      <div className='form-row-loc'>
        <div className='address'>
          <label>Address:</label>
          <textarea></textarea>
        </div>
      </div>
      <div className='form-row-contact'>
        <div className='contact-no'>
          <label>Cellphone No.:</label>
          <input type='text' />
        </div>
      </div>
      <p>Contact in case of emergency</p>
      <div className='form-row-emergency'>
        <div className='person'>
          <label>Name:</label>
          <input type='text' />
        </div>
        <div className='person-no'>
          <label>Contact No.:</label>
          <input type='text' />
        </div>
        <div className='relation'>
          <label>Relationship:</label>
          <input type='text' />
        </div>
      </div>
      <hr />
      <div className='form-header'>
        <h2>Services Needed</h2>
      </div>
      <div className='services-container'>
        <div className='services-column'>
          <h3>PERIODONTICS:</h3>
          <input type='checkbox' id='scaling' />
          <label htmlFor='scaling'>Scaling (Linis)</label>
          <br />
          <input type='checkbox' id='extraction' />
          <label htmlFor='extraction'>Extraction (Bunot)</label>
          <br />
          <input type='checkbox' id='root-canal' />
          <label htmlFor='root-canal'>Root Canal</label>
        </div>
        <div className='services-column'>
          <h3>Denture:</h3>
          <input type='checkbox' id='complete-dentures' />
          <label htmlFor='complete-dentures'>Complete Dentures RPD</label>
          <br />
          <input type='checkbox' id='removable-partial-dentures' />
          <label htmlFor='removable-partial-dentures'>Removable Partial Dentures</label>
          <br />
          <input type='checkbox' id='tooth-removal' />
          <label htmlFor='tooth-removal'>Odontic or Wisdom Tooth Removal</label>
        </div>
      </div>
    </div>
  );
}

export default Registration;
