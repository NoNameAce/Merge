import React, { useState } from 'react'
import icon9 from './images/icon (9).png'
import img41 from './images/Image (41).png'
import el28 from './images/Ellipse 28.png'
import el29 from './images/Ellipse 29 (1).png'
import el1 from './images/Ellipse 29.png'
import el30 from './images/Ellipse 30.png'
import el31 from './images/Ellipse 31.png'
import vec from './images/Vector (10).png'
import eth from './images/fa6-brands_ethereum.png'
import group from './images/Group 127.png'
import frame from './images/Frame 115.png'
import frame2 from './images/Frame 117.png'
import rec283 from './images/Rectangle 283.png'
import rec284 from './images/Rectangle 283 (1).png'
import('./fourth.css')

export function ProDeteil() {
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="box1">
      <div className="header-box1">
        <img src={icon9} alt="Icon" />
        <b>Product Detail</b>
      </div>

      <div className="div-in-box1">
        <img className="img-1" src={img41} alt="Project Sun-Glass" />
        <div className="div-2">
          <h2>Project Sun-Glass</h2>
          <p>
            A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits.
          </p>
          <div className="div-users">
            <div className="user">
              <img src={el28} alt="Created by Perperzon" />
              <div>
                <p>Created by</p>
                <b>Perperzon</b>
              </div>
            </div>
            <div className="user">
              <img src={el29} alt="Owned by Videz" />
              <div>
                <p>Owned by</p>
                <b>Videz</b>
              </div>
            </div>
          </div>

          <div className="div3-in-box1">
            <div>
              <p>Current Bid</p>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={eth} alt="Ethereum" />
                <h3>1.75</h3>
              </div>
            </div>
            <div className="right-div">
              <p>End in</p>
              <b>Jun 17, 2023 at 05:08</b>
            </div>
          </div>
          <button onClick={() => setModal(true)} className="button1">
            <img src={vec} alt="Place bid icon" />
            Place Bid
          </button>
        </div>
      </div>

      {modal && (
        <div className='bg-op'>
          <div className="modal">
            <b>History of Bid</b>
            <p style={{ marginBottom: '30px' }}>Oct 14, 2022</p>
            <div className='mini-box'>
              <img src={el1} alt="" />
              <div>
                <b>Repo</b>
                <p>May 17, 2022 at 12:08</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={eth} alt="Ethereum" />
                <h3>1.75</h3>
              </div>
            </div>
            <div className='mini-box'>
              <img src={el30} alt="" />
              <div>
                <b>Repo</b>
                <p>May 17, 2022 at 12:08</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={eth} alt="Ethereum" />
                <h3>1.75</h3>
              </div>
            </div>
            <div className='mini-box'>
              <img src={el31} alt="" />
              <div>
                <b>Repo</b>
                <p>May 17, 2022 at 12:08</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={eth} alt="Ethereum" />
                <h3>1.75</h3>
              </div>
            </div>

            <b >Your Bid</b>
            <form action="">
              <select name="" id=""><option value="">ETH</option></select>
              <input type="text" />
            </form>

            <button onClick={() => setModal(false)} className="button1">
              <img src={vec} alt="Place bid icon" />
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}



export function FromCreator() {
  return <div className='box-2'>
    <h2>From Creator</h2>
    <div className='cards-box'>
      <Cards src={rec283} />
      <Cards src={rec284} />
      <Cards src={img41} />
      <Cards src={rec283} />
      <Cards src={rec284} />
    </div>
  </div>
}

function Cards(props) {
  return <div className='cards'>
    <img className='img1-card' src={props.src} alt="" />
    <p className='checked'>Perperzon <img src={group} alt="" /></p>
    <b>Sun-Glass</b>
    <div>
      <img src={frame} alt="" />
      <img src={frame2} alt="" />
    </div>
  </div>
}




const Fourth = () => {
  return <div className='container'>
    <ProDeteil />
    <FromCreator />
  </div>
}

export default Fourth
