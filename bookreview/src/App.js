// import React from 'react'
// import './App.css';
// import {BrowserRouter as Router,Routes,Route, Link} from "react-router-dom";
// // import Navbar from './component/nav';
// import Home from './loginpage/home';
// import Start from './loginpage/login';
// import End from './loginpage/register';
// const App = () => {
//   return (
//       <div className="app">
//           <Router>
//             <nav>
//               <ul >
//                 <li >
//             <Link to="/">HOME</Link>
//             </li>
//             <li >
//               <Link to="/Login" >LOGIN</Link>
//               </li>
//               <li>
//               <Link to="/Register">REGISTER</Link>
//               </li>
//               </ul>
//               </nav>
//               <Routes>
//                 <Route exact path="/" element={ <Home/>}/>
//                     <Route exact path="/Login" element={ <Start/>} />
//                     <Route path="/Register" element={ <End />} />
//                     </Routes>
//             </Router>
           
//         </div>
//     )
//   }
//   export default App;
import './App.css';
import Start from './loginpage/login';





function App() {
  return (
    <div>
     <Start/>
    </div>
  )
}

export default App;
