import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from "./Sidebar"
import Feed from './Feed'
import Widgets from './Widgets'
import Login from './Login'
import { useStateValue } from './StateProvider';


function App() {
  const [{ user }, dispatch] = useStateValue();
  console.log(user,"user is here");
  // const user = "jitu"
  return (
    //BEM naming convention
    <div className = "app" > {
      !user ? ( <Login / >
      ) : ( 
        <>
        {/* Header */} 
        <Header/> 
        {/* App body */} 
        <div className = "app__body" > 
        {/* Sidebar */} 
        <Sidebar/> 
        {/* feed */} 
        <Feed/> 
        {/* Widgets */} 
        <Widgets/>
        </div>   
        </>
      )
    } 
    {/* <h1>Lets build the facebook clone!</h1> */} 
    </div>
  );
}

export default App;