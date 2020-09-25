import React, {Component} from "react"
import screen1 from "../../../../../assets/images/screen1.svg"
import screen1Blue from "../../../../../assets/images/screen1Blue.svg"
import Aos from "aos"
import "aos/dist/aos.css"


 class AdminLandingScreen1 extends Component{

   state= {

      r1h1:"A platform created toease global trade.",
      r1p1:"Online video classes with in-depth & practical skills. Education made easy, affordable and fun!",
      loading:true,

   }

   componentDidMount=()=>{
     Aos.init({duration:1000});
     this.setState({...this.props.content})
   }

   componentDidUpdate=(prevState,prevProps)=>{
     Aos.init({duration:1000});
     if(this.state.loading && this.props.content.r1h1)
     this.setState({...this.props.content,loading:false})



   }

   inputHandler=(e)=>{

    this.setState({[e.target.name]:e.target.value})
    this.props.parentLandingScreen1(this.state);
   }


   render(){
     return (
        <div data-aos="zoom-out" data-aos-once={true}  style={{color:this.props.styles.color}} className="landingScreen1">
            <div className="landingScreen1__text">
               <textarea value={this.state.r1h1} name="r1h1" onChange={(e)=>this.inputHandler(e)} value={this.state.r1h1} cols={50} rows={5} className="landingScreen1__text-head">

               </textarea><br/>
               <textarea value={this.state.r1p1}  name="r1p1"  onChange={(e)=>this.inputHandler(e)} value={this.state.r1p1} cols={50} rows={5} className="landingScreen1__text-para">

               </textarea>
            </div>
            <div className="landingScreen1__imageWrapper">
              <img src={screen1Blue} alt="" className="landingScreen1__imageWrapper-image"/>
            </div>
        </div>
     )
   }
 }


export default AdminLandingScreen1;
