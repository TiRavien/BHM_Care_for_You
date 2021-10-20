import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Services from './Components/Services/Services';
import Home from './Components/HomePage/Home/Home';
import Navber from './Components/HomePage/Navber/Navber';
import Footer from './Components/HomePage/Footer/Footer';
import About from './Components/About Us/About';
import Login from './Components/Login/Login/Login';
import Register from './Components/Login/Register/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AuthProvider from './Context/AuthProvider';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import Details from './Components/Details/Details/Details';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navber></Navber>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/details/:serviceId">
              <Details></Details>
            </PrivateRoute>
            <Route path="/features">
              <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
