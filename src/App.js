import './App.css';
import Home from './Components/Pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Posts from './Components/Posts/Posts';
import PostDetails from './Components/Pages/PostDetails';
import RestaurentPage from './Components/Pages/RestaurentPage';
import SingleRestaurentPage from './Components/Pages/SingleRestaurentPage';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="/home" >
            <Home />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/post/:postId">
            <PostDetails />
          </Route>
          <Route exact path="/restaurent">
            <RestaurentPage />
          </Route>
          <Route path="/restaurent/:restaurentId">
            <SingleRestaurentPage />
          </Route>
          <Route path="*">
            <h1>Invalid Link</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
