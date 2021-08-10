import { useEffect } from 'react';
import Router from './router/Router';
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);


  return (
    <>
      <Router />
    </>
  );
}

export default App;
