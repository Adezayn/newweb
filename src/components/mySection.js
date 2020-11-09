import React from 'react';
import {Slider, Slide, Caption} from 'react-materialize';

const MySection = () => {
    return (
        <Slider
  fullscreen={false}
  options={{
    duration: 500,
    height: 600,
    indicators: false,
    interval: 6000
  }}
>
  <Slide image={<img alt="" src="/Web.jpeg"/>}>
    <Caption placement="center">
      <h3>
        Hello, I'm Dolapo Adebanjo
      </h3>
      <h5 className="light grey-text text-lighten-3">
        I'm a Web Developer.
      </h5>
    </Caption>
  </Slide>
<Slide image={<img alt="" src="/slide3.webp" /> }>
    <Caption placement="left">
      <h3>
        Dolapo Adebanjo
      </h3>
      <h5 className="light grey-text text-lighten-3">
        I'm a Learner     
         </h5>
    </Caption>
  </Slide>
  <Slide image={<img alt="" src="/healthcare.jpg"/>}>
    <Caption placement="right">
    
      <h3>
       Dolapo Adebanjo
      </h3>
      <h5 className="light grey-text text-lighten-3">
       I'm an aspiring Social Entrepreneur
      
      </h5>
      
    </Caption>
  </Slide>
  <Slide image={<img alt="" src="/my world.jpg"/>}>
    <Caption placement="center">
      <h3>Welcome to my Website
      </h3>
      <h5 className="light grey-text text-lighten-3">
        I'm excited to share my world with you.
      </h5>
    </Caption>
  </Slide>
</Slider>
    )
}

export default MySection;