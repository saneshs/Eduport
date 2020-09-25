import React, {Component} from "react"



class LandingScreen7 extends Component{

  state = {
    reviews: [

    ],
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
      <div className="landingScreen6__head landingScreen7__head">{this.state.reviewh1}</div>
        <div style={this.props.styles} className="landingScreen6 landingScreen7">
            <div  id="landingScreen6__carousel2" className="landingScreen6__carousel landingScreen7__carousel">
                <i onClick={()=>{this.sideScroll(document.getElementById('landingScreen6__carousel2'),"left",5,275,5)}} id="slide" className="fa fa-angle-left landingScreen6__arrow landingScreen6__arrow--left" aria-hidden="true"></i>
                 {this.state.reviews.map((data,i)=>{
                   return (
                     <div data-aos="slide-left" data-aos-once={true} data-aos-delay={100} key={i} id={"landingScreen6__"+i} className="landingScreen6__carousel-card landingScreen7__carousel-card landingScreen6__carousel-card-review">
                         <div className="landingScreen7__carousel-card-review">{data.comment} </div>
                         <div className="landingScreen7__carousel-card-name">{"-"+data.name}</div>
                         <div className="landingScreen7__carousel-card-rating">{data.rating} ⭐</div>
                     </div>
                   )
                 })}
                 <i onClick={()=>{this.sideScroll(document.getElementById('landingScreen6__carousel2'),"right",5,320,5)}} id="slide" className="fa fa-angle-right landingScreen6__arrow landingScreen6__arrow--right" aria-hidden="true"></i>
            </div>

        </div></>
    )
  }
}


export default LandingScreen7;
