import React, {Component} from "react"
import screen1 from "../../../../assets/images/screen1.svg"
import screen1Blue from "../../../../assets/images/screen1Blue.svg"
import Aos from "aos"
import "aos/dist/aos.css"


 class LandingScreen1 extends Component{

  state= {

    r1h1:"A platform created toease global trade.",
    r1p1:"Online video classes with in-depth & practical skills. Education made easy, affordable and fun!",
    loading:true,

 }

 componentDidMount=()=>{
   Aos.init({duration:1000});
   this.setState({r1h1:this.props.content.r1h1,r1p1:this.props.content.r1p1})
 }

 componentDidUpdate=(prevState,prevProps)=>{
   Aos.init({duration:1000});
   if(this.state.loading && this.props.content.r1h1)
   this.setState({r1h1:this.props.content.r1h1,r1p1:this.props.content.r1p1,loading:false})


 }


   render(){

     return (
        <div data-aos="zoom-out" data-aos-once={true}  style={{color:this.props.styles.color}} className="landingScreen1">
            <div className="landingScreen1__text">
               <div className="landingScreen1__text-head">
                  {this.state.r1h1}
               </div>
               <div className="landingScreen1__text-para">
                  {this.state.r1p1}
               </div>
            </div>
            <div className="landingScreen1__imageWrapper">
              <img src={screen1Blue} alt="" className="landingScreen1__imageWrapper-image"/>
            </div>
        </div>
     )
   }
 }


export default LandingScreen1;
