import React from "react";
import myStats from "../../data/myStats"
import { stat } from "fs";

const statsData = myStats.stats;

function MyQuickStats(props) {
  const stats = props.stats;
  return (
    <div className="level">
      {stats.map(stat=>
        
      <div key={stat.title} className="level-item has-text-centered">
      <div>
        <p className="heading">{stat.title}</p>
        <p className="title">{stat.value}</p>
      </div>
    </div>
        
        )}
    </div>
  );
}
export default function(props) {
  const {style} = props;
  return (
    <section className="section" style={style}>
      <MyQuickStats stats={statsData}/>
    </section>
  );
}
