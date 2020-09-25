import React, {Component} from "react"
import AdminLandingScreen1 from "./landing-screen-1/landing-screen-1"
import AdminLandingScreen2 from "./landing-screen-2/landing-screen-2"
import AdminLandingScreen3 from "./landing-screen-3/landing-screen-3"
import AdminLandingScreen5 from "./landing-screen-5/landing-screen-5"
import AdminLandingScreen6 from "./landing-screen-6/landing-screen-6"
import AdminLandingScreen7 from "./landing-screen-7/landing-screen-7"
import AdminLandingScreen8 from "./landing-screen-8/landing-screen-8"
import AdminLandingScreen9 from "./landing-screen-9/landing-screen-9"
import AdminLandingScreen10 from "./landing-screen-10/landing-screen-10"
import {Helmet} from "react-helmet"
import axios from "axios"
import { withRouter } from "react-router-dom"


class AdminLanding extends Component{

  state={
    content:{},
    loading:true,
    saveloading:false,

  }

  componentDidMount=()=>{
    window.scrollTo({top:0,behavior:"smooth"})

    axios.get("/v1/content/landing").then(res=>{
      this.setState({content:res.data,loading:false});
  }).catch(err=>{this.setState({loading:false});alert("oops")})

  }


  parentLandingScreen1=(data)=>{
    let content={... this.state.content};
    content.r1h1=data.r1h1;
    content.r1p1=data.r1p1;
    this.setState({content:{... content}});
  }

  parentLandingScreen2=(data)=>{

    let content={... this.state.content};

         content.r2h1=data.r2h1 ;
         content.r2p1=data.r2p1 ;
         content.r2h2=data.r2h2 ;
         content.r2list1=data.r2list1;
         content.r2list2=data.r2list2;
 this.setState({content:{... content}});

  }



  parentLandingScreen3=(data)=>{
    let content={... this.state.content};

    content.r3h1=data.r3h1;
    content.r3h2=data.r3h2;
    content.r3h3=data.r3h3;
    content.r3h4=data.r3h4;
    content.r3h5=data.r3h5;
    content.r3h6=data.r3h6;
    content.r3h7=data.r3h7;
    content.r3p1=data.r3p1;
    content.r3p2=data.r3p2;
    content.r3p3=data.r3p3;
    content.r3p4=data.r3p4;
    content.r3p5=data.r3p5;
    content.r3p6=data.r3p6;
    this.setState({content:{... content}});
  }

  // parentLandingScreen4=(data)=>{
  //   this.setState({content:{... data}});
  //   console.log(data)
  // }
  parentLandingScreen5=(data)=>{
    let content={... this.state.content};
    content.r4h1=data.r4h1;
    content.r4=data.r4;
    this.setState({content:{... content}});
  }

  parentLandingScreen6=(data)=>{
    let content={... this.state.content};
    content.r5=data.r5;
    this.setState({content:{... content}});
  }
  parentLandingScreen7=(data)=>{
    let content={... this.state.content};
    content.reviews=data.reviews;
    content.reviewh1=data.reviewh1;
    this.setState({content:{... content}});
  }
  parentLandingScreen8=(data)=>{
    let content={... this.state.content};
  content.r9h1=data.r9h1;
    content.r9=data.r9;
    this.setState({content:{... content}});

  }
  parentLandingScreen9=(data)=>{
    let content={... this.state.content};
    content.r10h1=data.r10h1;
      this.setState({content:{... content}});
  }
  parentLandingScreen10=(data)=>{
    let content={... this.state.content};
    content.r8h1=data.r8h1;
      content.r8h2=data.r8h2;
      this.setState({content:{... content}});
  }


  saveHandler=(e)=>{
    e.preventDefault();
    this.setState({saveloading:true});
    axios.post("/v1/admin/landingpage",this.state.content).then(res=>{
      this.setState({saveloading:false,});
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
              <title>{"Eduport By IndiaPort"}</title>
              <link rel="canonical" href={"http://eduports.in/pricing"} />
              <meta name="description" content={"making india world's factory"} />
          </Helmet>
        { !this.state.content.r1h1?null: <div className="landing">
              <AdminLandingScreen1 parentLandingScreen1={this.parentLandingScreen1} content={this.state.content}     styles={this.props.styles}/>
              <hr  className="hr"/>
              <AdminLandingScreen2  parentLandingScreen2={this.parentLandingScreen2} content={this.state.content}     styles={this.props.styles}/>
              <hr  className="hr"/>
              <AdminLandingScreen3 parentLandingScreen={this.parentLandingScreen3}   content={this.state.content}   styles={this.props.styles}/>
              <hr  className="hr"/>
              <AdminLandingScreen5 parentLandingScreen={this.parentLandingScreen5}   content={this.state.content}   content={this.state.content}   styles={this.props.styles}/>
              <hr  className="hr"/>
              <AdminLandingScreen6  parentLandingScreen={this.parentLandingScreen6}   content={this.state.content}   styles={this.props.styles}/>

              <AdminLandingScreen8 parentLandingScreen={this.parentLandingScreen8}   content={this.state.content}  content={this.state.content}   styles={this.props.styles}/>
              <hr  className="hr"/>
              <AdminLandingScreen7  parentLandingScreen={this.parentLandingScreen7}    content={this.state.content}  styles={this.props.styles}/>
              <hr  className="hr"/>
              <AdminLandingScreen9  parentLandingScreen={this.parentLandingScreen9}   content={this.state.content}  styles={this.props.styles}/>
              <hr  className="hr"/>
              <AdminLandingScreen10  parentLandingScreen={this.parentLandingScreen10}  content={this.state.content}   styles={this.props.styles}/>
              <hr  className="hr"/>
              <button className="load__btn" disabled={this.state.saveloading} onClick={this.saveHandler}>  {this.state.saveloading?"This may take a while":"Save"}</button>

          </div>}
          </>
     )
   }
 }


export default  AdminLanding;
