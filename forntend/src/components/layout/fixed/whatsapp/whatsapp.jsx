import React, {Component} from "react"
import ReactWhatsapp from 'react-whatsapp';

 class Whatsapp extends Component{

   componentDidMount=()=>{

   }


   render(){
    const message = "Hello eduport. I am interested to know about your program.Please provide me with more details regarding the course. Thank you"

     return (

             <ReactWhatsapp element="div" number="+918517885555" message={message} >
             <div id="WAButton" className="whatsapp">
                <i className="fa fa-whatsapp" aria-hidden="true"></i>
             </div>
             </ReactWhatsapp>
     )
   }
 }


export default Whatsapp;
