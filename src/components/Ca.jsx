import React, { useState } from "react";
import "./Ca.css";
import qrCode from '../assets/qr-code.jpg';

function Ca() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    collegeName: "",
    collegeCity: "",
    upi: "",
    events: [],
    drama: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [referralCode, setReferralCode] = useState("");

  const SHEETDB_URL1 = "https://sheetdb.io/api/v1/e604n6fpmqx8h";

  const eventOptions = [
    "Debate",
    "Dosthana",
    "Drama",
    "Adzap",
    "Puzzle",
    "Quiz",
    "Jam",
    "Uno minuto",
    "Shipwreck",
    "Poem and Microtale",
  ];

  // Generate unique referral code
  const generateReferralCode = async () => {
    let code;
    let exists = true;
    while (exists) {
      code = "CA" + Math.floor(100000 + Math.random() * 900000);
      const res = await fetch(`${SHEETDB_URL1}/search?referralCode=${code}`);
      const data = await res.json();
      exists = data.length > 0;
    }
    return code;
  };

  // Input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Event checkbox toggle
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    let updatedEvents = [...formData.events];
    if (checked) {
      updatedEvents.push(value);
    } else {
      updatedEvents = updatedEvents.filter((event) => event !== value);
    }
    setFormData({ ...formData, events: updatedEvents });
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const code = await generateReferralCode();
    setReferralCode(code);

    const payload = {
      data: [
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          whatsapp: formData.whatsapp,
          collegeName: formData.collegeName,
          collegeCity: formData.collegeCity,
          upi: formData.upi,
          events: formData.events.join(", "),
          drama: formData.drama,
          referralCode: code,
        },
      ],
    };

    try {
      const response = await fetch(SHEETDB_URL1, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Error submitting form. Try again!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting form. Try again!");
    }
  };

  return (
    <div className="ca-container">
      <br />
      <br />
      <br />
      <div className="notice">
        On-spot registration will be available on Saturday morning for Rs. 220.<br/><br/>
        (if your referral code is used by 9 or more during registration you will
        get 100rs refund from your registration payment )
      </div>

      {!submitted ? (
        <div className="ca-form-container">
          <h2 className="form-title">
            Referral Code Generation and <br /> Registration
          </h2>

          <form className="ca-form" onSubmit={handleSubmit}>
            {/* Name & Email */}
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Name *"
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Id *"
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone & WhatsApp */}
            <div className="form-row">
              <input
                type="text"
                name="phone"
                placeholder="Phone No *"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="whatsapp"
                placeholder="Whatsapp No *"
                onChange={handleChange}
                required
              />
            </div>

            {/* College & City */}
            <div className="form-row">
              <input
                type="text"
                name="collegeName"
                placeholder="College Name *"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="collegeCity"
                placeholder="College City *"
                onChange={handleChange}
                required
              />
            </div>

            {/* Events Section */}
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

            {/* Drama Section */}
            <div className="drama-note">
              Are you participating in Drama?*
              <span>
                <strong>NOTE:</strong> Select YES only if you are the Drama team
                lead, team members can answer NO.
              </span>
            </div>
            <select
              name="drama"
              value={formData.drama}
              onChange={handleChange}
              className="drama-select"
              required
            >
              <option value="" disabled>
                Select
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>

            {/* Payment */}
            <div className="qr-section">
              <p>Scan Here to Pay<br/>(any queries contact:+919123576842)</p>
              <div className="qr-placeholder"><img src={qrCode} alt="QR Code" /></div>
            </div>

            <input
              type="text"
              name="upi"
              placeholder="UPI Transaction Id* (Eg: 123AXXXXXX5678)"
              className="upi-field"
              onChange={handleChange}
              required
            />

            {/* Submit */}
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      ) : (
        <div className="success-box">
          <h2>🎉 Registration Successful!</h2>
          <p>Your unique referral code is:</p>
          <h3 className="referral-code">{referralCode}</h3>
          <p>
            Share this with friends — when they register using your code, you
            get points!
          </p>
        </div>
      )}
    </div>
  );
}

export default Ca;
