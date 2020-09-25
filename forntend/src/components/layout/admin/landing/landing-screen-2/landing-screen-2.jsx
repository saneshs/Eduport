 import React, {Component} from "react"


 class AdminLandingScreen2 extends Component{

   state={
   
       r2h1:"About Eduport: ",
       r2p1:"Eduport is training centre of Indiaport. ",
       r2h2:"",
       r2h3:"" ,
     r2list1:[
       {
         icon:"times",
         p1:"module",
         p2:"12"
       }
     ],
     moduleInput:{
       icon:"",
       p1:"",
       p2:""
     },
     r2list2:[
       {
         icon:"times",
         p1:"module"
       }
     ],
     moduleInput2:{
       icon:"",
       p1:""
     },
     loading:true,
   }

   componentDidMount=()=>{
    window.scrollTo({top:0,behavior:"smooth"})
   
    if(this.props.content)
    this.setState({...this.props.content });
   
  }

  componentDidUpdate=()=>{
   if(this.state.loading && this.props.content)
   this.setState({...this.props.content,loading:false})

  }


   onChangeHandler=(e)=>{
     let newState= this.state.moduleInput
     newState[e.target.name]=e.target.value;
     this.setState({
       ...newState
     })
     this.parentHadler();

   }

   addDetailHandler=()=>{
      let newState= this.state
      if(newState.moduleInput.p1.length!==0 && newState.moduleInput.icon.length!==0){
        newState.r2list1.push(newState.moduleInput);
        newState.moduleInput={icon:"",p1:"",p2:""};
        this.setState({
          ...newState
        })
        this.parentHadler();

      }
    }


    removeDetailHandler=(i)=>{
     let newState= this.state
     newState.r2list1.splice(i,1);
     this.setState({
        ...newState
     })
     this.parentHadler();

   }

   onChangeHandler2=(e)=>{
     let newState= this.state.moduleInput2
     newState[e.target.name]=e.target.value;
     this.setState({
       ...newState
     })
     this.parentHadler();

   }

   addDetailHandler2=()=>{
      let newState= this.state
      if(newState.moduleInput2.p1.length!==0 && newState.moduleInput2.icon.length!==0){
        newState.r2list2.push(newState.moduleInput2);
        newState.moduleInput2={icon:"",p1:"",p2:""};
        this.setState({
          ...newState
        })
      }
      this.parentHadler();

    }


    removeDetailHandler2=(i)=>{
     let newState= this.state
     newState.r2list2.splice(i,1);
     this.setState({
        ...newState
     })
     this.parentHadler();
   }


   parentHadler=()=>{
    this.props.parentLandingScreen2(this.state);
   }


   render(){

     return (
         <div style={{color:this.props.styles.color}} className="landingScreen2">
               <div className="landingScreen2__about">
                 <textarea cols={30} rows={1} value={this.state.r2h1} name="r2h1" onChange={(e)=>{this.onChangeHandler(e)}} className="landingScreen2__about-head">

                 </textarea><br/>
                 <textarea  cols={50} rows={10} value={this.state.r2p1} name="r2p1" onChange={(e)=>{this.onChangeHandler(e)}} className="landingScreen2__about-para">

                 </textarea>
               </div>
               <div className="landingScreen2__courseDetails">
                    <textarea value={this.state.r2h2} name="r2h2" onChange={(e)=>{this.onChangeHandler(e)}} className="landingScreen2__courseDetails-head"></textarea>
                    {this.state.r2list1.map((data,i)=>{
                      return <div style={{position:"relative"}} className="landingScreen2__courseDetails-item landingScreen2__courseDetails-module">
                                    <i class={"fa fa-"+data.icon+" landingScreen2__courseDetails-icon1"} aria-hidden="true"></i> {data.p1}
                                    <span>{data.p2!==""?":"+data.p2:null}</span>
                                    <i onClick={()=>this.removeDetailHandler(i)} className="fa fa-remove fa-2x removeIcon" aria-hidden="true"></i>
                                  </div>
                    })}
                    <div className="landingScreen2__courseDetails-item landingScreen2__courseDetails-module"><input aria-hidden="true" name="icon" value={this.state.moduleInput.icon} onChange={this.onChangeHandler}/> <input name="p1" type="text" onChange={this.onChangeHandler} value={this.state.moduleInput.p1}/>:<input name="p2" type="text" onChange={this.onChangeHandler} value={this.state.moduleInput.p2}/> </div>
                    <i onClick={this.addDetailHandler}  className="fa fa-plus fa-1x addIcon addIcon1" aria-hidden="true"></i>
               </div>
               <div className="landingScreen2__courseDetails">
                    <textarea value={this.state.r2h3}  name="r2h3" onChange={(e)=>{this.onChangeHandler(e)}} className="landingScreen2__courseDetails-head"></textarea>
                     {this.state.r2list2.map((data,i)=>{
                       return <div style={{position:"relative"}} className="landingScreen2__courseDetails-item landingScreen2__courseDetails-module">
                                     <i class={"fa fa-"+data.icon+" landingScreen2__courseDetails-icon2"} aria-hidden="true"></i> {data.p1}
                                     <i onClick={()=>this.removeDetailHandler2(i)} className="fa fa-remove fa-2x removeIcon" aria-hidden="true"></i>
                                   </div>
                     })}
                     <div className="landingScreen2__courseDetails-item landingScreen2__courseDetails-module"><input aria-hidden="true" name="icon" value={this.state.moduleInput2.icon} onChange={this.onChangeHandler2}/> <input name="p1" type="text" onChange={this.onChangeHandler2} value={this.state.moduleInput2.p1}/></div>
                     <i onClick={this.addDetailHandler2}  className="fa fa-plus fa-1x addIcon addIcon1" aria-hidden="true"></i>

               </div>
         </div>
     )
   }
 }


export default AdminLandingScreen2;
