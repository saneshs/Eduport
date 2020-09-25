import React, {Component} from "react"


class AdminLandingScreen7 extends Component{

  state = {
   reviews: [

   ],
   dataInput:{

       name:"",
       comment:"",
       rating:""

   },
   reviewh1:"",
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


 onChangeHandler=(e,i)=>{
   let reviews= [... this.state.reviews]
   let review=reviews[i];
   review[e.target.name]=e.target.value;
   this.setState({
     reviews:reviews
   })
   this.parentUpdateHandler();

 }

 addDetailHandler=()=>{
    let newState= {... this.state};
    let dataInput={ name:"",
    comment:"",
    rating:""}
    this.setState({dataInput:dataInput})
      newState.reviews.push(dataInput);
      this.setState({
        ...newState
      })
      this.parentUpdateHandler();


  }


  removeDetailHandler=(i)=>{
   let newState= this.state
   newState.reviews.splice(i,1);
   this.setState({
      ...newState
   })
   this.parentUpdateHandler();
 }


 parentUpdateHandler=()=>{
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
      <textarea value={this.state.reviewh1} onChange={(e)=>{this.setState({reviewh1:e.target.value});this.parentUpdateHandler();}} className="landingScreen6__head landingScreen7__head"></textarea>
        <div style={this.props.styles} className="landingScreen6 landingScreen7">
            <div  id="landingScreen6__carousel2" className="landingScreen6__carousel landingScreen7__carousel">
                <i onClick={()=>{this.sideScroll(document.getElementById('landingScreen6__carousel2'),"left",5,275,5)}} id="slide" className="fa fa-angle-left landingScreen6__arrow landingScreen6__arrow--left" aria-hidden="true"></i>
                 {this.state.reviews.map((data,i)=>{
                   return (
                     <div style={{position:"relative"}} data-aos="slide-left" data-aos-once={true} data-aos-delay={100} key={i} id={"landingScreen6__"+i} className="landingScreen6__carousel-card landingScreen7__carousel-card  landingScreen6__carousel-card-review">
                         <textarea value={data.comment}  name="comment" onChange={(e)=>{this.onChangeHandler(e,i)}} className="landingScreen7__carousel-card-review"> </textarea><br/>
                         <textarea value={data.name} name="name" onChange={(e)=>{this.onChangeHandler(e,i)}} className="landingScreen7__carousel-card-name"></textarea><br/>
                         <textarea value={data.rating}   name="rating" onChange={(e)=>{this.onChangeHandler(e,i)}} className="landingScreen7__carousel-card-rating"> ⭐</textarea><br/>
                          <i onClick={()=>this.removeDetailHandler(i)} className="fa fa-remove fa-2x removeIcon" aria-hidden="true"></i>
                     </div>
                   )
                 })}
                 <i onClick={()=>{this.sideScroll(document.getElementById('landingScreen6__carousel2'),"right",5,320,5)}} id="slide" className="fa fa-angle-right landingScreen6__arrow landingScreen6__arrow--right" aria-hidden="true"></i>
            </div>
              <i onClick={this.addDetailHandler}  className="fa fa-plus fa-1x addIcon addIcon1" aria-hidden="true"></i>
        </div></>
    )
  }
}


export default AdminLandingScreen7;
