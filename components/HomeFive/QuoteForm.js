import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import baseUrl from '../../utils/baseUrl';

const alertContent = () => {
    MySwal.fire({
        title: 'Congratulations!',
        text: 'Your message was successfully send and will back to you soon',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

// Form initial state
const INITIAL_STATE = {
    name: "",
    email: "",
    number: "",
    subject: "",
    text: ""
};

const QuoteForm = () => {
    const [contact, setContact] = useState(INITIAL_STATE);
    const { register, handleSubmit, errors } = useForm();

    const handleChange = e => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
        console.log(contact)
    }

    const onSubmit = async e => {
        // e.preventDefault();
        try {
            const url = `${baseUrl}/api/contact`;
            const { name, email, number, subject, text } = contact;
            const payload = { name, email, number, subject, text };
            await axios.post(url, payload);
            console.log(url);
            setContact(INITIAL_STATE);
            alertContent();
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="quote-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="quote-form">
                            <div className="content">
                                <h3>Get A free Quote Now</h3>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)}>
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
                    
                                <div className="quote-btn">
                                    <button type="submit" className="default-btn">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="quote-image">
                            <img src="/images/quote/quote-1.png" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuoteForm;