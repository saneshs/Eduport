import React, {Component} from "react"
import {withRouter , Link} from "react-router-dom"
import {Helmet} from "react-helmet"
import axios from "axios"



 class Blogs extends Component{

  state={
    content:[

    ],
    loading:true,
    page:0,
    totalPages:0,
  }


  componentDidMount=()=>{
    window.scrollTo({top:0,behavior:"smooth"})

    axios.get("/v1/content/blogs/0").then(res=>{
      this.setState({content:res.data.content,totalPages:res.data.totalPages,loading:false});
  }).catch(err=>{this.setState({loading:false});alert("oops")})

  }

 componentDidUpdate=()=>{
  if(this.state.loading)
  axios.get("/v1/content/blogs/"+this.state.page).then(res=>{
    console.log(res);
    this.setState(state=>{return {content:(res.data.content),totalPages:res.data.totalPages,loading:false}});
}).catch(err=>{this.setState({loading:false});alert("oops")})
 }

   render(){


    if(this.state.loading)
    return <><div  id="loader1"><div class="loader">Loading...</div></div>

            </>

     return (<>
           <Helmet>
              <meta charSet="utf-8" />
              <title>{"Eduport By IndiaPort | Blogs"}</title>
              <link rel="canonical" href={"http://eduports.in/blogs"} />
              <meta name="description" content={"making india world's factory"} />
          </Helmet>
           <div className="blogs">
                 {this.state.content.map((data,i)=>{
                   return <div  className="blogs__item">
                               <div className="blogs__item-title">{data.title}</div>
                               <div className="blogs__item-info">By <span className="blogs__item-info-by">{data.name}</span> on <span className="blogs__item-info-date">{data.createdDate}</span></div>
                               <div  className="blogs__item-content"> <td dangerouslySetInnerHTML={{__html:data.content.replace("<img","<img hidden").slice(0,350)}} /></div><Link to={{pathname:"/blogs:"+data.title,state:{...data}}} className="blogs__item-readMore">...Read More</Link>
                          </div>

                 })}
           </div>

                <div className="pageWrapper"><button className="page__btn" disabled={this.state.page===0} onClick={()=>{this.setState(state=>{return {loading:true,page:state.page-1}})}} >{"-"}</button>
                <div className="page__num">{this.state.page+1}/{this.state.totalPages}</div>
                <button className="page__btn" disabled={this.state.page+1===this.state.totalPages} onClick={()=>{this.setState(state=>{return {loading:true,page:state.page+1}})}}>{"+"}</button></div>

         {this.state.loading?<button className="load__btn2 load__btn">Loading...</button>:null}

           </>
     )
   }
 }


export default withRouter(Blogs);
