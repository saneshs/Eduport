 import React, {Component} from "react"
 import Aos from "aos"
 import "aos/dist/aos.css"

 class AdminPrice extends Component{

   state={
     data:[
       {
         h1:"Standard",
         p1:"All basic things for businesses that are just getting started.",
         price:"$10",
         p2:"user per month",
         list:[

         ],
         listItem:""
       },
       {
         h1:"Professional",
         p1:"Better insights for growing business that more customers.",
         price:"$15",
         p2:"custom",
         list:[

         ],
         listItem:""
       },{
         h1:"Premium",
         p1:"Advanced features for pros who need more customization.",
         price:"Custom",
         p2:"custom",
         list:[

         ],
         listItem:""
       },
     ]
   }

   updateParentPricings(){
     this.props.pricingsHandler(this.state.data);
   }

   componentDidMount=()=>{
     Aos.init({duration:1000});
     this.setState({data:this.props.pricings});
   }

   componentDidUpdate=()=>{
     Aos.init({duration:1000});
   }


   onChangeHandler=(e,id)=>{
     let newState = [... this.state.data]
     newState[id][e.target.name] = e.target.value
     this.setState({
       data:[...newState]
     })

     console.log(this.state.data)
     this.updateParentPricings();
   }

   onItemListChangeHandler=(e,i)=>{
         let newState = this.state.data
         console.log(newState[i].listItem);
         newState[i].listItem = e.target.value
         this.setState({
             data:[...newState]
         })
   }

   addListItemHandler=(i)=>{
      let newState= this.state
      if(newState.data[i].listItem.length!==0 ){
        newState.data[i].list.push(newState.data[i].listItem);
        newState.data[i].listItem="";
        this.setState({
          ...newState
        })
        this.updateParentPricings();

      }
    }


    removeListItemHandler=(i,ii)=>{
     let newState= this.state
     newState.data[i].list.splice(ii,1);
     this.setState({
        ...newState
     })
     this.updateParentPricings();

   }

   render(){

     return (
         <div className="price">
              {this.state.data.map((data,i)=>{
                return <div  className={"price__card "+"price__card-"+(i+1)}>
                           {i===1?<div className="price__card-mostPopular">-Most Popular-</div>:null}
                          <input onChange={(e)=>this.onChangeHandler(e,i)} name="h1" value={data.h1} data-aos="fade-down" data-aos-delay={(i===0||i===2)?10:0} data-aos-once={true} className="price__card-type" />
                          <input onChange={(e)=>this.onChangeHandler(e,i)} name="p1" value={data.p1} data-aos="fade-down" data-aos-delay={(i===0||i===2)?10:0} data-aos-once={true} className="price__card-typeDetail"/>
                          <input onChange={(e)=>this.onChangeHandler(e,i)} name="price" value={data.price} data-aos="fade-down" data-aos-delay={(i===0||i===2)?10:0} data-aos-once={true} className="price__card-price"/>
                          <input onChange={(e)=>this.onChangeHandler(e,i)} name="p2" value={data.p2} data-aos="fade-down" data-aos-delay={(i===0||i===2)?10:0} data-aos-once={true} className="price__card-time" />
                          {data.list.map((item,ii)=>{
                            return <div data-aos="fade-down" data-aos-delay={(i===0||i===2)?10:0} data-aos-once={true} className="price__card-list">
                                        <div className="price__card-list-tick"><i className="fa fa-check" aria-hidden="true"></i></div>
                                        <div className="price__card-list-item">{item}</div>
                                        <i onClick={()=>this.removeListItemHandler(i,ii)} className="fa fa-remove fa-1x removeIcon" aria-hidden="true"></i>
                                   </div>
                          })}
                          <div data-aos="fade-down" data-aos-delay={(i===0||i===2)?10:0} data-aos-once={true} className="price__card-list">
                                      <div className="price__card-list-tick"><i className="fa fa-check" aria-hidden="true"></i></div>
                                      <input name="listItem" value={this.state.data[i].listItem} onChange={(e)=>this.onItemListChangeHandler(e,i)} className="price__card-list-item"/><br/>
                                      <i onClick={()=>this.addListItemHandler(i)}  className="fa fa-plus fa-1x addIcon addIcon1" aria-hidden="true"></i>
                          </div>



                       </div>
              })}
         </div>
     )
   }
 }


export default AdminPrice;
