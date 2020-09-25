import React, {Component} from "react"
import {NavLink, withRouter} from "react-router-dom"
import axios from "axios"


class AdminNavigation extends Component{

   state={
     show:false,
     value:""
   }

  modalHandler=()=>{
    if(this.state.show){
      this.setState({
        show:false
      })
    }else{
      this.setState({
        show:true
      })
    }
  }

  passwordResetHandler=()=>{

    axios.post("/v1/admin/passwordResetRequest",null,{params:{url:"http://eduports.in/admin/passwordReset"}}).then(res=>{
      alert("hey admin check eduport's email");
    }).catch(err=>{
      alert("oops")
    })

  }




  clickHandler=()=>{
    this.props.history.push("/");
  }

  render(){
   let style = {...this.props.styles}
   style.color = "grey"

    return (
         <div  className="navigation">
            <div className="logo">
                 <div  onClick={this.clickHandler} className="logo__name">
                      <div className="logo__name-main">Eduport</div>
                      <div className="logo__name-secondary">By IndiaPort</div>
                 </div>
                {this.props.authenticated?<div style={style} className="logo__tagline">
                      <div style={{fontSize:"1.2rem",color:"grey",fontWeight:"bold"}}><strong style={{color:"black",fontWeight:"bold"}}>NOTE: </strong>Press _space_ at the end of any field before hitting save btn</div><br/>
                      <div><a target="_blank" style={{color:"black",fontWeight:"bold"}} href="https://fontawesome.com/v4.7.0/icons/">Click to browse Icon names</a></div><br/>
                     <div style={{cursor:"pointer",fontSize:"1rem",color:"grey",fontWeight:"light",paddingLeft:"0"}}  onClick={this.passwordResetHandler} className="navigation__items-item">Password reset</div>
                 </div>:null}
            </div>
            <nav  className="navigation__items">
                  <NavLink exact style={{color:style.color}} activeStyle={{color: "#0f3460",textDecoration:"underline"}} to="/admin"><div className="navigation__items-item">Home</div></NavLink>
                  <NavLink  style={{color:style.color}} activeStyle={{color: "#0f3460",textDecoration:"underline"}} to="/admin/pricing"><div className="navigation__items-item">Pricing</div></NavLink>
                  <NavLink style={{color:style.color}} activeStyle={{color: "#0f3460",textDecoration:"underline"}} to="/admin/aboutUs"><div className="navigation__items-item">About</div></NavLink>
                  <NavLink style={{color:style.color}} activeStyle={{color: "#0f3460",textDecoration:"underline"}} to="/admin/blogs"><div className="navigation__items-item">blogs</div></NavLink>
                  <NavLink style={{color:style.color}} activeStyle={{color: "#0f3460",textDecoration:"underline"}} to="/admin/contactUs"><div className="navigation__items-item">contact</div></NavLink>
                  <NavLink style={{color:style.color}} activeStyle={{color: "#0f3460",textDecoration:"underline"}} to="/admin/studentList"><div className="navigation__items-item">student</div></NavLink>
                  <div onClick={()=> window.location="http://eduports.in"} style={{color:"grey",cursor:"pointer"}} className="navigation__items-item"><i className="fa fa-sign-out fa-2x" aria-hidden="true"></i></div>
            </nav>


         </div>
    )
    // <Backdrop  clicked={this.modalHandler} show={this.state.show}/>
  }
}


export default withRouter(AdminNavigation);
