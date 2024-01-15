import React from "react";
import "../App.css";
import ValuesHeader from "../components/Values/ValuesHeader";
import Section from "../components/Values/Section";

import Philosophy from "../components/Values/Philosophy";

function Values() {
  return (
    <>
      <ValuesHeader />
      <Section />
      <Philosophy />
    </>
  );
}

export default Values;
