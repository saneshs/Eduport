import React, {Component} from "react"
import {Helmet} from "react-helmet"
import about from "../../../../assets/images/about.svg"
import profile from "../../../../assets/images/profile.svg"
import female from "../../../../assets/images/female.svg"
import axios from "axios"
import about2 from "../../../../assets/images/about2.svg"
import about3 from "../../../../assets/images/about3.svg"
import about4 from "../../../../assets/images/about4.svg"

class AdminAboutUs extends Component{

  state={
    saveloading:false,
    r1h1:"",
    r1p1:"",
    r1p2:"",
    r2h1:"",
    r2p1:"",
    r2p2:"",
    r3h1:"",
    r3p1:"",
    r3p2:"",
    r4h1:"",
    r4p1:"",
    r4p2:"",
    r5h1:"",
    team:[
        {name:"",
        position:"",
           gender:"",}
    ],
    loading:true,
}
  componentDidMount=()=>{
    window.scrollTo({top:0,behavior:"smooth"})

    axios.get("/v1/content/about").then(res=>{
      console.log(res);
      this.setState({...res.data,loading:false});
  }).catch(err=>{this.setState({loading:false});alert("oops")})

  }


  addTeamMemberHandler=()=>{
      let team= [... this.state.team];

      team.push({
          name:"",
          position:"",
          gender:"male",
      })

      this.setState({team:team})
  }

  onTeamChangeHandler=(e,i)=>{
    let team= [... this.state.team];
    team[i][e.target.name]=e.target.value;
    this.setState({team:team})
  }

  onTeamRemoveHandler=(i)=>{
    let team= [... this.state.team];
   team.splice(i,1);
   this.setState({team:team})

  }



  saveHandler=(e)=>{
    e.preventDefault();
    this.setState({saveloading:true,})
    axios.post("/v1/admin/aboutpage",this.state).then(res=>{
      this.setState({saveloading:false,})

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
              <title>{"Eduport By IndiaPort | About"}</title>
              <link rel="canonical" href={"http://eduports.in/pricing"} />
              <meta name="description" content={"making india world's factory"} />
          </Helmet>
          <div className="aboutUs">
            <div className="aboutUs__screen1">
            <div className="aboutUs__screen1-text">
                 <textarea value={this.state.r1h1} name="r1h1" onChange={(e)=>this.setState({[e.target.name]:e.target.value})} data-aos="flip-down" className="aboutUs__screen1-text-head"></textarea>
                 <textarea value={this.state.r1p1} name="r1p1" onChange={(e)=>this.setState({[e.target.name]:e.target.value})} data-aos="flip-down" className="aboutUs__screen1-text-para"></textarea><br/>
                 <textarea value={this.state.r1p2} name="r1p2" onChange={(e)=>this.setState({[e.target.name]:e.target.value})} data-aos="flip-down" className="aboutUs__screen1-text-para"></textarea>
            </div>
              <div data-aos="fade-up-left" className="aboutUs__screen1-img">
                  <img  src={about} alt=""/>
              </div>
          </div>

          <div className="aboutUs__screen1">

             <div className="aboutUs__screen1-text">
                 <textarea value={this.state.r2h1} name="r2h1" onChange={(e)=>this.setState({[e.target.name]:e.target.value})} data-aos="flip-down" className="aboutUs__screen1-text-head"></textarea>
                 <textarea value={this.state.r2p1} name="r2p1" onChange={(e)=>this.setState({[e.target.name]:e.target.value})} data-aos="flip-down" className="aboutUs__screen1-text-para"></textarea><br/>
                 <textarea value={this.state.r2p2} name="r2p2" onChange={(e)=>this.setState({[e.target.name]:e.target.value})} data-aos="flip-down" className="aboutUs__screen1-text-para"></textarea>
            </div>

            <div data-aos="fade-up-right" className="aboutUs__screen1-img">
                <img  src={about2} alt=""/>
            </div>


        </div>


        <div className="aboutUs__screen1">
        <div className="aboutUs__screen1-text">
                 <textarea value={this.state.r3h1} name="r3h1" onChange={(e)=>this.setState({[e.target.name]:e.target.value})} data-aos="flip-down" className="aboutUs__screen1-text-head"></textarea>
                 <textarea value={this.state.r3p1} name="r3p1" onChange={(e)=>this.setState({[e.target.name]:e.target.value})} data-aos="flip-down" className="aboutUs__screen1-text-para"></textarea><br/>
                 <textarea value={this.state.r3p2} name="r3p2" onChange={(e)=>this.setState({[e.target.name]:e.target.value})} data-aos="flip-down" className="aboutUs__screen1-text-para"></textarea>
            </div>
          <div data-aos="fade-up-left" className="aboutUs__screen1-img">
              <img  src={about3} alt=""/>
          </div>
      </div>

      <div className="aboutUs__screen1">


        <div className="aboutUs__screen1-text">
                 <textarea value={this.state.r4h1} name="r4h1" onChange={(e)=>this.setState({[e.target.name]:e.target.value})} data-aos="flip-down" className="aboutUs__screen1-text-head"></textarea>
                 <textarea value={this.state.r4p1} name="r4p1" onChange={(e)=>this.setState({[e.target.name]:e.target.value})} data-aos="flip-down" className="aboutUs__screen1-text-para"></textarea><br/>
                 <textarea value={this.state.r4p2} name="r4p2" onChange={(e)=>this.setState({[e.target.name]:e.target.value})} data-aos="flip-down" className="aboutUs__screen1-text-para"></textarea>
            </div>


        <div data-aos="fade-up-right" className="aboutUs__screen1-img">
            <img  src={about4} alt=""/>
        </div>

    </div>

      <div className="aboutUs__face">
           <textarea name="r5h1" onChange={(e)=>this.setState({[e.target.name]:e.target.value})} className="aboutUs__face-head">{this.state.r5h1}</textarea>

           <div className="aboutUs__face-figures">


               {this.state.team.map((data,i)=>
           <figure data-aos="slide-left">
           {data.gender==="male"?<img src={profile} alt="Trulli"/>:<img src={female} alt="Trulli"/>}
               <figcaption data-aos="flip-down">
                   <textarea name="name" onChange={(e)=>this.onTeamChangeHandler(e,i)} value={data.name} className="figcaption__span1"></textarea><br/>
                   <textarea name="position" onChange={(e)=>this.onTeamChangeHandler(e,i)} value={data.position} className="figcaption__span2"></textarea></figcaption>
               <select name="gender" onChange={e=>this.onTeamChangeHandler(e,i)}>
                <option value="male">Male</option>
                <option value="female">Female</option>
               </select>
               <i onClick={()=>this.onTeamRemoveHandler(i)} className="fa fa-remove fa-1x removeIcon" aria-hidden="true"></i>

               </figure>

               )}


           </div>
           <i onClick={this.addTeamMemberHandler} className="fa fa-plus fa-1x addIcon addIcon1" aria-hidden="true"></i>

      </div>

      <button className="load__btn" disabled={this.state.saveloading} onClick={this.saveHandler}>  {this.state.saveloading?"This may take a while":"Save"}</button>
          </div>
          </>
     )
   }
 }


export default AdminAboutUs;
