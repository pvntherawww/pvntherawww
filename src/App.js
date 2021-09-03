import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Code from './components/pages/Code';
import Blog from './blog/src/blog.js';
import SignUp from './components/pages/SignUp';
import './components/app/App.scss';
import HomePlayer from "./components/Home.js";
import {ThemeContext, themes} from "./components/Theme";
import musicDB from "./components/music";
import {useDispatch, useSelector} from "react-redux";
import {setPlaylist} from "./components/actions";
import {useEffect} from "react";
import PriceList from './components/pages/PriceList';

function App() {

  const {language} = useSelector(state => state.musicReducer);

    const dispatch = useDispatch();
    useEffect(()=>{
        if (language === null || language.includes("any")){
            dispatch(setPlaylist(musicDB))
        }
        else if (language.includes('hindi')){
            alert("No hindi tracks available")
        } else {
            let x = musicDB.filter((item)=>(
                item.lang && language.includes(item.lang.toLowerCase())
            ))
            dispatch(setPlaylist(x))
        }
    },[dispatch, language]);

  return (
    <>
    <ThemeContext.Provider value={themes.light}>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/music' component={HomePlayer} />
          <Route path='/pvntherawww' component={Code} />
          <Route path='/blog' component={Blog} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/pricelist' component={PriceList} />
        </Switch>
      </Router>
      </ThemeContext.Provider>
    </>
  );
}

export default App;