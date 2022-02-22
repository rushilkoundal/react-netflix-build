import React from 'react';
import './App.css';
import HomeScreen from './screen/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from './screen/LoginScreen';
import { useAuth } from './firebase';
import ProfileScreen from './screen/ProfileScreen';
// import { useDispatch, useSelector } from 'react-redux';
// import { login, logout, selectUser } from './features/userSlice';

function App() {
  let user = useAuth();
  console.log(user);
  // const dispatch = useDispatch();
  // const currentUser = authRecognize();

  // if (userAuth) {
  //   dispatch(login({
  //     uid: userAuth.uid,
  //     email: userAuth.email
  //   }));
  // }
  // else {
  //   dispatch(logout);
  // }

  return (
    <div className="app">
      <Router>
        {(!user) ? (
          <LoginScreen />
        ) : (<Routes>
          <Route exact path="/" element={<HomeScreen />}></Route>
          <Route exact path="/profile" element={<ProfileScreen />}></Route>
        </Routes>)}
      </Router>
    </div>
  );
}

export default App;
