import React from "react";
import "./App.scss";
import Home from "./components/Home";
import {
  TiSocialFacebookCircular,
  TiSocialInstagramCircular,
  TiSocialTwitterCircular,
  TiSocialGooglePlusCircular,
  TiLocationOutline,
} from "react-icons/ti";
function App() {
  return (
    <div className="grid-container">
      <header>Brewed Drinks Info</header>
      <main>
        <Home />
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
  );
}

export default App;
