 import React, {Component} from "react"
 import s3p1 from "../../../../assets/images/screen3-pic1.svg"
 import s3p2 from "../../../../assets/images/screen3-pic2.svg"
 import s3p3 from "../../../../assets/images/screen3-pic3.svg"
 import Aos from "aos"
 import "aos/dist/aos.css"

 class LandingScreen3 extends Component{

  state={
    r3h1:"",
    r3h2:"",
    r3h3:"",
    r3h4:"",
    r3h5:"",
    r3h6:"",
    r3h7:"",
    r3p1:"",
    r3p2:"",
    r3p3:"",
    r3p4:"",
    r3p5:"",
    r3p6:"",
    loading:true,

   }

   componentDidMount=()=>{
   
    if(this.props.content)
    this.setState({...this.props.content });
   
  }

  componentDidUpdate=()=>{
   if(this.state.loading && this.props.content)
   this.setState({...this.props.content,loading:false})

  }

   render(){

     return (<>
         <div style={{color:this.props.styles.color}} className="landingScreen3__head">{this.state.r3h1}</div>
         <div className="landingScreen3">
               <div data-aos="flip-right" data-aos-delay={150} data-aos-once={true} className="landingScreen3__cardWrapper">
                     <div  className="card">
                              <div style={this.props.styles} className="card__side card__side--front">
                                 <div className="card__side-head card__side--front-head">{this.state.r3h2}</div>
                                 <div className="card__side-para card__side--front-para">{this.state.r3p1}</div>
                                 <img className="card__side-image card__side--front-image" src={s3p1} alt=""/>
                              </div>
                              <div className="card__side card__side--back card__side--back-1">
                                  <div className="for">{this.state.r3h3}</div>
                                  <div>{this.state.r3p2}</div>
                              </div>
                     </div>

                     <div className="card" >
                              <div  style={this.props.styles} className="card__side card__side--front">
                                 <div className="card__side-head card__side--front-head">{this.state.r3h4}</div>
                                 <div className="card__side-para card__side--front-para">{this.state.r3p3}</div>
                                 <img className="card__side-image card__side--front-image" src={s3p2} alt=""/>
                              </div>
                              <div className="card__side card__side--back card__side--back-1">
                                  <div className="for">{this.state.r3h5}</div>
                                  <div>{this.state.r3p4}</div>
                              </div>
                     </div>

                     <div className="card">
                              <div style={this.props.styles} className="card__side card__side--front">
                                 <div className="card__side-head card__side--front-head">{this.state.r3h6}</div>
                                 <div className="card__side-para card__side--front-para">{this.state.r3p5}</div>
                                 <img className="card__side-image card__side--front-image" src={s3p3} alt=""/>
                              </div>
                              <div className="card__side card__side--back card__side--back-1">
                                  <div className="for">{this.state.r3h7}</div>
                                  <div>{this.state.r3p6}</div>
                              </div>
                     </div>
               </div>


         </div>

         </>
     )
   }
 }


export default LandingScreen3;
