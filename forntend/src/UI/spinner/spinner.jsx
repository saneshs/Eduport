import React, {Component} from "react"
import axios from "axios"

class Spinner extends Component{

  state={
    quote:""
  }

  componentDidMount=()=>{
    axios.get("https://quotes.rest/qod?language=en").then(res=>{
      this.setState({
        quote:res.data.contents.quotes[0].quote
      })
      // console.log(res);
    })
  }

  render(){

    return <div className="spinner">
              <div  className="spinner__text">We will reach out to you soon !!!!!</div>
              <div id="spinner__quote" className="spinner__text ">{this.state.quote}</div>
           </div>
  }
}


export default Spinner;
