import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const TrophyChart = ({ trophies }) => {
  const completedCount = trophies.filter(trophy => trophy.isCompleted).length;
  const incompleteCount = trophies.length - completedCount;

  const data = {
    labels: ["Completed", "Incomplete"],
    datasets: [
      {
        label: "Trophies",
        data: [completedCount, incompleteCount],
        backgroundColor: ["#4CAF50", "#FF5733"], // Verde para completos, Vermelho para incompletos
        borderColor: ["#388E3C", "#C70039"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  };

  return (
    <div style={{ width: "500px", margin: "20px auto" }}>
      <h3>Trophies Completed vs. Incomplete</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default TrophyChart;
