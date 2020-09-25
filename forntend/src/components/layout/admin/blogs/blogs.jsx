import React, {Component} from "react"
import {withRouter , Link} from "react-router-dom"
import {Helmet} from "react-helmet"
import axios from "axios"


 class AdminBlogs extends Component{

   state={
     content:[

     ],
     dataInput:{
      name:"",
       data: new Date().toLocaleDateString(),
       title:"",
       content:""
     },loading:true,
     page:0,
     flag:true,
     saveloading:false,
   }


   componentDidMount=()=>{
    window.scrollTo({top:0,behavior:"smooth"})

    axios.get("/v1/admin/content/blogs/").then(res=>{
      this.setState({content:res.data,loading:false,flag:true});
  }).catch(err=>{this.setState({loading:false});alert("oops")})

  }



   onChangeHandler=(e,i)=>{
    let content= [...this.state.content]
     content[i][e.target.name]=e.target.value;
     this.setState({
      content:content,flag:false
   })
   }

   addDetailHandler=()=>{
    let content= [...this.state.content]
   content.push({
                  name:"",
                   data: new Date().toLocaleDateString(),
                   title:"",
                   content:""
                 });
    this.setState({
      content:content
   })

    }


    removeDetailHandler=(i)=>{
     let content= [...this.state.content]
     content.splice(i,1);
     this.setState({
        content:content,flag:false
     })
   }



   saveHandler=(e)=>{
    e.preventDefault();
    this.setState({saveloading:true,})
    axios.post("/v1/admin/blogspage",this.state.content).then(res=>{
      this.setState({
        saveloading:false,
         flag:true
      })
       alert("saved");
    })
   }



   render(){

    if(!this.props.authenticated)
    window.location="http://eduports.in/admin/verify";


    if(this.state.loading)
    return <div  id="loader1"><div class="loader">Loading...</div></div>

     return (<>
           <Helmet>
              <meta charSet="utf-8" />
              <title>{"Eduport By IndiaPort | Blogs"}</title>
              <link rel="canonical" href={"http://eduports.in/blogs"} />
              <meta name="description" content={"making india world's factory"} />
          </Helmet>
          <p style={{lineHeight:"1.5",fontSize:"1.5rem"}}>
          <h2>{"Note: "}</h2>
          {"For Headings        : "+  "<h1>"} <strong>MyHeading</strong> {"</h1>"}<br/>
          {"For Bold            : "+  "<strong>"} <strong>MyBlodWord</strong>{"</strong>"}<br/>
          {"For Horizontal line : "+  "<hr/>"}<br/>
          {"For Next line       : "+  "<br/>"}<br/>
          {'For Image           : '+  '<img class="image__blog" src="'}  <strong>MyImageAddress</strong>{'"/>'}<br/>
          <p>* HTML and Inline CSS can be used in content section</p>
          </p>

           <div className="blogs">
                 {this.state.content.map((data,i)=>{
                   return <div style={{position:"relative"}} className="blogs__item1">
                               <textarea cols="100" placeholder="title" name="title" onChange={(e)=>this.onChangeHandler(e,i)} value={data.title}  className="blogs__item-title"></textarea><br/>
                               <textarea placeholder="name of the author" name="name" onChange={(e)=>this.onChangeHandler(e,i)} value={data.name}  className="blogs__item-info">By <span className="blogs__item-info-by"></span> on <span className="blogs__item-info-date">{data.date}</span></textarea><br/>
                               <textarea cols="100" rows="10" style={{color:"black",lineHeight:"1.5"}} placeholder="content" name="content" onChange={(e)=>this.onChangeHandler(e,i)} value={data.content}  className="blogs__item-content"> </textarea><br/>
                               {this.state.flag?<><Link to={{pathname:"/blogs:"+data.title,state:{...data}}} style={{position:"static"}} className="blogs__item-readMore">Preview</Link></>:null}<br/><br/>
                               <br/><br/><br/><br/>
                               <i onClick={()=>this.removeDetailHandler(i)} className="fa fa-remove fa-2x removeIcon" aria-hidden="true"></i>
                          </div>


                 })}
                 <i onClick={this.addDetailHandler}  className="fa fa-plus fa-1x addIcon addIcon1" aria-hidden="true"></i>
           </div>
           <button className="load__btn" disabled={this.state.saveloading} onClick={this.saveHandler}>  {this.state.saveloading?"This may take a while":"Save"}</button>

           </>
     )
   }
 }


export default withRouter(AdminBlogs);
