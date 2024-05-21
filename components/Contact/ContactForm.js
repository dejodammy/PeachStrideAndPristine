import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

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

const INITIAL_STATE = {
  name: '',
  email: '',
  number: '',
  subject: '',
  text: '',
};

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: INITIAL_STATE,
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch('https://1lw5648921.execute-api.us-east-1.amazonaws.com/default/ContactPeach', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alertContent();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error handling form submission: ', error);
      MySwal.fire({
        title: 'Error!',
        text: 'There was an error sending your message. Please try again.',
        icon: 'error',
        showConfirmButton: true,
      });
    }
  };

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
                    {...register('name', { required: true })}
                  />
                  {errors.name && <div className="invalid-feedback" style={{ display: 'block' }}>This field is required</div>}
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="email"
                    placeholder="Your email address"
                    className="form-control"
                    {...register('email', { required: true })}
                  />
                  {errors.email && <div className="invalid-feedback" style={{ display: 'block' }}>This field is required</div>}
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="number"
                    placeholder="Your phone number"
                    className="form-control"
                    {...register('number')}
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Your Subject"
                    className="form-control"
                    {...register('subject', { required: true })}
                  />
                  {errors.subject && <div className="invalid-feedback" style={{ display: 'block' }}>This field is required</div>}
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
                    {...register('text', { required: true })}
                  />
                  {errors.text && <div className="invalid-feedback" style={{ display: 'block' }}>This field is required</div>}
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
