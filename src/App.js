import Home from "./Pages/Home";
import Mylist from "./Pages/Mylist";
import Search from "./Pages/Search";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Anime from "./Pages/Anime";
import Footer from "./Components/Footer";
function App() {
  return (
    <Appstyled>
      <Router>
        <Nav />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/mylist" exact component={Mylist} />
          <Route path="/search" exact component={Search} />
          <Route path="/vid_id/:any" exact component={Anime} />
        </Switch>
        <Footer />
      </Router>
    </Appstyled>
  );
}

const Appstyled = styled.div`
  background-image: linear-gradient(
    to bottom,
    #ffdb83,
    #ffe094,
    #fee4a4,
    #fee9b5,
    #fdedc5
  );
`;
export default App;
