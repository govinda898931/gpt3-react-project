import React from 'react';
import './possibility.css';
import possibilityImage from "../../assets/possibility.png"

function Possibility() {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request early access to get started</h4>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam mollitia facere impedit illum necessitatibus fugiat atque, ipsum provident aliquid doloribus soluta ipsam quo, nesciunt aliquam iusto culpa quis similique neque. Consequatur consequuntur esse accusantium sed libero reiciendis dolor asperiores deserunt sequi reprehenderit, ipsa corrupti quae inventore unde sint nesciunt repellendus.</p>
        <h4>Request early access to get started</h4>
      </div>
    </div>
  )
}

export default Possibility