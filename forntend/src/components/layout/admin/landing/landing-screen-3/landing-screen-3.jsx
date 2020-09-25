 import React, {Component} from "react"
 import s3p1 from "../../../../../assets/images/screen3-pic1.svg"
 import s3p2 from "../../../../../assets/images/screen3-pic2.svg"
 import s3p3 from "../../../../../assets/images/screen3-pic3.svg"
 import Aos from "aos"
 import "aos/dist/aos.css"

 class AdminLandingScreen3 extends Component{

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


  inputHandler=(e)=>{
    this.setState({[e.target.name]:e.target.value})
    this.parentHandler();
  }

  parentHandler=()=>{
    this.props.parentLandingScreen(this.state);
  }


   render(){

    

     return (<>
         <textarea cols={50} row={5} value={this.state.r3h1} name="r3h1" onChange={(e)=>this.inputHandler(e)} style={{color:this.props.styles.color}} className="landingScreen3__head"></textarea>
         <div className="landingScreen3">
               <div data-aos="flip-right" data-aos-delay={150} data-aos-once={true} className="landingScreen3__cardWrapper">
                     <div  className="">
                              <div style={this.props.styles} className="card__side card__side--front">
                                 <textarea cols={50} row={5} name="r3h2" onChange={(e)=>this.inputHandler(e)} value={this.state.r3h2} className="card__side-head card__side--front-head"></textarea>
                                 <textarea cols={50} row={5} name="r3p1" onChange={(e)=>this.inputHandler(e)} value={this.state.r3p1} className="card__side-para card__side--front-para"></textarea>
                                 <img className="card__side-image card__side--front-image" src={s3p1} alt=""/>
                              </div>
                              <div className="">
                                  <textarea cols={50} row={5} name="r3h3" onChange={(e)=>this.inputHandler(e)} value={this.state.r3h3} className="for"></textarea><br/>
                                  <textarea cols={50} row={5} name="r3p2" onChange={(e)=>this.inputHandler(e)} value={this.state.r3p2}></textarea>
                              </div>
                     </div>

                     <div className="" >
                              <div  style={this.props.styles} className="card__side card__side--front">
                                 <textarea cols={50} row={5} name="r3h4" onChange={(e)=>this.inputHandler(e)} value={this.state.r3h4} className="card__side-head card__side--front-head"></textarea>
                                 <textarea cols={50} row={5} name="r3p3" onChange={(e)=>this.inputHandler(e)} value={this.state.r3p3} className="card__side-para card__side--front-para"></textarea>
                                 <img className="card__side-image card__side--front-image" src={s3p2} alt=""/>
                              </div>
                              <div className="">
                                  <textarea cols={50} row={5} name="r3h5" onChange={(e)=>this.inputHandler(e)} value={this.state.r3h5} className="for"></textarea><br/>
                                  <textarea cols={50} row={5} name="r3p4" onChange={(e)=>this.inputHandler(e)} value={this.state.r3p4}></textarea>
                              </div>
                     </div>

                     <div className="">
                              <div style={this.props.styles} className="card__side card__side--front">
                                 <textarea cols={50} row={5} name="r3h6" onChange={(e)=>this.inputHandler(e)} value={this.state.r3h6} className="card__side-head card__side--front-head"></textarea>
                                 <textarea cols={50} row={5} name="r3p5" onChange={(e)=>this.inputHandler(e)} value={this.state.r3p5} className="card__side-para card__side--front-para"></textarea>
                                 <img className="card__side-image card__side--front-image" src={s3p3} alt=""/>
                              </div>
                              <div className="">
                                  <textarea cols={50} row={5} name="r3h7" onChange={(e)=>this.inputHandler(e)} value={this.state.r3h7} className="for"></textarea><br/>
                                  <textarea cols={50} row={5} name="r3p6" onChange={(e)=>this.inputHandler(e)} value={this.state.r3p6}></textarea>
                              </div>
                     </div>
               </div>


         </div>

         </>
     )
   }
 }


export default AdminLandingScreen3;
