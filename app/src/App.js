import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FormRegister from "./components/register/FormRegister";
import FormLogin from "./components/login/FormLogin";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register" component={FormRegister} />
          <Route exact path="/login" component={FormLogin} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
