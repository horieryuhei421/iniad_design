import React from "react";
import background from "./public/デザイン演習1_pic.jpg";


const Top = () => {
  return (
    <section className="top_flame">
      <section className="top" style={{ backgroundImage: `url(${background})` }}>
        <div className="top_back">
          <h1>全国高等学校野球選手権大会</h1>
          <h1>（甲子園）</h1>
        </div>
      </section>
    </section>
  )
};

export default Top;