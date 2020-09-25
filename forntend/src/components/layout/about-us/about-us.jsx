import React, {Component} from "react"
import {Helmet} from "react-helmet"
import about from "../../../assets/images/about.svg"
import about2 from "../../../assets/images/about2.svg"
import about3 from "../../../assets/images/about3.svg"
import about4 from "../../../assets/images/about4.svg"

import profile from "../../../assets/images/profile.svg"
import female from "../../../assets/images/female.svg"
import Aos from "aos"
import "aos/dist/aos.css"
import axios from "axios"

class AboutUs extends Component{


  state={
    r1h1:"",
    r1p1:"",
    r1p2:"",
    r2h1:"",
    r2p1:"",
    r2p2:"",
    r3h1:"",
    r3p1:"",
    r3p2:"",
    r4h1:"",
    r4p1:"",
    r4p2:"",
    r5h1:"",
    team:[
        {name:"",
        position:"",
           gender:"",}
    ],
    loading:true,
}
  componentDidMount=()=>{
    window.scrollTo({top:0,behavior:"smooth"})
    Aos.init({duration:1500,once:true});

    axios.get("/v1/content/about").then(res=>{
      console.log(res);
      this.setState({...res.data,loading:false});
  }).catch(err=>{this.setState({loading:false});alert("oops")})

  }




  componentDidUpdate=()=>{
    Aos.init({duration:1500,once:true});
  }

   render(){

    if(this.state.loading)
    return <div  id="loader1"><div class="loader">Loading...</div></div>

     return (<>
           <Helmet>
              <meta charSet="utf-8" />
              <title>{"Eduport By IndiaPort | About"}</title>
              <link rel="canonical" href={"http://eduports.in/pricing"} />
              <meta name="description" content={"making india world's factory"} />
          </Helmet>
          <div className="aboutUs">

          {this.state.r1h1?
            <div className="aboutUs__screen1">
            <div className="aboutUs__screen1-text">
                 <div data-aos="flip-down" className="aboutUs__screen1-text-head">{this.state.r1h1}</div>
                 <div data-aos="flip-down" className="aboutUs__screen1-text-para">{this.state.r1p1}</div><br/>
                 <div data-aos="flip-down" className="aboutUs__screen1-text-para">{this.state.r1p2}</div>
            </div>
              <div data-aos="fade-up-left" className="aboutUs__screen1-img">
                  <img  src={about} alt=""/>
              </div>
          </div>:null}


          {this.state.r2h1?
          <div className="aboutUs__screen1">


            <div className="aboutUs__screen1-text">
                 <div data-aos="flip-down" className="aboutUs__screen1-text-head">{this.state.r2h1}</div>
                 <div data-aos="flip-down" className="aboutUs__screen1-text-para">{this.state.r2p1}</div><br/>
                 <div data-aos="flip-down" className="aboutUs__screen1-text-para">{this.state.r2p2}</div>
            </div>
            <div data-aos="fade-up-right" className="aboutUs__screen1-img">
                <img  src={about2} alt=""/>
            </div>

        </div>:null}


        {this.state.r3h1?
        <div className="aboutUs__screen1">
        <div className="aboutUs__screen1-text">
                 <div data-aos="flip-down" className="aboutUs__screen1-text-head">{this.state.r3h1}</div>
                 <div data-aos="flip-down" className="aboutUs__screen1-text-para">{this.state.r3p1}</div><br/>
                 <div data-aos="flip-down" className="aboutUs__screen1-text-para">{this.state.r3p2}</div>
            </div>
          <div data-aos="fade-up-left" className="aboutUs__screen1-img">
              <img  src={about3} alt=""/>
          </div>
      </div>:null}

      {this.state.r4h1?
      <div className="aboutUs__screen1">


        <div className="aboutUs__screen1-text">
                 <div data-aos="flip-down" className="aboutUs__screen1-text-head">{this.state.r4h1}</div>
                 <div data-aos="flip-down" className="aboutUs__screen1-text-para">{this.state.r4p1}</div><br/>
                 <div data-aos="flip-down" className="aboutUs__screen1-text-para">{this.state.r4p2}</div>
            </div>

            <div data-aos="fade-up-right" className="aboutUs__screen1-img">
                <img  src={about4} alt=""/>
            </div>

    </div>:null}

      <div className="aboutUs__face">
           <div className="aboutUs__face-head">{this.state.r5h1}</div>

           <div className="aboutUs__face-figures">

              {this.state.team.map((data,i)=>
             <figure data-aos={i%3===0?"slide-right":i%2===0?"flip-down":"slide-left"}>
             {data.gender==="male"?<img src={profile} alt="Trulli"/>:<img src={female} alt="Trulli"/>}
               <figcaption data-aos="flip-down">
                 <span className="figcaption__span1">{data.name}</span><br/>
              <span className="figcaption__span2">{data.position}</span></figcaption>
           </figure> )}

           </div>

      </div>



          </div>
          </>
     )
   }
 }


export default AboutUs;
