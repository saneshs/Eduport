import React, {Component} from "react"
import pic from "../../../../assets/images/screen1.svg"



 class LandingScreen6 extends Component{

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
          },
          loading:true,
  }

  componentDidMount=()=>{

    if(this.props.content)
    this.setState({...this.props.content });

  }

  componentDidUpdate=()=>{
   if(this.state.loading && this.props.content)
   this.setState({...this.props.content,loading:false})

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
                      <div data-aos="slide-left" data-aos-once={true} data-aos-offset="100px" data-aos-delay={100} key={i} id={"landingScreen6__"+i} className="landingScreen6__carousel-card landingScreen6__carousel-card-module">
                           <div className="landingScreen6__carousel-card-icon">
                                 <i className={"fa fa-"+data.icon} aria-hidden="true"></i>
                           </div>
                           <div className="landingScreen6__carousel-card-h1">
                                 {data.h1}
                           </div>
                           <div className="landingScreen6__carousel-card-h2">
                                  {data.h2}
                           </div>
                           <hr className="hr"/>
                           <div className="landingScreen6__carousel-card-list">
                                {data.list.map((listItem,lI)=>{
                                  return <div key={lI} className="landingScreen6__carousel-card-list-item">
                                                {listItem}
                                          </div>
                                })}
                           </div>

                      </div>
                    )
                  })}
                  <i onClick={()=>{this.sideScroll(document.getElementById('landingScreen6__carousel'),"right",5,320,5)}} id="slide" className="fa fa-angle-right landingScreen6__arrow landingScreen6__arrow--right" aria-hidden="true"></i>
             </div>

         </div></>
     )
   }
 }


export default LandingScreen6;
