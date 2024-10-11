import React from 'react';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

// Hooks
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import useWindowSize from '../../hooks/useWindowSize';
import { Link } from 'gatsby';

// Components
const schema = yup.object({
  email: yup.string().email().required(),
  message: yup.string().min(1).max(5000).required(),
  lastName: yup.string().min(1).max(50).required(),
  firstName: yup.string().min(1).max(50).required(),
  phoneNumber: yup.string().required(),
  company: yup.string().min(1).max(50).required()
}).required();

const ContactForm = () => {
  const [submissionFailed, setSubmissionFailed] = useState(false);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [policyChecked, setPolicyChecked] = useState(false);
  const [policyDenied, setPolicyDenied] = useState(false);
  const { width } = useWindowSize();

  const { register, handleSubmit, reset, getValues, formState: { errors, isSubmitting, isValid, isDirty, isSubmitSuccessful } } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur"
  });

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const onSubmit = async (data) => {
    if (policyChecked) {
      const response = await fetch('/contact', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "Contact Form",
          ...data
        }),
      })

      if (response.ok) {
        setIsSubmitSuccess(true);
      } else {
        setSubmissionFailed(true);
      }
    } else {
      setPolicyDenied(true);
    }
  }

  // reset the form and add previously entered values
  const resetForm = (e) => {
    e.preventDefault();
    setIsSubmitSuccess(false);
    setSubmissionFailed(false);
    reset(getValues());
  }

  const handlePolicy = () => {
    setPolicyDenied(false);
    if (!policyChecked) {
      setPolicyChecked(true);
      return;
    }
    setPolicyChecked(false);
  }

  return (
    <div className='contact-form'>
      <div>
        <h3>All fields required</h3>
        <form action="/contact" name="Contact Form" method="POST" data-netlify="true">
          <div className='form-group'>
            <label htmlFor="first-name">First Name</label>
            <input
              id="first-name"
              {...register("firstName")}
              type="text"
            />
            {errors.firstName && <p className='validation-error'>first name is required</p>}
          </div>

          <div className='form-group'>
            <label htmlFor="last-name">Last Name</label>
            <input
              id="last-name"
              {...register("lastName")}
              type="text"
            />
            {errors.lastName && <p className='validation-error'>last name is required</p>}
          </div>

          <div className='form-group'>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              {...register("email")}
              type="email"
            />
            {errors.email && <p className='validation-error'>{errors.email?.message}</p>}
          </div>

          <div className='form-group'>
            <label htmlFor="phone-number">Phone Number</label>
            <input
              id="phone-number"
              type="tel"
              {...register("phoneNumber")}
            />
            {errors.phoneNumber && <p className='validation-error'>phone number is required</p>}
          </div>

          <div className='form-group'>
            <label htmlFor="company">Company</label>
            <input
              id="company"
              {...register("company")}
              type="text"
            />
            {errors.company && <p className='validation-error'>{errors.company?.message}</p>}
          </div>

          <div className='form-group'>
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              {...register("message")}
            />
            {errors.message && <p className='validation-error'>{errors.message?.message}</p>}
          </div>

          <div className='form-group checkbox' style={policyDenied ? { border: '2px solid red', padding: 2, borderRadius: 2 } : {}}>
            <label htmlFor='privacy-policy'>
              I understand and agree to the <Link to="/policy">terms of service</Link> and <Link to="/policy">privacy policy</Link>.
            </label>
            <input id='privacy-policy' type="checkbox" onChange={handlePolicy}></input>
          </div>

          <button className='btn-contact' onClick={handleSubmit(onSubmit)} type="submit">{isSubmitting ? "Loading..." : "Send Message"}</button>
        </form>
      </div>

      {isSubmitSuccess &&
        <div className='form-message'>
          <div>
            <h2>Thank you for the email!</h2 >
            <p>We will be in touch with you shortly.</p>
            <a href="/">Back Home</a>
          </div>
        </div>}

      {submissionFailed &&
        <div className='form-message'>
          <div>
            <h2>Oops!</h2 >
            <p>It seems there was a server-side error, we're working on it.</p>
            <p>Please try again soon.</p>
            <div onClick={resetForm}>
              {width < 481 ? <AnchorLink stripHash={true} className='btn-primary' to='/contact#form' >Okay</AnchorLink> : <AnchorLink stripHash={true} className='btn-primary' to='/contact#contact-form' >Okay</AnchorLink>}
            </div>
          </div>
        </div>}
    </div >
  )
}

export default ContactForm;