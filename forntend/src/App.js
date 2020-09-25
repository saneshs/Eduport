import React from 'react';
import './App.scss';
import ErrorBoundary from "./error-boundary/error-boundary"
import Layout from "./components/layout/layout"
import "aos/dist/aos.css"
import Aos from "aos"
import {Helmet} from "react-helmet"
import axios from 'axios';


class App extends React.Component {

   state={
     background1:"#fff",
     background2:"#DCDCDC",
     fontColor:"#000",
     authenticated:false
   }


   styleHandler=(e)=>{
    this.setState({[e.target.name]:e.target.value});
  }


  componentDidMount=()=>{
    Aos.init({duration:1000});
    window.scrollTo({top:0,behavior:"smooth"});
    axios.interceptors.response.use(response =>{
      let authorization=response.headers.authorization;
      if(authorization){
      axios.defaults.headers.common['authorization'] = authorization;
    this.setState({authenticated:true});
    }
      return response;});
  }


  componentDidUpdate=()=>{
    Aos.init({duration:1000});
  }


  render(){
    // #f9f7d9
    // #f1f3f8
    const styles = {
      background1:this.state.background1,
      background2:this.state.background2,
      color:this.state.fontColor
    }

    return (
      <ErrorBoundary>
      <Helmet>
            <meta charSet="utf-8" />
            <title>{"Eduport By IndiaPort"}</title>
            <link rel="canonical" href={"http://eduports.in"} />
            <meta name="description" content={"making india world's factory"} />
        </Helmet>
      <div style={{color:this.state.color}} className="App">
      <Layout authenticated={this.state.authenticated} styleHandler={this.styleHandler} styles={styles}/>

      </div>
      </ErrorBoundary>
    );
  }
}

export default App;
