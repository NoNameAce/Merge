import React from 'react'
import images from '../../pages/eleventh/img/Rectangle 275.png'
import images2 from '../../pages/eleventh/img/Rectangle 3832.png'
import images3 from '../../pages/eleventh/img/Rectangle 3831.png'
import images4 from '../../pages/eleventh/img/Group 427320188.png'
import imagesw2 from '../../pages/eleventh/img/Rectangle 275 (1).png'
import imagesw3 from '../../pages/eleventh/img/Rectangle 275 (2).png'

import "../../pages/eleventh/eleventh.css"
const Eleventh = () => {
  let bj =[
    {
      avatar:images,
      namecard: "Alex Ca.",
      p1:"5.8K",
      p2:"17.9K",
      p3:"17.5",
      p4:"22.4",
      img2: images2,
      img3:images3,
      img4:images4
    },
    {
      avatar:imagesw2,
      namecard: "Alex Ca.",
      p1:"5.8K",
      p2:"17.9K",
      p3:"17.5",
      p4:"22.4",
      img2: images2,
      img3:images3,
      img4:images4
    },
    {
      avatar:imagesw3,
      namecard: "Alex Ca.",
      p1:"5.8K",
      p2:"17.9K",
      p3:"17.5",
      p4:"22.4",
      img2: images2,
      img3:images3,
      img4:images4
    }, {
      avatar:imagesw2,
      namecard: "Alex Ca.",
      p1:"5.8K",
      p2:"17.9K",
      p3:"17.5",
      p4:"22.4",
      img2: images2,
      img3:images3,
      img4:images4
    },
    {
      avatar:imagesw3,
      namecard: "Alex Ca.",
      p1:"5.8K",
      p2:"17.9K",
      p3:"17.5",
      p4:"22.4",
      img2: images2,
      img3:images3,
      img4:images4
    },
    {
      avatar:images,
      namecard: "Alex Ca.",
      p1:"5.8K",
      p2:"17.9K",
      p3:"17.5",
      p4:"22.4",
      img2: images2,
      img3:images3,
      img4:images4
    }
  ]
  return (
    <div>
        <h1 style={{textAlign:'center'}}>Meet Our Great Creators</h1>
        <br /><br />
        <div className='global'>
          {bj.map((elem)=>{
            return (<div  style={{width:'200px' ,margin:'100px'}}>
              <img style={{borderTopLeftRadius:'10px', borderTopRightRadius:'10px'}} width={300} height={200} src={elem.avatar} alt="" />
              <br />
              <img style={{borderRadius:'50%',border:"5px solid white" , position:"relative",bottom:'30px', left:'100px'}} width={100} height={100} src={elem.avatar} alt="" />
              <h1 style={{textAlign:'center'}}>{elem.namecard}</h1>
              <div style={{width:'300px',display:'flex',alignItems:'center',justifyContent:'space-around'}}>
              <p>{elem.p1}</p>
              <p>{elem.p2}</p>
              <p>{elem.p3}</p>
              <p>{elem.p4}</p>
              </div>
              <div style={{width:'300px',display:'flex',alignItems:'center',justifyContent:'space-around'}}>
              <img width={90} height={90} src={elem.img2} alt="" />
              <img width={90} height={90} src={elem.img3} alt="" />
              <img width={90} height={90} src={elem.img4} alt="" />
              </div>
            </div>)
          })}
        </div>
    </div>
  )
}

export default Eleventh
