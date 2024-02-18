import logo from './logo.svg';
import './App.css';
import Article from "./Components/article/Article";
import Brand from "./Components/brand/Brand";
import CTA from "./Components/cta/CTA";
import Feature from "./Components/feature/Feature";
import Navbar from "./Components/navbar/Navbar";
import Header from "./Containers/header/Header";
 
import WhatGpt3 from "./Containers/whatGPT3/WhatGpt3";
import Features from "./Containers/features/Feature";
import Possibility from "./Containers/possibility/Possibility";
 
import Footer from "./Containers/footer/Footer";
import Blog from "./Containers/blog/Blog";
import Featu from './Containers/Featu/Featu';

function App() {
  return (
    <div className="">
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGpt3/>
      <Featu/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
