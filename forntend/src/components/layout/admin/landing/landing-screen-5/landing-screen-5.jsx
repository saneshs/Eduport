 import React, {Component} from "react"


 class AdminLandingScreen5 extends Component{

   state={
     r4:[ {
         h1:"Complete all 26 modules",
         p1:"Learn new skills with our bite-sized video tutorials, then test your knowledge with a quick quiz."
       },{
        h1:"Complete all 26 modules",
        p1:"Learn new skills with our bite-sized video tutorials, then test your knowledge with a quick quiz."
      },{
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

  inputHandler=(e,i)=>{

    let r4=[...this.state.r4];
    r4[i][e.target.name]=e.target.value;
    this.setState({r4:r4});
  this.parentHandler();
  }

  parentHandler=()=>{
    this.props.parentLandingScreen(this.state);
  }


   render(){

     return (
         <div id="screen5" style={this.props.styles} className="landingScreen5">
             <textarea  className="landingScreen5__head" value={this.state.r4h1} name="r4h1" onChange={(e)=>{this.setState({[e.target.name]:e.target.value});this.parentHandler();}} ></textarea>
             <div className="landingScreen5__body">
               {this.state.r4.map((data,i)=>{
                 return <><div style={{position:"relative"}} className="landingScreen5__body-box">
                            <textarea name="h1" onChange={(e)=>this.inputHandler(e,i)} className="landingScreen5__body-box-head" value={data.h1}></textarea>
                            <textarea name="p1" onChange={(e)=>this.inputHandler(e,i)} className="landingScreen5__body-box-detail" value={data.p1}></textarea>
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


export default AdminLandingScreen5;
