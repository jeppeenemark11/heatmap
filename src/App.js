import { useEffect, useState } from 'react';
import './App.css';
import * as d3 from 'd3';
import data from "./data.js"
import Legend from './legend';



const mathToMonth = (month) => {
  if (month === 1) {
    return "January";
  } else if (month == 2) {
    return "February";
  } else if (month == 3) {
    return "March";
  } else if (month == 4) {
    return "April";
  } else if (month == 5) {
    return "May";
  } else if (month == 6) {
    return "June";
  } else if (month == 7) {
    return "July";
  } else if (month == 8) {
    return "August";
  } else if (month == 9) {
    return "September";
  } else if (month == 10) {
    return "October";
  } else if (month == 11) {
    return "November";
  } else if (month == 12) {
    return "December";
  }
};

const displayOrder = (variance) => {
  if (Math.floor(variance + 8.66) >= Math.floor(8.66 - variance)){
    return Math.floor(8.66 - variance) + "℃" + " to " + Math.floor(variance + 8.66) + "℃";
  } else { 
    return Math.floor(variance + 8.66) + "℃" + " to " + Math.floor(8.66 - variance) + "℃";
  }
};

function App() {

 const dataSet = data;


  return (
    <div>

      <h1 id="title">Monthly Global Land-Surface Temperature</h1>
      <h3>1753 - 2015: base temperature 8.66℃</h3>
      <div className='visHolder'>
      <Chart
            data={dataSet}
            height={400} 
            widthOfBar={4} 
            width={dataSet.length * 0.4} 
            dataType={"Date"}
            />

            <Legend />
      </div>
      
    </div>
);
}

function Chart ({data, height, width, widthOfBar, dataType}){
  useEffect(() => {
createChart();
  }, [data])

const createChart = () => {
  const year = data.map((obj) => { return obj.year});
  const month = data.map((obj) => { return obj.month});
  const variance = data.map((obj) => {return obj.variance});
  const baseTemperature = 8.66;

  

  let tooltip = d3.select(".visHolder").append("div").attr("id", "tooltip").style("opacity", 0)

  const yearMax = d3.max(year);
  const yearMin = d3.min(year);
  const monthMax = d3.max(month);
  const monthMin = d3.min(month);
  

  const Yscale = d3.scaleLinear().domain([monthMin, monthMax]).range([height, 30])
  const Xscale = d3.scaleLinear().domain([yearMin, yearMax]).range([0, width]);

  d3.select("svg").attr("id", "toolti").selectAll("rect").data(variance).enter().append("rect")
  d3.select("svg").selectAll("rect").data(variance).style("fill", (d, i) => {
    if (d < -4.67) return "#00008B";
    if (d <= -3.66 && d > -4.67) return "#ADD8E6";
    if (d <= -2.56 && d > -3.66) return "#B0E0E6";
    if (d <= -1.46 && d > -2.56) return "#BFEFFF";
    if (d <= -0.36 && d > -1.46) return "#FFFF00";
    if (d <= 0.84 && d > -0.36) return "#FFC100";
    if (d <= 1.94 && d > 0.84) return "#FFA500";
    if (d <= 3.04 && d > 1.94) return "#FF4500";
    return "#FF4500"; 
  });

 
  d3.select("svg").selectAll("rect").data(year).attr("x", (d, i) => Xscale(year[i]));


  d3.select("svg").selectAll("rect").data(month).attr("y", (d, i) => height - Yscale(month[i]))
  .attr("height", "35px")
 
  
  
  .attr("width", widthOfBar).on("mouseover", (d, i) => {
    tooltip.style("opacity", 0.9);
    
    tooltip.html(mathToMonth(data[i].month) + " " + data[i].year + "<br>Range: " + displayOrder(data[i].variance) )
    .style("left", d3.event.pageX - 80 + "px")
    .style("top", d3.event.pageY - 150 + "px");
  });

};

return (
  <>
  <svg width={width} height={height}> </svg>
  </>
)

}


export default App;

