 import React, {Component} from "react"


 class Faq extends Component{

   state={
     head:"Want some clarification please go through our FAQs.",
     questions:[]
   }

   componentDidMount=()=>{

    this.setState({questions:this.props.faqs})
   
   }

   showHandler=(i)=>{
     let newState = this.state
     newState.questions[i].show = !newState.questions[i].show
     this.setState({
       ...newState
     })
   }

   render(){

     return (
         <div className="faq">
             <div style={{color:this.props.styles.color}} className="faq__head">{this.state.head}</div>
             <div className="faq__questions">
                 {this.state.questions.map((data,i)=>{
                   return <div onClick={()=>this.showHandler(i)} className="faq__questions-item">
                               <p >{data.ques} {data.show?<i className="renderAnimation doubleArrow fa fa-angle-double-down" aria-hidden="true"></i>:<i className="renderAnimation2 doubleArrow fa fa-angle-double-down" aria-hidden="true"></i>}</p>
                               <h6 style={{display:data.show?"block":"none"}} >{data.ans}</h6>
                           </div>
                 })}
             </div>
         </div>
     )
   }
 }


export default Faq;
