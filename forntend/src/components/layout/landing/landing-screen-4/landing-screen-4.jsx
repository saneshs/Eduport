 import React, {Component} from "react"


 class LandingScreen4 extends Component{


   state={
     data:[
       {
         for:"Students",
         detail:"International trade is one of the top industries of the new millennium. One can not just help in the growth of nations economy but, largely contribute to its profit."
       },
       {
         for:"Professionals",
         detail:"while importing products can reduce costs, exporting products guarantee an increase in sale. Exporting product or working as an import-export agent, this industry offers exciting and fulfilling opportunities."
       },
       {
         for:"Entrepreneurs",
         detail:"Exporting products is good to increase business. Instead of earning finance by selling products only in the local market, an entrepreneur can take its business abroad and discover new opportunities, diversify risk and make money internationally"
       }
     ]
   }


   render(){

     return (
         <div id="screen4" style={this.props.styles} className="landingScreen4">
                <div className="landingScreen3__head">Who can Enroll!</div>
                {this.state.data.map(data=>{
                  return <div className="landingScreen4__data"><strong>{data.for}</strong> - {data.detail}</div>
                })}
         </div>
     )
   }
 }


export default LandingScreen4;
