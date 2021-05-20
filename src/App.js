
import './App.css';
import Login from './components/Login'
import StudentLandingPage from './components/StudentLandingPage'
import TeacherLandingPage from './components/TeacherLandingPage'
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
          <Route exact path="/TeacherLandingPage" render={() => {
           return(
              <TeacherLandingPage/>   
           );
         }}> 
          </Route>
        </Switch>

        
    </Router>
   
     
    
  );
}

export default App;
