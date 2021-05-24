import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import "./App.scss";
import Home from "./components/Home";
import CoffeePage from "./components/coffeePage";
import TeaPage from "./components/teaPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  TiSocialFacebookCircular,
  TiSocialInstagramCircular,
  TiSocialTwitterCircular,
  TiSocialGooglePlusCircular,
  TiLocationOutline,
} from "react-icons/ti";
import store from "./store";
import { Provider } from "react-redux";
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="grid-container">
            
            <main>
              <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/drinks" component={CoffeePage}></Route>
                <Route path="/tea" component={TeaPage}></Route>
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
              <footer className="copyRight">Copyright © LybooShv 2021 </footer>
            </footer>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
