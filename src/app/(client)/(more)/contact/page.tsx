import ContactForm from '@/components/contact/contactform/ContactForm'
import Location from '@/components/contact/location/Location'
import Contact from '@/components/contact/ContactUs/Contact'
import React from 'react'

const ContactUs = () => {
  return (
    <div className='mt-25'>
      <Contact/>
      <Location/>
      <ContactForm/>
    </div>
  )
}

export default ContactUs