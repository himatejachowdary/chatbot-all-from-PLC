import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container container py-5">
      <h2 className="text-center" data-aos="fade-up">Contact Us</h2>
      <p className="text-center" data-aos="fade-up" data-aos-delay="200">
        Have any questions? Feel free to reach out!
      </p>
      <div className="row justify-content-center">
        <div className="col-md-6" data-aos="fade-up" data-aos-delay="400">
          <form onSubmit={handleSubmit} className="p-4 border rounded bg-light shadow">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
