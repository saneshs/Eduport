import React, {Component} from "react"
import Spinner from "../../../../UI/spinner/spinner"
import {Helmet} from "react-helmet"
import LayoutContext from "../../../layout-context"
import axios from "axios"


 class AdminContactUs extends Component{


    state={


      loading:true,
      saveloading:false,

    }

    static contextType=LayoutContext;

    submitHandler=(e)=>{
      e.preventDefault();
      this.setState({saveloading:true,});

     axios.post("v1/admin/contactpage",this.state).then(res=>{
       this.setState({saveloading:false,});

       alert("saved");
     })
    }

    componentDidMount=()=>{
      window.scrollTo({top:0,behavior:"smooth"})


      axios.get("/v1/content/contact").then(res=>{
        this.setState({... res.data,loading:false});
    }).catch(err=>{this.setState({loading:false});alert("oops")})

    }

    inputHandler=(e)=>{
      this.setState({[e.target.name]:e.target.value});
    }




   render(){

    if(!this.props.authenticated)
    window.location="http://eduports.in/admin/verify";


    if(this.state.loading)
    return <div  id="loader1"><div class="loader">Loading...</div></div>


     return (<>
           <Helmet>
              <meta charSet="utf-8" />
              <title>{"Eduport By IndiaPort | Contact Us"}</title>
              <link rel="canonical" href={"http://eduports.in/pricing"} />
              <meta name="description" content={"making india world's factory"} />
          </Helmet>
          <div style={{color:this.props.styles.color}} className="contactUs">
                 <hr className="hr"/>
              <form  className="contactUs__form">
                    <input name="h1" onChange={(e)=>this.inputHandler(e)} value={this.state.h1} className="contactUs__form-h1 contactUs__form-h1--mod"/>
                    <input name="h2" onChange={(e)=>this.inputHandler(e)} value={this.state.h2} className="contactUs__form-h1"/>
                    <input name="h3" onChange={(e)=>this.inputHandler(e)} value={this.state.h3} className="contactUs__form-h2"/>
                    <label htmlFor="contactUs__name">Name</label>
                    <input disabled required id="contactUs__name" name="name" placeholder="Name" className="contactUs__form-input" type="text"/>
                    <label htmlFor="contactUs__number">Mobile</label>
                    <input disabled required id="contactUs__number" name="number" placeholder="Mobile" className="contactUs__form-input" type="tel"/>
                    <label htmlFor="contactUs__email">Email</label>
                    <input disabled  id="contactUs__email" name="email" placeholder="Email" className="contactUs__form-input contactUs__form-input-email" type="email"/>
                    <label htmlFor="contactUs__category">Preferences</label>
                    <input  name="c1" onChange={(e)=>this.inputHandler(e)}  value={this.state.c1} required  placeholder="prefrence1" className="contactUs__form-input" type="text"/>
                    <input  name="c2" onChange={(e)=>this.inputHandler(e)}  value={this.state.c2} required  placeholder="prefrence2" className="contactUs__form-input" type="text"/>
                    <input  name="c3" onChange={(e)=>this.inputHandler(e)}  value={this.state.c3} required  placeholder="prefrence3" className="contactUs__form-input" type="text"/>
                    <div className="contactUs__form-terms">By signing up, you agree to Eduport’s  <span>Privacy policy</span> and <span>Terms of Use.</span></div>
            </form>
            <button className="load__btn" disabled={this.state.saveloading} onClick={this.submitHandler}>  {this.state.saveloading?"This may take a while":"Save"}</button>

          </div>
          </>
     )
   }
 }


export default AdminContactUs;
