import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { FIRESTORE_DB } from '../../firebase_config/index';
import { collection, addDoc } from "firebase/firestore"; 

const MySwal = withReactContent(Swal);


const alertContent = () => {
  MySwal.fire({
    title: 'Congratulations!',
    text: 'Your message was successfully sent and will be back to you soon',
    icon: 'success',
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  name: '',
  email: '',
  number: '',
  subject: '',
  text: '',
};

const ContactForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE);
  const { register, handleSubmit, errors } = useForm();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    console.log(contact);
  };

  const onSubmit = async (e) => {
     try {
      const { name, email, number, subject, text } = contact;
      const payload = { name, email, number, subject, text };
      const contactFormCollection = collection(FIRESTORE_DB, 'contact_details');
      const docRef = await addDoc(contactFormCollection, payload);
      setContact(INITIAL_STATE);
      console.log('Document written with ID: ', docRef.id);
      alertContent();
      
    }catch (error) {
      console.log("Error here")
        console.error('Error adding document: ', error);
    }
  }

  return (
    <div className="contact-area pb-100">
      <div className="container">
        <div className="section-title">
          <span>Get in Touch</span>
          <h2>Ready to Get Started?</h2>
          <div className="bar"></div>
        </div>

        <div className="contact-form">
          <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="form-control"
                    value={contact.name}
                    onChange={handleChange}
                    ref={register({ required: true })}
                  />
                  <div className='invalid-feedback' style={{display: 'block'}}>
                    {errors.name && 'Name is required.'}
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="email"
                    placeholder="Your email address"
                    className="form-control"
                    value={contact.email}
                    onChange={handleChange}
                    ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                  />
                  <div className='invalid-feedback' style={{display: 'block'}}>
                    {errors.email && 'Email is required.'}
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="number"
                    placeholder="Your phone number"
                    className="form-control"
                    value={contact.number}
                    onChange={handleChange}
                    ref={register({ required: true })}
                  />
                  <div className='invalid-feedback' style={{display: 'block'}}>
                    {errors.number && 'Number is required.'}
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Your Subject"
                    className="form-control"
                    value={contact.subject}
                    onChange={handleChange}
                    ref={register({ required: true })}
                  />
                  <div className='invalid-feedback' style={{display: 'block'}}>
                    {errors.subject && 'Subject is required.'}
                  </div>
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <textarea
                    name="text"
                    cols="30"
                    rows="5"
                    placeholder="Write your message..."
                    className="form-control"
                    value={contact.text}
                    onChange={handleChange}
                    ref={register({ required: true })}
                  />
                  <div className='invalid-feedback' style={{display: 'block'}}>
                    {errors.text && 'Text body is required.'}
                  </div>
                </div>
              </div>

           

              <div className="col-lg-12 col-sm-12 text-center">
                <button type="submit" className="default-btn">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
