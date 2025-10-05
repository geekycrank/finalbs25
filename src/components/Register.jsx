import React, { useState, useEffect } from 'react';
import './Register.css';
import qrCode from '../assets/qr-code.jpg';

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  whatsapp: '',
  college: '',
  place: '',
  events: [],
  drama: '',
  transactionId: '',
  referralCode: ''
};

const eventOptions = [
  "Debate", "Dosthana", "Drama", "Adzap", "Puzzle",
  "Quiz", "Jam", "Uno minuto", "Shipwreck", "Poem and Microtale"
];

const SHEETDB_URL = "https://sheetdb.io/api/v1/xdeb6icxog3e9";
// Assuming SHEETDB_URL1 is a sheet containing all valid referral codes
const SHEETDB_URL1 = "https://sheetdb.io/api/v1/e604n6fpmqx8h";

function Registration() {
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [validReferralCodes, setValidReferralCodes] = useState([]); // ✅ dynamic referral codes

  // Fetch valid referral codes on component mount
  useEffect(() => {
    const fetchReferralCodes = async () => {
      try {
        // Fetch all records from the referral code sheet (SHEETDB_URL1)
        const res = await fetch(SHEETDB_URL1);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        
        // Assuming the referral codes are in a column named 'referralCode'
        const codes = data.map(item => item.referralCode).filter(code => code); // Ensure code exists
        setValidReferralCodes(codes);
      } catch (err) {
        console.error("Error fetching referral codes", err);
        // Optionally, alert the user or set a state to show an error message
      }
    };
    fetchReferralCodes();
  }, []); // Run only once on mount

  // ---

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    let updatedEvents = [...formData.events];
    if (checked) {
      updatedEvents.push(value);
    } else {
      updatedEvents = updatedEvents.filter(event => event !== value);
    }
    setFormData({ ...formData, events: updatedEvents });
  };

  const validateForm = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const phonePattern = /^\d{10}$/;
    
    if (!formData.name) return "Please enter your name.";
    if (!formData.email || !emailPattern.test(formData.email)) return "Please enter a valid email address.";
    // Use the pattern for better number validation
    if (!formData.phone || !phonePattern.test(formData.phone)) return "Please enter a valid 10-digit phone number.";
    if (!formData.whatsapp || !phonePattern.test(formData.whatsapp)) return "Please enter a valid 10-digit WhatsApp number.";
    if (!formData.college) return "Please enter your college name.";
    if (!formData.place) return "Please enter your college city.";
    if (!formData.events.length) return "Please select at least one event.";
    if (!formData.drama) return "Please select your participation in drama.";
    if (!formData.transactionId) return "Please enter your transaction ID.";

    // ✅ Dynamic referral validation (case-insensitive check for better UX)
    if (formData.referralCode) {
      const enteredCode = formData.referralCode.trim();
      if (!validReferralCodes.map(c => c.toLowerCase()).includes(enteredCode.toLowerCase())) {
        return "Invalid referral code. Please check again.";
      }
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      alert(error);
      return;
    }
    setLoading(true);
    
    let dataWithTimestamp = {
      ...formData,
      timestamp: new Date().toISOString()
    };

    try {
      // ---
      // ## Fix 2: Corrected referral tracking logic
      if (formData.referralCode) {
        const enteredCode = formData.referralCode.trim();
        try {
          // Use the correct SheetDB search format: /search/COLUMN_NAME/VALUE
          // Search the main registration sheet (SHEETDB_URL) to count *actual usage*
          const searchUrl = `${SHEETDB_URL}/search/referralCode/${enteredCode}`;
          const res = await fetch(searchUrl);
          if (!res.ok) throw new Error(`HTTP search error! status: ${res.status}`);
          
          const usageData = await res.json();
          // The count of existing records that used this code
          const usageCount = Array.isArray(usageData) ? usageData.length : 0;
          
          // Add usage count (including the current submission) to the data
          dataWithTimestamp.referralUsageCount = usageCount + 1;
        } catch (err) {
          console.error("Error tracking referral usage count", err);
          // Don't block submission, but log the error.
        }
      }
      // ---

      // Final submission to the main sheet
      await fetch(SHEETDB_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: dataWithTimestamp })
      });
      setSubmitted(true);
      setFormData(initialFormData); // Clear form on success
      
    } catch (err) {
      console.error("Submission error", err);
      alert("Something went wrong with the submission. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="registration-container">
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <h2>Submission Successful!</h2>
        <h1>Your registration has been received.</h1>
        {formData.referralCode && (
          <p>Referral Code Used: <strong>{formData.referralCode}</strong></p>
        )}
      </div>
    );
  }

  return (
    <div>
      <br/><br/><br/>
      <div className="onspot-banner">
        On-spot registration will be available on Saturday morning for Rs. 220.
        <br/><br/>
        <h4>(if you plan on referring others use referral code page to register)</h4>

      </div>
      <div className="registration-container">
        <h2>Event Registration</h2>
        <form onSubmit={handleSubmit}>
          {/* Name & Email */}
          <div className="form-row">
            <div className="form-group">
              <label>Name *</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Email Id *</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
          </div>

          {/* Phone & Whatsapp */}
          <div className="form-row">
            <div className="form-group">
              <label>Phone No *</label>
              <input type="number" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Whatsapp No *</label>
              <input type="number" name="whatsapp" value={formData.whatsapp} onChange={handleChange} required />
            </div>
          </div>

          {/* College & Place */}
          <div className="form-row">
            <div className="form-group">
              <label>College Name *</label>
              <input type="text" name="college" value={formData.college} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>College City *</label>
              <input type="text" name="place" value={formData.place} onChange={handleChange} required />
            </div>
          </div>

          {/* Events */}
         <label className="events-title">Events Participating *<br/><p>(click on the on the box to select events)</p></label>
            <div className="events-section">
              {eventOptions.map((event) => (
                <label key={event}>
                  <input
                    type="checkbox"
                    value={event}
                    checked={formData.events.includes(event)}
                    onChange={handleCheckboxChange}
                  />
                  <span>{event}</span>
                </label>
              ))}
            </div>

          {/* Drama Participation */}
          <div className="note">
            Are you participating in Drama?*<br />
            <span>
              <strong>**NOTE :</strong> Select YES only if you are the Drama team lead, team members can answer NO.(other details can be shared to incharge )
            </span>
          </div>
          <select name="drama" value={formData.drama} onChange={handleChange} required>
            <option value="" disabled>Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          {/* Referral Code (Optional) */}
          <div className="form-group">
            <label>Referral Code (Optional)</label>
            <input
              type="text"
              name="referralCode"
              value={formData.referralCode}
              onChange={handleChange}
              placeholder="Enter referral code if any"
            />
          </div>

          {/* QR + Transaction ID */}
          <div className="qr-section">
            <h4>Scan Here to Pay<br />(any queries contact:+919123576842)</h4>
            <div className="qr-box"><img src={qrCode} alt="QR Code" /></div>
          </div>
          <div className="transaction-label">
            UPI Transaction Id* ( Eg: 1234XXXXXX5678, not abcd@okxyzbank )
          </div>
          <input
            type="text"
            name="transactionId"
            value={formData.transactionId}
            onChange={handleChange}
            required
          />

          {/* Submit */}
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registration;