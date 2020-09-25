import React, {Component} from "react"
import pic from "../../../../../assets/images/screen1.svg"



 class AdminLandingScreen6 extends Component{

   state = {
    r5: [
            {
              icon:"life-ring",
              h1:"Build Your web Presense",
              h2:"5 lessons / 30 min",
              list:["Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet."],
            }
          ],
          cardInput:{
            icon:"",
            h1:"",
            h2:"",
            list:[],
          }
  }

  componentDidMount=()=>{

    if(this.props.content)
    this.setState({...this.props.content });

  }

  componentDidUpdate=()=>{
   if(this.state.loading && this.props.content)
   this.setState({...this.props.content,loading:false})

  }


   onChangeHandler=(e,i)=>{
    let r5= [... this.state.r5]
    r5[i][e.target.name]=e.target.value;
    this.setState({
      r5:r5,
    });
    this.parentHandler();

   }
   onChangeHandler2 =(e,i1,i2)=>{
    let r5= [... this.state.r5]
    r5[i1].list[i2]=e.target.value
    this.setState({
       r5:r5,
    });
    this.parentHandler();

  }

   addDetailHandler=()=>{
      let r5= [... this.state.r5]

      this.setState({cardInput:{ icon:"",
                                  h1:"",
                                  h2:"",
                                  list:[],
                                  listInput:""}})
        r5.push(this.state.cardInput);
        this.setState({
          r5:r5,
        });
        this.parentHandler();


    }



    removeDetailHandler=(i)=>{
     let r5= [...this.state.r5]
     r5.splice(i,1);
     this.setState({
      r5:r5,
    })   ;
     this.parentHandler();

   }



   addDetailHandler2=(i1)=>{

     let r5=[... this.state.r5];
     r5[i1].list.push("");

      // let newState= this.state.data[i]
      //    console.log(newState);
      //   newState.list.push(newState.listInput);
      //   newState.listInput = ""
        this.setState({
      r5:r5,
    })
    this.parentHandler();

    }


    removeDetailHandler2=(i,ii)=>{
     let r5= [... this.state.r5]
     r5[i].list.splice(ii,1);
     this.setState({
      r5:r5,
    })
    this.parentHandler();
   }

   parentHandler=()=>{
     this.props.parentLandingScreen(this.state);
   }


   sideScroll=(element, direction, speed, distance, step)=> {
    let scrollAmount = 0;
     let slideTimer = setInterval(()=> {
       if (direction == 'left') {
         element.scrollLeft -= step;
       } else {
         element.scrollLeft += step;
       }
       scrollAmount += step;
       if (scrollAmount >= distance) {
         window.clearInterval(slideTimer);
       }
     }, speed);
   }


   render(){

     return (<>
       <div className="landingScreen6__head">Module ({this.state.r5.length})</div>
         <div style={this.props.styles} className="landingScreen6">
             <div id="landingScreen6__carousel" className="landingScreen6__carousel">
                 <i onClick={()=>{this.sideScroll(document.getElementById('landingScreen6__carousel'),"left",5,275,5)}} id="slide" className="fa fa-angle-left landingScreen6__arrow landingScreen6__arrow--left" aria-hidden="true"></i>
                  {this.state.r5.map((data,i)=>{
                    return (
                      <div style={{position:"relative"}} data-aos="slide-left" data-aos-once={true} data-aos-offset="100px" data-aos-delay={100} key={i} id={"landingScreen6__"+i} className="landingScreen6__carousel-card landingScreen6__carousel-card-module">
                           <textarea value={data.icon} placeholder="icon" name="icon" onChange={e=>this.onChangeHandler(e,i)} className="">

                           </textarea><br/>
                           <textarea value={data.h1}  name="h1" onChange={e=>this.onChangeHandler(e,i)} className="landingScreen6__carousel-card-h1">

                           </textarea><br/>
                           <textarea value={data.h2}  name="h2" onChange={e=>this.onChangeHandler(e,i)} className="landingScreen6__carousel-card-h2">

                           </textarea><br/>
                           <hr className="hr"/>
                           <div className="landingScreen6__carousel-card-list">
                                {data.list.map((listItem,ii)=>{
                                  return <><div style={{position:"relative"}} key={ii} className="landingScreen6__carousel-card-list-item">
                                             <input onChange={e=>this.onChangeHandler2(e,i,ii)}  type="text" value={listItem} id=""/>
                                             <i onClick={()=>this.removeDetailHandler2(i,ii)} className="fa fa-remove fa-2x removeIcon" aria-hidden="true"></i>
                                          </div>
                                          <br/>
                                          </>
                                })}
                                <i onClick={(e)=>this.addDetailHandler2(i)}  className="fa fa-plus fa-1x addIcon addIcon1" aria-hidden="true"></i>
                           </div>
                       <i onClick={()=>this.removeDetailHandler(i)} className="fa fa-remove fa-2x removeIcon" aria-hidden="true"></i>
                      </div>

                    )
                  })}
                  <i onClick={()=>{this.sideScroll(document.getElementById('landingScreen6__carousel'),"right",5,320,5)}} id="slide" className="fa fa-angle-right landingScreen6__arrow landingScreen6__arrow--right" aria-hidden="true"></i>
             </div>
             <i onClick={this.addDetailHandler}  className="fa fa-plus fa-1x addIcon addIcon1" aria-hidden="true"></i>

         </div></>
     )
   }
 }


export default AdminLandingScreen6;
