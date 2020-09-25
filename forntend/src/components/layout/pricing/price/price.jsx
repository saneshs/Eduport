 import React, {Component} from "react"
 import Aos from "aos"
 import "aos/dist/aos.css"

 class Price extends Component{

   state={
     data:[

     ]
   }

   componentDidMount=()=>{
    Aos.init({duration:1000});
    this.setState({data:this.props.pricings});
  }

   componentDidUpdate=()=>{
     Aos.init({duration:1000});
   }

   render(){

     return (
         <div className="price">
              {this.state.data.map((data,i)=>{
                return <div  className={"price__card "+"price__card-"+(i+1)}>
                           {i===1?<div className="price__card-mostPopular">-Most Popular-</div>:null}
                          <div data-aos="fade-down" data-aos-delay={(i===0||i===2)?10:0} data-aos-once={true} className="price__card-type">{data.h1}</div>
                          <div data-aos="fade-down" data-aos-delay={(i===0||i===2)?10:0} data-aos-once={true} className="price__card-typeDetail">{data.p1}</div>
                          <div data-aos="fade-down" data-aos-delay={(i===0||i===2)?10:0} data-aos-once={true} className="price__card-price">{data.price}</div>
                          {data.type==="Premium"? <div data-aos="fade-down" data-aos-delay={(i===0||i===2)?10:0} data-aos-once={true} className="price__card-time">pricing</div>:<div data-aos="fade-down" data-aos-delay={(i===0||i===2)?10:0} data-aos-once={true} className="price__card-time">{data.p2}</div>}
                          <div className={i===1?"lastminpricelist lastminpricelist2":"lastminpricelist"}>
                          {data.list.map(item=>{
                            return <div data-aos="fade-down" data-aos-delay={(i===0||i===2)?10:0} data-aos-once={true} className="price__card-list">
                                        <div className="price__card-list-tick"><i className="fa fa-check" aria-hidden="true"></i></div>
                                        <div className="price__card-list-item">{item}</div>
                                   </div>
                          })}
                          </div>
                          <button data-aos="fade-down" data-aos-delay={(i===0||i===2)?10:0} data-aos-once={true} className={i===1?"btn btn-blue price__card--btn btn-blue-2":"btn btn-blue price__card--btn"}>Start Free Trial</button>
                       </div>
              })}
         </div>
     )
   }
 }


export default Price;
