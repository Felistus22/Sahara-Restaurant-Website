import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <WhatsAppIcon />
        <TwitterIcon />
        <InstagramIcon />
        <LinkedInIcon />
      </div>
      <p>@copy 2023 Sahara Restaurant</p>
    </div>
  )
}

export default Footer
