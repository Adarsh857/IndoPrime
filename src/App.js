import "./App.scss";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MovieDetail from "./components/MovieDetail/MovieDetail";
function App() {
  return <div className="App">
    <Router>
      <Header></Header>
      <div class ="container">
      <Switch>

      <Route path ="/"  exact component={Home}/>
      <Route path ="/movie/:imbdID" component={MovieDetail}/>
      <Route component ={PageNotFound}/>
      </Switch>
      </div>
    </Router>
    <Footer/>
  </div>;
}

export default App;
