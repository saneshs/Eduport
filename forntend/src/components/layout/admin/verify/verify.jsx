 import React, {Component} from "react"
import axios from "axios";
import { withRouter,Link } from "react-router-dom";


 class Verify extends Component{

   state={
     id:"",
     secret:""
   }

   onSubmitHandler=(e)=>{
    e.preventDefault();

     axios.post("/v1/admin/authenticate",{adminId:this.state.id,adminSecret:this.state.secret}).
        then(res=>{
                    this.props.history.push("/admin")
                  }).catch(err=> alert("oops"));

   }

   inputHandler=(e)=>{

    this.setState({[e.target.name]:e.target.value})

   }

   render(){

     return (
         <div className="adminVerificationWrapper">
            <form onSubmit={this.onSubmitHandler} className="adminVerification__form">
               <div>
                <label className="adminVerification__form-label" htmlFor="id">Admin Id</label><br/>
                <input onChange={(e)=>this.inputHandler(e)} name="id" className="adminVerification__form-input" placehonder="Enter Admin Id" type="text"/>
              </div>
              <div>
                <label className="adminVerification__form-label" htmlFor="id">Admin Secret</label><br/>
                <input onChange={(e)=>this.inputHandler(e)} name="secret" className="adminVerification__form-input" placehonder="Enter Admin Secret" type="password"/>
              </div>
              <input className="btn btn-blue" type="submit" value="verify" name="" id=""/>
            </form>
        </div>
     )
   }
 }


export default  withRouter(Verify);
