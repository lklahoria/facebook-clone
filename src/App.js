import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Feed from "./Feed/Feed";
import Widgets from "./Widget/Widgets";
import Login from "./Login/Login";
import { useStateValue } from "./StateProvider1/StateProvider";

function App() {

  const  [{ user }, dipstch] = useStateValue();

  return (
    <div className="app">
      { !user ? <Login /> : (
        <>
         <Header />

         <div className="app__body">
           <Sidebar />
   
           <Feed />
   
           <Widgets />
         </div>
         </>
      )}
     
    </div>
  );
}

export default App;
