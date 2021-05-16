import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import "./App.scss";
import Home from "./components/Home";
import CoffeePage from "./components/coffeePage";
import TeaPage from "./components/teaPage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  TiSocialFacebookCircular,
  TiSocialInstagramCircular,
  TiSocialTwitterCircular,
  TiSocialGooglePlusCircular,
  TiLocationOutline,
} from "react-icons/ti";
import data from "./data.json"
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: data.drinks,
      
    };
  }
  // componentDidMount() {
  //   fetch("http://localhost:5000/api/drinks")
  //     .then((res) => res.json())
  //     .then((result) => {
  //       this.setState({
  //         drinks: result.drinks,
          
  //       });
  //     });
  // }
  render() {
    return (
      <Router>
      <div className="grid-container">
      

        <main>
          <Switch>
         <Route path="/" exact component={Home}></Route>
          <Route path="/coffee" ><CoffeePage drinks={this.state.drinks} /></Route>
         <Route path="/tea" > <TeaPage drinks={this.state.drinks}/></Route>
          </Switch>
        </main>



        <footer>
          <div className="media">
            <TiSocialFacebookCircular className="mediaImg" />
            <TiSocialInstagramCircular className="mediaImg" />
            <TiSocialTwitterCircular className="mediaImg" />
            <TiSocialGooglePlusCircular className="mediaImg" />
            <TiLocationOutline className="mediaImg" />
          </div>
          <div className="copyRight">Copyright © LybooShv 2021 </div>
        </footer>
      </div>
      </Router>
    );
  }
}

export default App;
