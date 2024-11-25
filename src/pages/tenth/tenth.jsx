import React from 'react'
import "./tenth.css"
const Tenth = () => {
  return (
    <div className='heroTenth'>
      <h1 className='nftH1'>Create Your NFT</h1>
      <div className='tenthDivGlav'>
      <div className='inPuts'>
          <div className='boxInput1'>
            <p>Name</p>
            <div className='inp1Tenth'>
                <p>Sun-Glass</p>
                <input type="text" className='tenthInp1' name="" id="" />
                <img src="/src/pages/tenth/tenthImg/Name.png" alt="" />
            </div>
          </div>
          <div className='boxInput1'>
            <p>Description</p>
            <div className='inp2Tenth'>
              <p className='inp2TenthText'>Introducing the latest addition to the NFT world, a stunning glass NFT that is truly one-of-a-kind. Every angle of this NFT offers a unique and captivating experience, as the light refracts and dances across. </p>
                <img src="/src/pages/tenth/tenthImg/Name.png" alt="" />
              </div>
          </div>
          <div className='boxInput1'>
            <div className='inp3Tenth'>
              <div className='royalty'>
                <p>Royalty</p>
                <div>
                <select name="" id="">
                  <option value="">10%</option>
                </select>
                </div>
              </div>
              <div className='royalty'>
                <p>Size</p>
                <div>
                <select name="" id="">
                  <option value="">10%</option>
                </select>
                </div>
              </div>
              </div>
          </div>
          <div className='boxInput1'>
            <p>Tags</p>
            <div className='inp1Tenth'>
                <p>Glass-Sun-Beautiful SunSet-NFT Sun Glass</p>
                <input type="text" className='tenthInp1' name="" id="" />
                <img src="/src/pages/tenth/tenthImg/Name.png" alt="" />
            </div>
          </div>
          <div className='priceStock'>
            <div className='price'>
              <p>Price</p>
              <div className='rectangle18'>
                <p>ETH   | ⠀⠀1.087 Price</p>
              </div>
            </div>
            <div className='inStock'>
              <p>In Stock</p>
              <div className='rectangle19'>
                <select name="" id=""><option value="">008</option></select>
              </div>
            </div>
          </div>
          <div className="putOnSale">
            <div>
              <h1>Put On Sale <br /></h1>
              <p>People Will Bids On Your NFT Project</p>
            </div>
            <img src="/src/pages/tenth/tenthImg/Toggle Btn.png" alt="" />
          </div>
          <div className="putOnSale">
            <div>
              <h1>Direct Sale <br /></h1>
              <p>No Bids - Only Direct Salling</p>
            </div>
            <img src="/src/pages/tenth/tenthImg/Toggle Btn (1).png" alt="" />
          </div>
          <button className='btnCreat'>Creat</button>
      </div>
      <div>

      </div>
      <div className='gruopBenTen'>
        <img className='imgBenTen' src="/src/pages/tenth/tenthImg/Rectangle 3.png" alt="" />
        <button className='btnFrame132'>Upload</button>
      </div>
      </div>
    </div>
  )
}

export default Tenth
