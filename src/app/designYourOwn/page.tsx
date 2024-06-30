import ContactUs from '@/components/actionButton/CartActionButton'
import DesignYourOwn from '@/components/designing/DesignYourOwn'
import Footer from '@/components/footer/Footer'

import Navbar from '@/components/navbar/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
       <div>
        <Navbar />
      </div>
      <div>
        <DesignYourOwn/>
      </div>
      <div>
        <ContactUs/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default page
