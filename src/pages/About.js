import React from 'react'
import AboutImg from '../assets/about.jpg';
import '../styles/About.css' 

function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{backgroundImage : `url(${AboutImg})`}}>iglll</div>
      <div className='aboutBottom'>
        <h1>ABOUT US</h1>
        <div className='p'>Apart from our obviously mouthful of a name – it’s the mouthful of flavors we pack into every bite. With each bite a moment, and memory is automatically created at least for the time it takes to finish. Here, we find comfort in knowing our food brings you comfort – from the moment you walk in, to the moment you taste our fresh-from-scratch prepared food. And since everything is made-to-order it makes sense that we concentrate on more deliberate food than fast food. Although, we do promise it’s worth the wait.
        So, instead of giving you a long history lesson, we’ll leave you with this – It’s been 50 years since that day when we crafted (and perfected) our very meals. And since that day – we’ve only added to our list of accomplishments. But don’t just take our word for it – just ask our devoted fans. Like the ones that legit ones who can’t quit our homemade hot sauce, chips, salads among many other meals.
        <b>What will be your thing?</b></div>
      </div>
    </div>
  );
}

export default About
