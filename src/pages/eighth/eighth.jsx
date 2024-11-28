import React from 'react'
import Text, { Collection } from '../seventh/text-seventh'
import { Button, Cover } from '../seventh/card-seventh'
import Pic from '@/assets/Pic.png'
import socials from '@/assets/Socials.png'
import img1 from '@/assets/img1.png'
import img2 from '@/assets/img2.png'
import gr81 from '@/assets/Group 81.png'
import('./eighth.css')
const Eighth = () => {
  return <>
    <div className='relative flex justify-center m-7 mb-40 z-0'>
      <Cover className='relative'>
        <div className='flex items-end absolute top-64 z-1 rounded-5xl left-28' >
          <div>
            <span><img src={Pic} alt="" /></span>
            <Text size={"xl"} font={"600"} text={"Harry K."} desc={"@Harryknft"}></Text>
          </div>
          <Button>Follow +</Button>
        </div>
      </Cover>

    </div>
    <div className='flex justify-around'>
      <div>
        <div className='flex gap-8'>
          <Text size={"2xl"} font={"700"} text={"86 ETH"} desc={"Total Sales"}></Text>
          <Text size={"2xl"} font={"700"} text={"12K"} desc={"Followers"}></Text>
          <Text size={"2xl"} font={"700"} text={"587"} desc={"Followings"}></Text>
        </div>
        <div className='text-gray-400 border-b-2 pb-16 pt-16'>
          <h3>Bio</h3>
          <span>the artist who transforms the intangible into priceless assets <br /> with their incredible NFT creations. From stunning visuals to mind-bending concepts,</span>
        </div>
        <span className='p-5'><img src={socials} alt="" /></span>
      </div>
      <div className='w-1/2'>
        <div >
          <Collection>
            <div className='border-b-2 w-56 text-center border-black'><span className='font-[600]'>Collection</span></div>
            <div><span>Activity</span></div>
          </Collection>
        </div>
        <div className='flex flex-wrap gap-0'>
          <div className='flex align-middle mt-9'>
            <select className="sel-div" name="" id=""><option value="">Sales</option></select>
            <select className="sel-div" name="" id=""><option value="">All Chains</option></select>
          </div>
        </div>

        <div className='mini-card-1'>
          <div className='flex-div'>
            <div className='mini-img1'>
              <img src={img1} alt="" />
              <div><b>NeuVey</b> <p>JenifferS</p></div>
            </div>
            <div className='green-hd'>
              <div><p>Sale</p> <img src={gr81} alt="" /></div>
            </div>
          </div>
          <div className='texts-mini'>
            <div><p>USD Price</p><h2>19K</h2></div>
            <div><p>Quantity</p><h2>14.9K</h2></div>
            <div><p>USD Price</p><h2>49K</h2></div>
            <div><p>USD Price</p><h2>11K</h2></div>
          </div>
        </div>


        <div className='mini-card-1'>
          <div className='flex-div'>
            <div className='mini-img1'>
              <img src={img2} alt="" />
              <div><b>NeuVey</b> <p>JenifferS</p></div>
            </div>
            <div className='green-hd'>
              <div><p>Sale</p> <img src={gr81} alt="" /></div>
            </div>
          </div>
          <div className='texts-mini'>
            <div><p>USD Price</p><h2>19K</h2></div>
            <div><p>Quantity</p><h2>14.9K</h2></div>
            <div><p>USD Price</p><h2>29K</h2></div>
            <div><p>USD Price</p><h2>15K</h2></div>
          </div>
        </div>


      </div>
    </div>
  </>
}

export default Eighth