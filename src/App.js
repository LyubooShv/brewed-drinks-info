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
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coffees: [],
      teas: [],
    };
  }
  componentDidMount() {
    fetch("./data.json")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          coffees: result.coffees,
          teas: result.teas,
        });
      });
  }
  render() {
    return (
      <Router>
      <div className="grid-container">
      

        <main>
          <Switch>
         <Route path="/" exact component={Home}></Route>
          <Route path="/coffee" ><CoffeePage coffees={this.state.coffees} /></Route>
         <Route path="/tea" > <TeaPage teas={this.state.teas}/></Route>
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
