import React, {Component} from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import ashoka from "../../../../../assets/images/ashoka.svg"

class LandingScreen10 extends Component{

  state={
    r8h2:"Narendra modi",
    r8h1:"Let us come together and think of ways India does not have to import but we export to the world.",
    loading:true,
  }



 componentDidMount=()=>{
    Aos.init({duration:1000});
    if(this.props.content)
    this.setState({...this.props.content});

  }

  componentDidUpdate=()=>{
    Aos.init({duration:1000});
   if(this.state.loading && this.props.content)
   this.setState({...this.props.content,loading:false})
  }

  parentHandler=()=>{
    this.props.parentLandingScreen(this.state);
  }


  inputHandler=(e)=>{
    this.setState({[e.target.name]:e.target.value})
    this.parentHandler();
  }


  render(){

    return (
        <div style={{color:this.props.styles.color}} className="landingScreen10">

                <textarea value={this.state.r8h1} onChange={(e)=>this.inputHandler(e)} name="r8h1" data-aos="fade-in" data-aos-once={true} data-aos-offset="100px" data-aos-delay={200} className="landingScreen10__thought"><i className="quote fa fa-quote-left" aria-hidden="true"></i>  <i className="quote fa fa-quote-right" aria-hidden="true"></i></textarea><br/>
                <textarea value={this.state.r8h2} onChange={(e)=>this.inputHandler(e)} name="r8h2" data-aos="fade-in" data-aos-once={true} data-aos-offset="100px" data-aos-delay={200} className="landingScreen10__by"></textarea>

        </div>
    )
  }
}


export default LandingScreen10;
