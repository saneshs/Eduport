 import React, {Component} from "react"
import axios from "axios"

 class AdminFaq extends Component{

   state={
     head:"Want some clarification please go through our FAQs.",
     faqs:[
       {
         ques:"Do i need to purchase Power Router licenses for all users in my salesforce org?",
         ans:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, numquam dolores nostrum quidem nobis architecto, ab rerum debitis ducimus adipisci doloribus possimus, reiciendis ad ratione nisi vitae odit doloremque. Esse, minus unde consectetur animi reprehenderit eaque architecto cupiditate doloribus harum nam porro delectus ipsa nemo dolor aspernatur iusto eius, quidem sit ex, tempora facere non consequuntur neque sapiente! Nihil, adipisci, natus! Labore magni officiis, esse deleniti explicabo, sit ipsam impedit fugit aut omnis beatae delectus, eius, a inventore quia error deserunt doloremque fugiat quod. Earum voluptatum recusandae doloribus modi provident nihil possimus ipsam, alias esse! Fugit sunt quia repudiandae velit. ipsum dolor sit amet, consectetur adipisicing elit. Illum dicta dolorum perferendis. Ab libero rem accusamus, quam iste alias temporibus.",
       },
     ],
     addFaq:{
       ques:"",
       ans:"",
     }
   }

   componentDidMount=()=>{

    this.setState({faqs:this.props.faqs})

   }

   onSubmitHandler=()=>{

   }

   updateParentFaq=()=>{

    this.props.faqsHandler(this.state.faqs);

   }

   onChangeHandler=(e)=>{
      let newState = {...this.state.addFaq}
      newState[e.target.name]= e.target.value
      this.setState({
        addFaq:{...newState}
      })
   }


   showHandler=(i)=>{
     let newState = this.state
     newState.faqs[i].show = !newState.faqs[i].show
     this.setState({
       ...newState
     })
   }


   addFaqHandler=()=>{
      let newState= this.state
      if(newState.addFaq.ques.length!==0 && newState.addFaq.ans.length!==0){
        newState.faqs.push(newState.addFaq);
        newState.addFaq={ques:"",ans:""};
        this.setState({
          ...newState
        })
        this.updateParentFaq();
      }
    }


    removeFaqHandler=(i)=>{
     let newState= this.state
     newState.faqs.splice(i,1);
     this.setState({
        ...newState
     })
     this.updateParentFaq();
   }

   render(){
     return (
         <div className="faq faq__fix">
             <div style={{color:this.props.styles.color}} className="faq__head">{this.state.head}</div>
             <div className="faq__questions">
                 {this.state.faqs.map((data,i)=>{
                   return <div  className="faq__questions-item faq__questions-item-removeIcon">
                               <p >{data.ques}</p>
                               <h6>{data.ans}</h6>
                               <i onClick={()=>this.removeFaqHandler(i)} className="fa fa-remove fa-1x removeIcon" aria-hidden="true"></i>
                           </div>

                 })}
                 <div className="faq__questions-item faq__questions-item-form">
                        <input placeholder="add a question" onChange={this.onChangeHandler} value={this.state.addFaq.ques} name="ques" type="text"/>
                        <textarea placeholder="answer" onChange={this.onChangeHandler} value={this.state.addFaq.ans} name="ans" type="text"></textarea>
                        <i onClick={this.addFaqHandler}  className="fa fa-plus fa-1x addIcon addIcon1" aria-hidden="true"></i>
                 </div>
             </div>

         </div>
     )
   }
 }


export default AdminFaq;
