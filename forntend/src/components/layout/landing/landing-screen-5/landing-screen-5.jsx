 import React, {Component} from "react"


 class LandingScreen5 extends Component{

  state={
    r4:[ {
        h1:"Complete all 26 modules",
        p1:"Learn new skills with our bite-sized video tutorials, then test your knowledge with a quick quiz."
      }
    ],
    r4h1:"",
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

     return (
         <div id="screen5" style={this.props.styles} className="landingScreen5">
             <div style={this.props.styles} className="landingScreen5__head">{this.state.r4h1}</div>
             <div className="landingScreen5__body">
               {this.state.r4.map((data,i)=>{
                 return <><div className="landingScreen5__body-box">
                            <div className="landingScreen5__body-box-head">{data.h1}</div>
                            <div className="landingScreen5__body-box-detail">{data.p1}</div>
                        </div>
                         {i!=2?<div className="landingScreen5__body-arrow"><i className="fa fa-angle-right" aria-hidden="true"></i></div>:null}
                         {i!=2?<div className="landingScreen5__body-arrowDown"><i className="fa fa-angle-down" aria-hidden="true"></i></div>:null}
                        </>
               })}

             </div>
         </div>
     )
   }
 }


export default LandingScreen5;
