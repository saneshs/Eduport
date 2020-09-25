import React, {Component} from "react"
import AdminFaq from "./faq/faq"
import AdminPrice from "./price/price"
import {Helmet} from "react-helmet"
import axios from "axios"

 class AdminPricing extends Component{

  state={
   loading:true,
    content:{},
    saveloading:false,
  }


  componentDidMount=()=>{
    window.scrollTo({top:0,behavior:"smooth"})

    axios.get("/v1/content/pricing").then(res=>{
      console.log(res);
      this.setState({content:res.data,loading:false});
  }).catch(err=>{this.setState({loading:false});alert("oops")})

  }




   faqsHandler=(faqs)=>{
     let content={... this.state.content}
     content[faqs]=faqs;
     this.setState({content:content});
   }


   pricingsHandler=(pricings)=>{
    let content={... this.state.content}
    content[pricings]=pricings;
    this.setState({content:content});

   }

   saveHandler=(e)=>{
    e.preventDefault();
    this.setState({saveloading:true});

    axios.post("/v1/admin/pricingpage",this.state.content).then(res=>{
      this.setState({saveloading:false});
       alert("saved");
    })
   }



   render(){

    if(!this.props.authenticated)
    window.location="http://eduports.in/admin/verify";


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
              {this.state.content.pricings?<AdminPrice
                                           styles={this.props.styles}
                                           pricingsHandler={this.pricingsHandler}
                                           pricings={this.state.content.pricings}/>


              :null}


             {this.state.content.faqs?<AdminFaq
                                     faqs={this.state.content.faqs}
                                      styles={this.props.styles}
                                      faqsHandler={this.faqsHandler}/>
             :null}


             <button className="load__btn" disabled={this.state.saveloading} onClick={this.saveHandler}>  {this.state.saveloading?"This may take a while":"Save"}</button>
          </div>
          </>
     )
   }
 }


export default AdminPricing;
