import React, {Component} from "react"
import LandingScreen1 from "./landing-screen-1/landing-screen-1"
import LandingScreen2 from "./landing-screen-2/landing-screen-2"
import LandingScreen3 from "./landing-screen-3/landing-screen-3"
import LandingScreen4 from "./landing-screen-4/landing-screen-4"
import LandingScreen5 from "./landing-screen-5/landing-screen-5"
import LandingScreen6 from "./landing-screen-6/landing-screen-6"
import LandingScreen7 from "./landing-screen-7/landing-screen-7"
import LandingScreen8 from "./landing-screen-8/landing-screen-8"
import LandingScreen9 from "./landing-screen-9/landing-screen-9"
import LandingScreen10 from "./landing-screen-10/landing-screen-10"
import {Helmet} from "react-helmet"
import axios from "axios"

class Landing extends Component{

  state={
    content:{},
    loading:true,
  }

  componentDidMount=()=>{
    window.scrollTo({top:0,behavior:"smooth"})
    axios.get("/v1/content/landing").then(res=>{
      console.log(res);
      this.setState({content:res.data,loading:false});
  }).catch(err=>{this.setState({loading:false});alert("oops")})

  }


   render(){

     if(this.state.loading)
     return <div  id="loader1"><div class="loader">Loading...</div></div>

     return (<>
           <Helmet>
              <meta charSet="utf-8" />
              <title>{"Eduport By IndiaPort"}</title>
              <link rel="canonical" href={"http://eduports.in/pricing"} />
              <meta name="description" content={"making india world's factory"} />
          </Helmet>
          { !this.state.content.r1h1?null: <div className="landing">
              <LandingScreen1 content={this.state.content}  styles={this.props.styles}/>
              <hr  className="hr"/>
              <LandingScreen2 content={this.state.content}  styles={this.props.styles}/>
              <hr  className="hr"/>
              <LandingScreen3 content={this.state.content}  styles={this.props.styles}/>
              <hr  className="hr"/>
              <LandingScreen4 content={this.state.content}  styles={this.props.styles}/>
              <hr  className="hr"/>
              <LandingScreen5 content={this.state.content}  styles={this.props.styles}/>
              <hr  className="hr"/>
              <LandingScreen6 content={this.state.content}  styles={this.props.styles}/>

              <LandingScreen8 content={this.state.content}  styles={this.props.styles}/>
              <hr  className="hr"/>
              <LandingScreen7 content={this.state.content}  styles={this.props.styles}/>
              <hr  className="hr"/>
              <LandingScreen9 content={this.state.content}  styles={this.props.styles}/>
              <hr  className="hr"/>
              <LandingScreen10 content={this.state.content}  styles={this.props.styles}/>
              <hr  className="hr"/>

          </div>}
          </>
     )
   }
 }


export default Landing;
