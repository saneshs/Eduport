import React, {Component} from "react"
import Faq from "./faq/faq"
import Price from "./price/price"
import LandingScreen9 from "../landing/landing-screen-9/landing-screen-9"
import {Helmet} from "react-helmet"
import axios from "axios"


 class Pricing extends Component{


  state={
    loading:true,
     content:{},
   }

   componentDidMount=()=>{
    window.scrollTo({top:0,behavior:"smooth"})


    axios.get("/v1/content/pricing").then(res=>{
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
             <title>{"Eduport By IndiaPort | Pricing"}</title>
             <link rel="canonical" href={"http://eduports.in/pricing"} />
             <meta name="description" content={"making india world's factory"} />
         </Helmet>
          <div styles={this.props.styles} className="pricing">
          {this.state.content.pricings?<Price pricings={this.state.content.pricings} styles={this.props.styles}/>:null}
          {this.state.content.faqs? <Faq faqs={this.state.content.faqs} styles={this.props.styles}/>:null}
          </div>
          </>
     )
   }
 }


export default Pricing;
