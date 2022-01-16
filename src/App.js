import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
import { auth } from "./lib/firebase";
import { useStateValue } from "./StateProvider";

function App() {

  const[{}, dispatch] = useStateValue();

  useEffect(() => {
    onAuthStateChanged(auth, authUser => {
      console.log('THE USER IS >>>', authUser)

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/' element={<><Header/><Home/></>}/>
          <Route path='/checkout' element={<><Header/><Checkout/></>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='*' element={<div>Page not found</div>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
