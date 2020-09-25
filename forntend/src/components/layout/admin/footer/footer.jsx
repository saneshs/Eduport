 import React, {Component} from "react"
import {Link} from "react-router-dom"

 class AdminFooter extends Component{

   render(){

     return (<>
       <div className="contact___strip">
           <div className="contact___strip-contact">
                <div className="contact___strip-contact-icon"><i className="fa fa-volume-control-phone" aria-hidden="true"></i></div>
                <div className="contact___strip-contact-text">+ 91 8889266799 <br/> + 91 8080107744</div>
           </div>
           <hr className="hv"/>
           <div className="contact___strip-email">
                <div className="contact___strip-email-icon"><i className="fa fa-envelope-open-o" aria-hidden="true"></i></div>
                <div className="contact___strip-email-text">hello@eduports.in</div>
           </div>
           <hr className="hv"/>
           <div className="contact___strip-address">
                <div className="contact___strip-address-icon"><i className="fa fa-globe" aria-hidden="true"></i></div>
                <div className="contact___strip-address-text">406B, Glitz Mall Marine Line <br/> Mumbai 400002</div>
           </div>
       </div>
        <footer id="footer" className="footer">
            <div className="footer__copyright">
                <h1 className="footer__copyright-h1">EDUPORT <br/> <span>By IndiaPort</span></h1>
                <p className="footer__copyright-text">
                    Eduport with its exclusive mastery aims to hasten <br/>
                    the globalization of India and build an International<br/>
                    business by educating and brushing exim skills of<br/>
                    the working class.
                </p>
                <p className="footer__copyright-copyrightText"> copyright 2019-20</p>
            </div>
            <div className="footer__nav">
                <div className="footer__nav-col">
                    <Link to="/aboutUs"><div className="footer__nav-col-link">About us</div></Link>
                    <Link to="/terms"><div className="footer__nav-col-link">Terms</div></Link>
                    <Link to="/privacy"><div className="footer__nav-col-link">Privacy</div></Link>
                    <Link to="/blogs"><div className="footer__nav-col-link">Blogs</div></Link>
                </div>
                <div className="footer__nav-col">
                    <Link to=""><div className="footer__nav-col-link">App Link</div></Link>
                    <Link to="/pricing"><div className="footer__nav-col-link">Pricing</div></Link>
                    <Link to=""><div className="footer__nav-col-link">Indiaport.in</div></Link>
                </div>
            </div>
            <div className="footer__socialMedia">
                <div className="footer__socialMedia-question">
                     <Link to="" className="footer__socialMedia-question-p1">Got question?</Link>
                     <Link to="" className="footer__socialMedia-question-p2">Explore our help centre</Link>
                </div>
                <div className="footer__socialMedia-links">
                     <div className="footer__socialMedia-links-head">
                         Follow Us
                     </div>

                     <div className="footer__socialMedia-links-row">
                         <Link  to="" className="footer__socialMedia-links-row-item footer__socialMedia-links-row-1"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                         <Link  to="" className="footer__socialMedia-links-row-item footer__socialMedia-links-row-2"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                         <Link  to="" className="footer__socialMedia-links-row-item footer__socialMedia-links-row-3"><i className="fa fa-instagram" aria-hidden="true"></i></Link>
                         <Link  to="" className="footer__socialMedia-links-row-item footer__socialMedia-links-row-4"><i className="fa fa-linkedin" aria-hidden="true"></i></Link>
                     </div>

                </div>
            </div>
        </footer>

        </>
     )
   }
 }


export default AdminFooter;
