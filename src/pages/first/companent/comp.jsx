

import img1 from "./images/Group 162812.png"
import img2 from "./images/nagigator.png"
import img3 from "./images/Arrow 01.png"
import img4 from "./images/Group 427320373.png"
import img5 from "./images/mdi_ethereum.png"

 import "../companent/comp.css"

import "./comp.css"

import "../first.css"

export function First (){
    return <div className="divFirstComp">
        <div>
            <h1>Discover And Create NFTs  </h1>
            <p style={{fontSize:"20px", paddingBottom:"20px"}}>Discover, Create and Sell NFTs On Our NFT Marketplace With Over Thousands Of NFTs And Get a $20 bonus.</p>

            <button style={{backgroundColor:"black" ,color:"white",borderRadius:"10px"}}>Explore More</button> <button style={{marginLeft:"40px",borderRadius:"10px"}}>create NFT</button>
            <div style={{display:"flex" , gap:"20px",marginTop:"20px"}}>
                <h2>430K+</h2>
                <h2>159K+</h2>
                <h2>87K+</h2>
            </div>
            <div style={{display:"flex" , gap:"20px"}}>
                <p>Art Works</p>
                <p>Creators</p>
                <p>Collections</p>
            </div>
        </div>

        <div style={{display:"flex"}}>

    
        <div  className="divFirstCompChild" >
            <img src={img1} alt="" />
            <img style={{marginLeft:"200px" ,marginTop:"-50px" ,width:"150px"}} src={img2} alt="" />

        </div>  

        <div className="divFirstCompNamn">
        <img style={{marginTop:"100px"}} src={img3} alt="" />
        <img src={img4} alt="" />
        </div>
      </div>
    </div>

}



export function Second (props){
    return <div  className="divSecondComp">
         <img  style={{width:"90%",height:"70%",borderRadius:"10px",margin:"auto" ,marginLeft:"5%",marginTop:"10px"}} src={props.src} alt="" />
         <button className="btnPosition">{props.btnT}</button>  
         
            <h2>{props.name}</h2>
            <div  style={{display:"flex", justifyContent:"space-between", width:"90%",margin:"auto"}}>
            <div  style={{marginTop:"-15px"}} >
                <p>Current bid</p> 
                <img src={img5} alt="" />
                <span style={{marginLeft:"10px"}}>{props.spanT}</span>
            </div>
            <button style={{backgroundColor:"black", color:"white", fontSize:"10px", height:"40px"}}>PLACE BID</button>
           
         </div>
    </div>
}




export function Therd (props){
    return <div className="divTherdComp">
        <div style={{display:"flex" ,gap:"20px", }}>
         <img style={{width:"60PX", height:"60px"}} src={props.src} alt="" />   
            <div style={{marginTop:"-20px"}}>
               <h3>{props.name}</h3>
               <p>{props.text}</p>
            </div> 
        </div>
        <div  style={{display:"flex", marginLeft:"300px"}}>
            <img style={{width:"30px", height:"30px"}} src={img5} alt="" />
            <h1 style={{fontSize:"15px"}}>{props.price}</h1>
        </div>

        <p className="divNameTherd" style={{color:"#10c352"}}>+ 27.78%</p>
        <div className="divNameTherd" style={{display:"flex"}}>
            <img  className="divNameTherd" style={{width:"30px", height:"30px"}} src={img5} alt="" />
            <h1 className="divNameTherd" style={{fontSize:"15px"}}>{props.Pprice}</h1>
        </div>

        <p className="divNameTherd" >{props.secPrice}</p>
        <p className="divNameTherd" >{props.TherPrice}</p>
       
    </div>
}