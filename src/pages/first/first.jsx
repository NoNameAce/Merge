import React from 'react'
import { First, Second, Therd } from './companent/comp'
import "./first.css"

import img1 from "./companent/images/Mask Group 01.png"
import img2 from "./companent/images//Mask Group111.png"
import img3 from "./companent/images/Mask Group.png"
import img4 from "./companent/images/Mask Group (1).png"
import img5 from "./companent/images/nagigator.png"
import img6 from "./companent/images/Recently Viewd.png"
import img7 from "./companent/images/icon.png"
import img8 from "./companent/images/icon (3).png"
import img9 from "./companent/images/List.png"
import img10 from "./companent/images/Voice Id.png"
import img11 from "./companent/images/Dollar.png"
import img12 from "./companent/images/icon@2x.png"
import img13 from "./companent/images/Illustration Left.png"

 

export default function App (){
  return <div>
     <First/>
  

     <div className='All1'>
      <h1>Weekly - Top NFT</h1>
      <div  className='All1Child' style={{display:"flex", gap:"20px"}}>
              <Second src={img1} name="Sun-Glass" spanT="1.75" btnT="07h 09m 12s"/>
              <Second src={img2} name="Sun-Glass" spanT="1.75" btnT="07h 09m 12s"/>
              <Second src={img3} name="Sun-Glass" spanT="1.75" btnT="07h 09m 12s"/>
              <Second src={img4} name="Sun-Glass" spanT="1.75" btnT="07h 09m 12s"/>
              <Second src={img2} name="Sun-Glass" spanT="1.75" btnT="07h 09m 12s"/>
      </div>
      <img style={{marginLeft:"45%" ,marginTop:"50px", width:"150px"}} src={img5} alt="" />
     </div>

     <img  className='imgNone' style={{marginLeft:"70%", marginTop:"-150px ", width:"400px"}} src={img6} alt="" />

     <h1 style={{textAlign:"center", padding:"50px 0px"}}>Top Collection</h1>

     <div className='All2'>
    
      <h3>Collection</h3>
      
         <p>Volume</p>
      <p>24h %</p>
      <p>Floor Price</p>
      <p>Owners</p>
      <p>Items</p>
      
   

     
     </div>

     <Therd src={img7} name="Alex Ca." text="By Alex" price="8,456" Pprice="3.5" secPrice="2.2K" TherPrice="500"/>
     <Therd src={img8} name="Alex Ca." text="By Alex" price="8,456" Pprice="7.9" secPrice="3.2K" TherPrice="900"/>
     <Therd src={img7} name="Alex Ca." text="By Alex" price="8,456" Pprice="3.5" secPrice="2.5K" TherPrice="500"/>
     <Therd src={img8} name="Alex Ca." text="By Alex" price="8,456" Pprice="7.9" secPrice="4.2K" TherPrice="900"/>

     <p className='pExlop'   style={{marginTop:"50px", marginLeft:"88%", color:"#acadb9"}}>Explore All</p>
     <h1 style={{textAlign:"center", marginTop:"50px"}}>Explore Marketplace</h1>
     <div className='All3'>
      <button style={{fontSize:"15px" }}>All</button>
      <button style={{textAlign:"center", fontSize:"17px", paddingBottom:"5px" }}><img style={{width:"20px", marginRight:"10px"}} src={img9} alt="" />Category</button>
      <button style={{textAlign:"center", fontSize:"15px" }}><img style={{width:"20px", marginRight:"10px"}} src={img10} alt="" />Category</button>
      <button style={{textAlign:"center", fontSize:"15px" }}><img style={{width:"20px", marginRight:"10px"}} src={img11} alt="" />Category</button>
     </div>


     <div className='All4'>
                <Second src={img1} name="Sun-Glass" spanT="1.75" btnT="07h 09m 12s"/>
              <Second src={img2} name="Sun-Glass" spanT="1.75" btnT="07h 09m 12s"/>
              <Second src={img3} name="Sun-Glass" spanT="1.75" btnT="07h 09m 12s"/>
              <Second src={img4} name="Sun-Glass" spanT="1.75" btnT="07h 09m 12s"/>


              <Second src={img4} name="Sun-Glass" spanT="1.75" btnT="07h 09m 12s"/>
              <Second src={img3} name="Sun-Glass" spanT="1.75" btnT="07h 09m 12s"/>
              <Second src={img2} name="Sun-Glass" spanT="1.75" btnT="07h 09m 12s"/>
              <Second src={img1} name="Sun-Glass" spanT="1.75" btnT="07h 09m 12s"/>



     </div>
     
     <p className='pExlop' style={{marginTop:"50px", marginLeft:"88%", color:"#acadb9"}}>Explore All</p>


     <div className='EnndDiv'>
      <div>
        <h1 style={{color:"#acadb9" }}>Just Unleash -  </h1>
        <h1>Your Inner Collector</h1>
        <div style={{display:"flex", gap:"20px"}}>  
          <div style={{display:"flex", flexDirection:"column", width:"20px", gap:"20px", marginTop:"20px"}}>
            <img src={img12} alt="" />
            <img src={img12} alt="" />
            <img src={img12} alt="" />
            <img src={img12} alt="" />
            <img src={img12} alt="" />
          </div>

          <div style={{fontSize:"19px"}}>
            <p>Best Seller All Around World</p>
            <p>$2M+ Transections Every Day</p>
            <p>Secure Transactions</p>
            <p>Exclusive Collections From Sellers</p>
            <p>Easy Buying and Selling</p>
          </div>
        </div>
      </div>
      <img className='imgEnd' style={{width:"600px"}} src={img13} alt="" />
     </div>
  </div>
}