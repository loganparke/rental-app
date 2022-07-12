import React from "react";
import ReactECharts from 'echarts-for-react';
import DasboardNav from "../dashboardNav";

function GuideInsights() {

  let pieOptions = {
    title: {
      text: "Section Views on 'Fish Creek Lodge'"
    },
    series: [
      {
        type: 'pie',
        data: [
          {
            value: 1,
            name: 'Wifi/Internet'
          },
          {
            value: 3,
            name: 'Local Food'
          },
          {
            value: 5,
            name: 'Check in/Check out'
          }
        ]
      }
    ]
  };

  let lineOptions = {
    title: {
      text: "App visits on 'Fish Creek Lodge'"
    },
    xAxis: {
      type: 'category',
      data: ['Jan, 2022', 'Feb, 2022', 'Mar, 2022']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 1500],
        type: 'line'
      }
    ]
  };

  return (
    //hardcoded for now but will call the API to display selected info with a map function of the data
    <div className="">
      <nav className="bg-cyan-800 text-white p-4 flex justify-between">
        <p className="text-3xl">🏕️</p>
        <a href="/Dashboard" className="bg-white p-3 rounded-full text-black" >Back to Dashboard</a>
        <p> </p>
      </nav>
      <div className="preview flex flex-wrap w-11/12 m-auto bg-white rounded shadow-md p-5 my-5 m-auto">
        <div className="w-full h-full">
        <ReactECharts option={pieOptions} />
        </div>

        <div className="w-full h-full">
        <ReactECharts option={lineOptions} />
        </div>

      </div>
    </div>
  );
};

export default GuideInsights;