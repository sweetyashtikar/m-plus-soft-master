import React from 'react';
import Marquee from 'react-fast-marquee';
import img1 from '../assets/images1/one.png';
import img2 from '../assets/images1/two.png';
import img3 from '../assets/images1/three.png';
import img4 from '../assets/images1/four.png';
import img5 from '../assets/images1/five.png';
import img6 from '../assets/images1/six.png';
import img7 from '../assets/images1/seven.png';
import img8 from '../assets/images1/eight.png';
import img9 from '../assets/images1/nine.png';
import img10 from '../assets/images1/ten.png';
import './Mark.css';

function Mark() {
  return (
    <div className="App">
      <div className="title">
        <h1>Our Technology Partner</h1>
      </div>

      <div>
        <Marquee direction="right" speed={100} delay={5}>
          <div className="image_wrapper">
            <img src={img1} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img2} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img3} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img4} alt="" />
          </div>
          <div>
            <img src={img5} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img6} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img7} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img8} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img9} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img10} alt="" />
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default Mark;
