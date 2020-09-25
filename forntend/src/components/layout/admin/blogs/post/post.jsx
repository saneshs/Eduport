import React, {Component} from "react"
import {withRouter , Link} from "react-router-dom"
import {Helmet} from "react-helmet";

 class AdminPost extends Component{

   componentDidMount=()=>{
     window.scrollTo({top:0,behavior:"smooth"})
   }


   render(){
     if(!this.props.authenticated)
     window.location="http://eduports.in/admin/verify";

     return (<>

       <Helmet>
             <meta charSet="utf-8" />
             <title>{this.props.history.location.state.title}</title>
             <link rel="canonical" href={"http://eduports.in/"+this.props.history.location.state.title} />
             <meta name="description" content={this.props.history.location.state.content.slice(0,350)} />
         </Helmet>

          <div className="post">
          <div className="post-title">{this.props.history.location.state.title}</div>
          <div className="post-info">By <span className="post-info-by">{this.props.history.location.state.by}</span> on <span className="post-info-date">{this.props.history.location.state.createdDate}</span></div>
          <div  className="post-content"><td dangerouslySetInnerHTML={{__html:this.props.history.location.state.content.replace("image__blog","image__blog2")}} /></div>
          <Link to={"/admin/blogs"} className="post-goBack">...blogs</Link>
          </div>


          </>
     )
   }
 }


export default withRouter(AdminPost);
