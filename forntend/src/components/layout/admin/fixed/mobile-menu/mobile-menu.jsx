import React, {Component} from "react"
import Modal from "../../../../../UI/modal/modal"
import {withRouter} from "react-router-dom"

 class AdminMobileMenu extends Component{

   state={
     show:false
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

  mobileNavHandler=(id)=>{
    this.modalHandler();
    window.scrollTo({top:0,behavior:"smooth"})
    this.props.history.push("/"+id)
  }

   render(){

     return (
         <div className="mobileMaenu"><i  onClick={this.modalHandler} className={this.state.show?"fa fa-times bars":"fa fa-bars bars"} aria-hidden="true"></i>
         <Modal clicked={this.modalHandler} show={this.state.show}>
             <nav className={this.state.show?"ModalNavigation__items":null}>
                   <div onClick={()=>this.mobileNavHandler("")} className="ModalNavigation__items-item">Home</div>
                   <div onClick={()=>this.mobileNavHandler("pricing")} className="ModalNavigation__items-item">Pricing</div>
                   <div onClick={()=>this.mobileNavHandler("aboutUs")} className="ModalNavigation__items-item">About us</div>
                   <div onClick={()=>this.mobileNavHandler("blogs")} className="ModalNavigation__items-item">blogs.</div>
                   <div onClick={()=>this.mobileNavHandler("contactUs")} className="ModalNavigation__items-item">contact us</div>
             </nav>
         </Modal></div>
     )
   }
 }


export default withRouter(AdminMobileMenu);
