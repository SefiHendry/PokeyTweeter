import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FormRegister from "./components/register/FormRegister";
import FormLogin from "./components/login/FormLogin";
import Header from "./components/Header/Header";
import TweetBox from "./components/tweetBox/TweetBox";
import Profile from "./components/profile/Profile";

function App() {
  return (
    <div
      height="100%"
      className="App"
      style={{
        backgroundColor: "#191919",
        width: "100%",
        height: "100vh",
      }}
    >
      <BrowserRouter>
        {/* <SideBar /> */}
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register" component={FormRegister} />
          <Route exact path="/login" component={FormLogin} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/tweetBox" component={TweetBox} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
