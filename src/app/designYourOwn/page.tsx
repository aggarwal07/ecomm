import ContactUs from '@/components/contact/ContactUs'
import Polaroid from '@/components/designing/Polaroid'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
       <div>
        <Navbar />
      </div>
      <div>
        <Polaroid/>
      </div>
      <div>
        <ContactUs/>
      </div>
    </div>
  )
}

export default page
