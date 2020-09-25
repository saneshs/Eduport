import React, {Component} from "react"
import cover from "../../../../../assets/images/mobile-cover.png"
import play from "../../../../../assets/images/google-play.svg"
import apple from "../../../../../assets/images/apple.svg"
import Aos from "aos"
import "aos/dist/aos.css"

class AdminLandingScreen8 extends Component{

  state={
    r9h1:"Designed for your busy life.",
    r9:[],
    loading:true,

  }

  componentDidMount=()=>{
    Aos.init({duration:1000});
    if(this.props.content)
    this.setState({...this.props.content });

  }

  componentDidUpdate=()=>{
    Aos.init({duration:1000});
   if(this.state.loading && this.props.content)
   this.setState({...this.props.content,loading:false})
  }




  inputHandler2=(e)=>{
    this.setState({r9h1:e.target.value});
    this.parentHandler();

  }


  inputHandler=(e,i)=>{

    let r9=[...this.state.r9];
    r9[i][e.target.name]=e.target.value;
    this.setState({r9:r9});
  this.parentHandler();
  }

  parentHandler=()=>{
    this.props.parentLandingScreen(this.state);
  }

  render(){
    let icon0 = <i className="fa fa-folder folder" aria-hidden="true"></i>
    let icon1 = <i className="fa fa-pause pause" aria-hidden="true"></i>
    let icon2 = <i className="fa fa-life-ring life-ring" aria-hidden="true"></i>
    let icon3 = <i className="fa fa-download download" aria-hidden="true"></i>
    let icon4 = <i className="fa fa-trophy trophy" aria-hidden="true"></i>
    let icon5 = <i className="fa fa-file-text file" aria-hidden="true"></i>

    return (
        <div style={this.props.styles} className="landingScreen8">

             <div className="landingScreen8__appLink" >
                <div className="landingScreen8__appLink-box">

                             <textarea cols={50} rows={1} value={this.state.r9h1} onChange={e=>this.inputHandler2(e)} className="landingScreen8__appLink-box-head"></textarea>
                             <div className="landingScreen8__appLink-box-btns">
                                 <div className="landingScreen8__appLink-box-btns-apple">
                                    <i class="fa fa-apple" aria-hidden="true"></i>  apple
                                 </div>
                                 <div className="landingScreen8__appLink-box-btns-google">
                                    <i class="fa fa-play" aria-hidden="true"></i>   google
                                 </div>
                             </div>

                </div>
                <div data-aos="fade-left" data-aos-offset="100px" data-aos-once={true} data-aos-anchor="#features" className="landingScreen8__appLink-mobile">
                    <img src={cover} alt="mobilecover"/>
                </div>
             </div>
              <div id="features"  className="landingScreen8__features">
                {this.state.r9.map((data,i)=>{
                  return <div className="landingScreen8__features-items">
                                 <div className="landingScreen8__features-items-iconWrapper">
                                      {i===0?icon0:i===1?icon1:i===2?icon2:i===3?icon3:i===4?icon4:icon5}
                                 </div>
                                 <div className="landingScreen8__features-items-item">
                                    <textarea cols={30} rows={1} name="h1" onChange={(e)=>this.inputHandler(e,i)} value={data.h1} className="landingScreen8__features-items-item-head"></textarea><br/>
                                    <textarea cols={30} rows={5} name="p1" onChange={(e)=>this.inputHandler(e,i)} value={data.p1} className="landingScreen8__features-items-item-detail"></textarea>
                                </div>
                        </div>
                })}
              </div>
        </div>
    )
  }
}


export default AdminLandingScreen8;
