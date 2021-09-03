import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import UserPage from "../../containers/UserPage";

import "./Code.css"; 

import './bootstrap.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 

function Code() {
   
  // const [username, setUsername] = useState("");

  // useEffect(() => {
  //   if (username) setUsername(prompt("Enter github username"));
  // }, [username]);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:userName" to = "/pvntherawww" component={UserPage} />
        {/* <Redirect to="/pvntherawww" /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default Code;
