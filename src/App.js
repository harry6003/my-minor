
import './App.css';
import Login from './components/Login'
import StudentLandingPage from './components/StudentLandingPage'
import Home from "./components/Home"
import Classroom from "./components/Classroom"
import About from './components/About';
import {

  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";

function App() {
  return (
    <Router>
         <Switch>
         <Route exact path="/" render={() => {
           return(
              <Login/>   
           );
         }}> 
          </Route>
          <Route exact path="/StudentLandingPage" render={() => {
           return(
              <StudentLandingPage/>   
           );
         }}> 
          </Route>
         
          <Route exact path="/About" render={() => {
           return(
              <About/>   
           );
         }}> 
          </Route>
          <Route exact path="/Home" render={() => {
           return(
              <Home/>   
           );
         }}> 
          </Route>
          <Route exact path="/Classroom" render={() => {
           return(
              <Classroom/>   
           );
         }}> 
          </Route>
        </Switch>

        
    </Router>
   
     
    
  );
}

export default App;
