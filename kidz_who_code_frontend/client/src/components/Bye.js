import React from 'react';
import Arrow from './Arrow';
import Alien from './Alien';
import SpeechBubble from './SpeechBubble';
import LinkImage from './LinkImage';
import codeclan from './public/codeclan-logo.png';
import Certificate from "./public/Certificate.png";
// import './Bye.css'

const Bye = () => {

  // const wellDone = 'Well Done! You\'re now a Junior Developer!';
  // const signUp = 'You\'re ready for your next challenge';
  //
  // const bubbleContents = [wellDone, signUp];

  return (
    <section id="bye" className="byepage">
      <header>
        <Arrow direction='upArrow' link='Quiz' />
      </header>
      <Alien floatStyle="float-none" class='alienpic'/>

      {/* <section className='column' style={{'alignSelf': 'center'}}>
        <SpeechBubble paras={bubbleContents} width='300px'/> */}
        {/* <LinkImage
          href="https://codeclan.com/"
          img={codeclan}
          alt="Codeclan Logo"
          width='400px'
        /> */}
      {/* </section> */}
      <Arrow direction="rightArrow" link='Intro' />
    </section>
  )
}

export default Bye;
