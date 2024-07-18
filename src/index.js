import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { AmdocNav } from './components/amdocNav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { About } from './components/About';
//import { Container } from '@mui/material';
import CustomerView from './components/view';
import SignIn from './components/SignIn';
import {Home} from './components/Home';
import { Provider } from 'react-redux';
import {store} from './redux/store'



const header = ReactDOM.createRoot(document.getElementById('header'));
// const body=ReactDOM.createRoot(document.getElementById('body'));
header.render(
  <React.StrictMode>
     <Provider store={store}>
     <Router>
    <AmdocNav />
      <Routes>
        <Route path="/"  Component={Home} />
        <Route exact path="/plans" Component={About}/>
        <Route exact path="/login"  Component={SignIn}/>
        <Route path="/contact"  />
        <Route exact path="/view" Component={CustomerView} />
      </Routes>
    </Router> 
     </Provider>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
