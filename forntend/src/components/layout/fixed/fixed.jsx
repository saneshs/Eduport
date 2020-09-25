import React, {Component} from "react"
import MobileMenu from "./call-us-on/call-us-on"
import MobileCallBar from "./mobile-menu/mobile-menu"
import GoTOTop from "./goToTop/goToTop"
import Whatsapp from "./whatsapp/whatsapp"

 class Fixed extends Component{

   render(){

     return (
          <>
             <MobileCallBar />
             <MobileMenu />
             <GoTOTop />
             <Whatsapp />
          </>
     )
   }
 }


export default Fixed;
