import React from "react";
import HeroSection from "./components/hero-section/hero-section";
import WeeklyProgress from "./components/weekly-progress/weekly-progress";
import TopCollection from "./components/top-collection/top-collection";
import Explore from "./components/explore/explore";
import Collector from "./components/collector/collector";
import FAQ from "./components/FAQ/FAQ";

const Second = () => {
  return (
    <div className="bg-stone-50">
      <HeroSection />
      <WeeklyProgress />
      <TopCollection />
      <Explore />
      <Collector />
      <img
        className="w-3/6 m-auto mt-90 flex"
        src="../../../src/pages/second/images/Join Community.png"
        alt=""
      />
      <FAQ />
    </div>
  );
};

export default Second;
