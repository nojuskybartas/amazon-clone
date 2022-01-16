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
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Payment from "./components/Payment";
import Orders from "./components/Orders";

const promise = loadStripe(
  "pk_test_51JsTmMGrpCgv2QkXLd9M0wisKl0SGsgx2MvufgBnJm0MIiYDDHHd9fPX4GLqTrWO7FyAovBxX7fMoKLN9Q8DAoHz00cy1df20G"
);

function App() {

  const[{}, dispatch] = useStateValue();

  useEffect(() => {
    onAuthStateChanged(auth, authUser => {
      console.log('THE USER IS >>>', authUser)

      dispatch({
        type: 'SET_USER',
        user: authUser
      })

      // if (authUser) {
      //   dispatch({
      //     type: 'SET_USER',
      //     user: authUser
      //   })
      // } else {
      //   dispatch({
      //     type: 'SET_USER',
      //     user: null
      //   })
      // }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/' element={<><Header/><Home/></>}/>
          <Route path='/checkout' element={<><Header/><Checkout/></>}/>
          <Route path='/payment' element={<><Header/><Elements stripe={promise}><Payment/></Elements></>}/>
          <Route path='/orders' element={<><Header/><Orders/></>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='*' element={<div>Page not found</div>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
