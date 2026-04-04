"use client"
import { ReactElement } from "react";
import { useState, useRef } from "react";
import { ChartOptions, Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function GenderEllipseSVG({
  height = 315,
  width = 315,
  className = "",
}: {
  height?: number;
  width?: number;
  className?: string;
}): ReactElement {
  const [visible, setVisible] = useState({ male: true, female: true });
  const chartRef = useRef<ChartJS<"doughnut">>(null);

  const handleToggle = (gender: "male" | "female") => {
    const chart = chartRef.current;
    if (!chart) return;

    if (gender === "male") {
      chart.toggleDataVisibility(0);
      setVisible((prev) => ({ ...prev, male: !prev.male }));
    } else {
      chart.toggleDataVisibility(1);
      chart.toggleDataVisibility(2);
      setVisible((prev) => ({ ...prev, female: !prev.female }));
    }
    chart.update();
  };

  const data = {
    labels: ["Male", "Female", "Female"],
    datasets: [
      {
        data: [75, 15, 10],
        backgroundColor: [
          "rgba(117, 51, 204, 0.77)",
          "rgba(157, 75, 173, 1)",
          "rgba(235, 140, 253, 1)",
        ],
        hoverBackgroundColor: ["#3B267B", "#E08CF5", "#951AAD"],
        borderWidth: 0,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    rotation: 90,
    maintainAspectRatio: false,
    cutout: "60%",
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: "#110C24",
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: "#D977F2",
        borderWidth: 1,
        displayColors: false,
        callbacks: {
          label: (context) => {
            if (context.dataIndex === 1) return " Female: 25%";
            if (context.dataIndex === 2) return "Female: 25%";
            return ` ${context.label}: 75%`;
          },
        },
      },
    },
  };

  return (
    <div style={{ width, height }} className={className}>
      <Doughnut ref={chartRef} data={data} options={options} />
    </div>
  );
}