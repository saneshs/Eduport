import React, {Component} from "react"
import {NavLink, withRouter} from "react-router-dom"

class Navigation extends Component{

   state={
     show:false,
     value:""
   }

  modalHandler=()=>{
    if(this.state.show){
      this.setState({
        show:false
      })
    }else{
      this.setState({
        show:true
      })
    }
  }




  clickHandler=()=>{
    this.props.history.push("/");
  }

   componentDidMount=()=>{
this.repeat();
   }


   repeat=()=>{
    setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+" M"}});
    setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+"A"}});
    setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+"K"}});
    setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+"I"}});
    setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+"N"}});
    setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+"G"}});
    setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+" I"}});
    setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+"N"}});
    setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+"D"}});
    setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+"I"}});
    setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+"A"}});
    setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+" T"}});
    setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+"H"}});
    setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+"E"}});
    setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+" W"}});
    setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+"O"}});
    setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+"R"}});
    setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+"L"}});
    setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+"D"}});
    setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+"S"}});
    setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+"'s"}});
    setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+" F"}});
    setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+"A"}});
    setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+"C"}});
    setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+"T"}});
    setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+"O"}});
    setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+"R"}});
    setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+"Y"}});

    setTimeout(()=>{this.setState((prevState)=>{return{value:""}});

  this.repeat();
  },20000);
  },200);
  },200);
  },200);
  },200);
  },200);
  },200);
  },200);
  },200);
  },200);
  },200);
  },200);
  },200);
  },200);
  },200);
  },200);
  },200);
  },200);
  },200);
  },200);
  },200);
  },200);
  },200);
  },200);
  },200);
  },200);
  },200);
  },200);
  },200);
   }



  render(){
   let style = {...this.props.styles}
   style.color = "grey"

    return (
         <div  className="navigation">
            <div className="logo">
                 <div  onClick={this.clickHandler} className="logo__name">
                      <div className="logo__name-main">Eduport</div>
                      <div className="logo__name-secondary">By IndiaPort</div>
                 </div>
                 <div style={style} className="logo__tagline">
                      {/* Making India the World's factory */}
                      {this.state.value}
                 </div>
            </div>
            <nav  className="navigation__items">
                  <NavLink exact style={{color:style.color}} activeStyle={{color: "#0f3460",textDecoration:"underline"}} to="/"><div className="navigation__items-item">Home</div></NavLink>
                  <NavLink  style={{color:style.color}} activeStyle={{color: "#0f3460",textDecoration:"underline"}} to="/pricing"><div className="navigation__items-item">Pricing</div></NavLink>
                  <NavLink style={{color:style.color}} activeStyle={{color: "#0f3460",textDecoration:"underline"}} to="/aboutUs"><div className="navigation__items-item">About</div></NavLink>
                  <NavLink style={{color:style.color}} activeStyle={{color: "#0f3460",textDecoration:"underline"}} to="/blogs"><div className="navigation__items-item">blogs</div></NavLink>
                  <NavLink style={{color:style.color}} activeStyle={{color: "#0f3460",textDecoration:"underline"}} to="/contactUs"><div className="navigation__items-item">contact</div></NavLink>
            </nav>


         </div>
    )

  }
}


export default withRouter(Navigation);
