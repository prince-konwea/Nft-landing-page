import React from "react";
import './App.css';
import BrandIntegration from "./components/BrandIntegration/brandintegration";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import InfoSection from "./components/InfoSection/infosection";
import Topfold from "./components/Topfold/topfold";
import TrendingNfts from "./components/TrendingNfts/trendingnfts";

const App = () => {
  return <div className="max-width">
    <Header />
    <Topfold />
    <BrandIntegration />
    <TrendingNfts />
    <InfoSection />
    <Footer />
  </div> 
}

export default App;
