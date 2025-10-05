// import React, { useState } from 'react';
// import axios from 'axios';
// import Register from './Register.jsx';

// function DramaForm(props) {
//   const [formData, setFormData] = useState({
//     name: '',
//     Lead_name: '',
//     Lead_bs_id: '',
//     Lead_contact: '',
//     alternate_contact: '',
//     members_bs_id: ''
//   });

//   const [submit, setSubmit] = useState(false);

// /*************  ✨ Windsurf Command ⭐  *************/
// /**
//  * Handles input change events by updating the formData state
//  * with the name and value of the changed input field.
//  * @param {object} e - The event object from the input change event.
//  */
// /*******  8d277015-a149-453f-899f-3e5d320b1607  *******/
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     console.log(value);
//   };


//   const validateForm = () => {
//     const phonePattern = /^[0-9]{10}$/;
  
//     if (!formData.name) {
//       alert("Please enter your college name.");
//       return false;
//     }
//     if (!formData.Lead_name) {
//       alert("Please enter the team Leader's name.");
//       return false;
//     }
//     if (!formData.Lead_contact || formData.Lead_contact.toString().length !=10) {
//       alert("Please enter a valid 10-digit Lead Contact number.");
//       return false;
//     }
//     if (!formData.alternate_contact || formData.alternate_contact.toString().length !=10) {
//       alert("Please enter a valid 10-digit Alternate Contact number.");
//       return false;
//     }
//     if (!formData.Lead_bs_id) {
//       alert("Please enter the Lead Transaction ID.");
//       return false;
//     }
//     if (!formData.members_bs_id) {
//       alert("Please enter the Members' Transaction ID.");
//       return false;
//     }
  
//     return true;
//   };
  

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     if (
//       !formData.name ||
//       !formData.Lead_name ||
//       !formData.Lead_bs_id ||
//       !formData.Lead_contact ||
//       !formData.alternate_contact ||
//       !formData.members_bs_id
//     ) {
//       alert('Please fill out all fields.');
//       return;
//     }

//     console.log(formData);

//     // https://docs.google.com/forms/d/e/1FAIpQLSfhc7Q4RHqz8nT6f6tB13Ze4mNQom9MLS74PGnuNCoJzU2u5A/viewform?usp=pp_url&entry.1530474578=College&entry.1275313005=Lead+Name&entry.1826717709=TransactioId&entry.2143860045=LeadContact&entry.73265332=Alternate+contact&entry.1908464661=Members+Id

//     const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfhc7Q4RHqz8nT6f6tB13Ze4mNQom9MLS74PGnuNCoJzU2u5A/formResponse';
//     const formPayload = new URLSearchParams();

//     formPayload.append('entry.1530474578', formData.name);
//     formPayload.append('entry.1275313005', formData.Lead_name);
//     formPayload.append('entry.1826717709', formData.Lead_bs_id);
//     formPayload.append('entry.2143860045', formData.Lead_contact);
//     formPayload.append('entry.73265332', formData.alternate_contact);
//     formPayload.append('entry.1908464661', formData.members_bs_id);

//     try {
//       const response = await axios.post(googleFormUrl, formPayload, {
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//       });
//     console.log(response);
//     } catch (error) {
//       console.error('Form submission error:', error);
//       // alert('Form submission failed!');
//     }
//     alert('Form submitted successfully!');
//     setSubmit(true);
//   };
//   return (
//     <>
//       {!submit ? (
//         <form className="form">
//           <div className="heading1">DRAMA REGISTRATION</div>

//           <div className="topFrame">
//            <div className='Notee'>Note: Only one registration is required per drama group, to be completed by the lead participant.</div>
//             <div className="Name">
//               <div className="field">College Name*</div>
//               <input
//                 type="text"
//                 name="name"
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="Name">
//               <div className="field">Lead Name*</div>
//               <input
//                 type="text"
//                 name="Lead_name"
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="Name">
//               <div className="field">Lead Transaction Id*</div>
//               <input
//                 type="number"
//                 name="Lead_bs_id"
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="Name">
//               <div className="field">Lead Contact*</div>
//               <input
//                 type="number"
//                 name="Lead_contact"
//                 value={formData.Lead_contact}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="Name">
//               <div className="field">Alternate Contact*</div>
//               <input
//                 type="number"
//                 name="alternate_contact"
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="Name">
//               <div className="field">Members' Transaction Id*</div>
//               <textarea
//                 name="members_bs_id"
//                 rows="4"
//                 cols="40"
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>

//           <button className="submitButton" type="submit" onClick={handleSubmit}>Submit</button>
//         </form>
//       ) : (
//         <Register />
//       )}
//     </>
//   );
// }

// export default DramaForm;
