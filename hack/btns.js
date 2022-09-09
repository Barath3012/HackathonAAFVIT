// import React, { Component } from "react";
// import {Route,Router,NavLink,HashRouter,BrowserRouter} from "react-router-dom";
// import Contact from "./components/Contact";
// import Home from "./components/Home";
// import EnquiryResult from "./components/EnquiryResult";
// import logo from './logo.svg';

// class MainStack extends Component {

//   onClick(){
//    // browserHistory.push("/EnquiryResult");
// }

//   render() {
//     return (
//         <div>
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <div>
//           <button className="btn" onClick={this.onClick.bind(this)}>Enquiry </button>
//           </div>

//           <ul className="header">
//             <li><NavLink  to="/contact">Contact </NavLink></li>
//             <li><NavLink  to="/Home">Home </NavLink></li>
//           </ul>

//           <div>
//             <Route path="/Home" component={Home}/>
//             <Route path="/contact" component={Contact}/>
//             <Route path="/EnquiryResult" component={EnquiryResult}/>

//         </div>
//         </div>
//     );
//   }
// }

// export default MainStack;