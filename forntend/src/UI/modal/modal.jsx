 import React, {Component} from "react"


 class Modal extends Component{




   render(){
     let modal=null
     if(this.props.show){
       modal=<div
        className="modal">
                  {this.props.children}
              </div>
     }
     return (
         modal
     )
   }
 }


export default Modal;
