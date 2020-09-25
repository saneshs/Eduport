import React, {Component} from "react"
import axios from "axios";
import { withRouter } from "react-router-dom";


class ChangePassword extends Component{

  state={
    password:"",
    newPassword:"",
    confirmPassword:"",
    key:"",
  }

  componentDidMount=()=>{
    this.setState({
      key:this.props.match.params.key
    })
  }

  onSubmitHandler=(e)=>{
   e.preventDefault();

   axios.post("/v1/admin/passwordReset",null,{params:{...this.state}})
   .then(res=>{alert("Updated");
       window.location="http://localhost:3000/admin/verify"})
   .catch(err=>alert(err))    

  }

  inputHandler=(e)=>{

   this.setState({[e.target.name]:e.target.value})

  }

  render(){

    return (
        <div className="adminVerificationWrapper">
           <form onSubmit={this.onSubmitHandler} className="adminVerification__form">
              <div>
               <label className="adminVerification__form-label" htmlFor="id">Old Password</label><br/>
               <input onChange={(e)=>this.inputHandler(e)} name="password" value={this.state.password} className="adminVerification__form-input" placehonder="Enter Admin Id" type="text"/>
             </div>
             <div>
              <label className="adminVerification__form-label" htmlFor="id">New Password</label><br/>
              <input onChange={(e)=>this.inputHandler(e)} name="newPassword"  value={this.state.newPassword} className="adminVerification__form-input" placehonder="Enter Admin Id" type="text"/>
            </div>
            <div>
             <label className="adminVerification__form-label" htmlFor="id">Confirm Password</label><br/>
             <input onChange={(e)=>this.inputHandler(e)} name="confirmPassword"  value={this.state.confirmPassword} className="adminVerification__form-input" placehonder="Enter Admin Id" type="text"/>
           </div>

             <input className="btn btn-blue" type="submit" value="verify" value="Change"/>
           </form>
       </div>
    )
  }
}


export default  withRouter(ChangePassword);
