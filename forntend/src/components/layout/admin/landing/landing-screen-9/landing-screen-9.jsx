import React, {Component} from "react"
import Spinner from "../../../../../UI/spinner/spinner"
import enquire from "../../../../../assets/images/enquire.svg"

class AdminLandingScreen9 extends Component{

  state={

    loading:false,
    r10h1:"h1",
    loading1:true,
  }




   componentDidMount=()=>{

    if(this.props.content)
    this.setState({...this.props.content });

  }

  componentDidUpdate=()=>{
   if(this.state.loading1 && this.props.content)
   this.setState({...this.props.content,loading1:false})

  }




  render(){

    return (<><textarea value={this.state.r10h1} onChange={(e)=>{this.setState({r10h1:e.target.value});this.props.parentLandingScreen(this.state)}} style={{color:this.props.styles.color}} className="landingScreen9__head"> <span ></span></textarea>
        <div style={this.props.styles} className="landingScreen9">
                <div  className="landingScreen9__details">
                     <div style={{display:"none"}} className="landingScreen9__details-contact">Contact Us</div>
                     <div style={{display:"none"}} className="landingScreen9__details-contactNo">+ 91 8889266799</div>
                     <div style={{display:"none"}} className="landingScreen9__details-contactNo">+ 91 8080107744</div>
                     <div style={{display:"none"}} className="landingScreen9__details-email">hello@eduports.in</div>
                </div>
                <div className="landingScreen9__enquire">
                     {this.state.loading?<><Spinner/></>:<form className="landingScreen9__enquire-form" >
                           <input disabled required className="landingScreen9__enquire-form-input" placeholder="Your Name *" type="text"/>
                           <input disabled required className="landingScreen9__enquire-form-input" placeholder="Your Number *" type="tel"/>
                           <input disabled className="landingScreen9__enquire-form-input" placeholder="Your Email *" type="email"/>
                           <button disabled type="submit"  className="landingScreen9__enquire-form-btn">Enquire Now</button>
                     </form>}
                </div>
                <div  className="landingScreen9__message">
                     <img style={{display:"none"}} src={enquire} alt=""/>
                </div>

        </div></>
    )
  }
}


export default AdminLandingScreen9;
