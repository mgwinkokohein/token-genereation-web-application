// SurveyForm.js
import React, { useState } from 'react';
import MyanmarPhoneNumber from 'myanmar-phonenumber';

const SurveyForm = ({ submitForm }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [designation, setDesignation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!MyanmarPhoneNumber.isValidMMPhoneNumber(phone)) {
      alert('Invalid phone number format please write 09.....');
      return;
    }
    const formData = { name, phone, email, company, designation };
    console.log(formData)
    const response = await fetch('http://localhost:3001/api/submit-survey', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    submitForm(data.token);
  };
// myanmarPhoneNumber.isValidMMPhoneNumber
  return (
      <div className="container" style={{marginTop:"50px"}}>
        <div className="card">
          <div className="card-header">
            <h5 className="text-center">Survey Form</h5>
          </div>
          
          <div className="card-body">
            
            <form onSubmit={handleSubmit} className="mx-auto col-6">
              <div className="form-group row">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group row">
                <label>Phone</label>
                <input
                  type="phone"
                  className="form-control"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="form-group row">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group row">
                <label>Company Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  required
                />
              </div>
              <div className="form-group row">
                <label>Designation</label>
                <input
                  type="textarea"
                  className="form-control"
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );

};

export default SurveyForm;
