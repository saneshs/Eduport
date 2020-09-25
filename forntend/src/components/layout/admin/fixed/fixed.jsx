import React, {Component} from "react"
import AdminMobileMenu from "./call-us-on/call-us-on"
import AdminMobileCallBar from "./mobile-menu/mobile-menu"
import AdminGoTOTop from "./goToTop/goToTop"
import AdminWhatsapp from "./whatsapp/whatsapp"

 class AdminFixed extends Component{

   render(){

     return (
          <>
             <AdminMobileCallBar />
             <AdminMobileMenu />
             <AdminGoTOTop />
             <AdminWhatsapp />
          </>
     )
   }
 }


export default AdminFixed;
