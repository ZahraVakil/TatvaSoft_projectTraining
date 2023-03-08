//import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Counter from './components/Counter';
import Title from './components/Title';
import About from './pages/About';
import { useState, React } from 'react';
import List from './components/List';
import Loginform from './components/Loginform';
import FocusInput from './components/FocusInput';
import RenderPropsComponent from './components/RenderPropsComponent';
import UserDetail from './components/UserDetail';
import Users from './components/Users';
import CounterHook from './components/CounterHook';

const App=()=> {



  //Day 5
  //const [currentpage,setcurrentpage]= useState(true);
     
  //   const buttonClicked=()=>{
  //     setcurrentpage(!currentpage);
  //   };
  
  
  // return (

  //   <div>
  //   {/* <button onClick={()=>buttonClicked()}>Home</button> */}
  //   <button onClick={()=>buttonClicked('about')}>Change Page</button>
  //   {currentpage ? <Home/> :<About/>}   
  //  </div>
  // );

  return(
    <div>
      <CounterHook/>
      <Users/>
      {/* <RenderPropsComponent render= {() => {
        return(
          <h3>I am coming from render props</h3>
        )
      }}/> */}

      {/* <Home/> */}
      {/* <FocusInput/> */}
      {/* <List/> */}
      {/* <Loginform/> */}
    </div>
  );
}

export default App;
