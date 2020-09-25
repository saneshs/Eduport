 import React, {Component} from "react"
import axios from "axios"


 class AdminStudentList extends Component{

   state={
     data:[],
     loading:false,
     councelling:false,
     done:false,
     totalPages:1,
     page:0,
     search:"",
   }


   componentDidMount(){

    axios.get("/v1/admin/client/false/false/all/0").then(res=>{
       this.setState({data:res.data.content,totalPages:res.data.totalPages});
    })
   }

   componentDidUpdate(){
     if(this.state.loading)
     axios.get(`/v1/admin/client/${this.state.councelling}/${this.state.done}/${this.state.search.length===0?"all":this.state.search}/${this.state.page}`).then(res=>{
       console.log("total pages"+ res.data.totalPages)
      this.setState((state)=>{return {data:state.data.concat(res.data.content),totalPages:res.data.totalPages,loading:false}});
   })
   }

   markHandler=(index)=>{

    let email=this.state.data[index].email;

    axios.post("/v1/admin/doneToggle",null,{params:{email:email}}).then(res=>{
      let newState ={... this.state}
      newState.data[index].done= !newState.data[index].done
      this.setState({
        ...newState
      })

    })


   }

    pageHandler=()=>{
        this.setState((state)=>{
           return {loading:true,
            page:state.page+1}
        })

    }


   render(){

    if(!this.props.authenticated)
    window.location="http://eduports.in/admin/verify";

     return (
       <div className="studentList">
            <nav className="studentList__nav">
                 <button className="studentList__nav-item" onClick={()=>this.setState({loading:true,page:0,search:"",data:[],councelling:true,done:true})}>councelling done</button>
                 <button className="studentList__nav-item" onClick={()=>this.setState({loading:true,page:0,search:"",data:[],councelling:true,done:false})}>councelling not done</button>
                 <button className="studentList__nav-item" onClick={()=>this.setState({loading:true,page:0,search:"",data:[],councelling:false,done:true})}>enquiry done</button>
                 <button className="studentList__nav-item" onClick={()=>this.setState({loading:true,page:0,search:"",data:[],councelling:false,done:false})}>enquiry not done</button>
            </nav>
           <input placeholder="search" type="text" name="search" value={this.state.search} className="studentList__search"  onChange={(e)=>this.setState({data:[],search:e.target.value,loading:true,page:0})}/>
            <table className="studentList__table">
                 <thead className="studentList__table-head">
                     <tr className="studentList__table-head-row">
                         <td  className="studentList__table-head-row-col">Name</td>
                         <td  className="studentList__table-head-row-col">Email</td>
                         <td  className="studentList__table-head-row-col">Mobile</td>
                         <td  className="studentList__table-head-row-col">Preference</td>
                         <td  className="studentList__table-head-row-col">Added On</td>
                         <td  className="studentList__table-head-row-col"></td>
                     </tr>
                 </thead>
                 <tbody className="studentList__table-body">
                 {this.state.data.map((data,i)=>{
                   return <tr className={(i%2)===0?"studentList__table-body-row studentList__table-body-row-1":"studentList__table-body-row studentList__table-body-row-2"}>
                             <td  className="studentList__table-body-row-col ">{data.name}</td>
                             <td  className="studentList__table-body-row-col">{data.email}</td>
                             <td  className="studentList__table-body-row-col">{data.phone}</td>
                             <td  className="studentList__table-body-row-col">{data.preference}</td>
                             <td  className="studentList__table-body-row-col">{data.createdOn}</td>
                             <td  className="studentList__table-body-row-col">{data.done?<button onClick={()=>this.markHandler(i)} className="studentList__nav-item studentList__nav-item studentList__btn-unmark">Unmark</button>:<button onClick={()=>this.markHandler(i)} className="studentList__nav-item studentList__nav-item studentList__btn-mark ">Mark as done</button>}</td>
                         </tr>
                 })}
                 </tbody>

            </table>

                    {this.state.loading?<button className="load__btn">"Loading ...."</button>:this.state.page+1>=this.state.totalPages?null: <button className="load__btn" onClick={this.pageHandler}>"Load More"</button>}

       </div>
     )
   }
 }


export default AdminStudentList;
