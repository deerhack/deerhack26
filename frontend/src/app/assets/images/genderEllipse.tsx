"use client"
import { ReactElement, useEffect, useRef, useState } from "react";
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
  const [hasAnimated, setHasAnimated] = useState(false);
  const chartRef = useRef<ChartJS<"doughnut">>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const data = {
    labels: ["Male", "Female", "+10%"],
    datasets: [
      {
        data: [75, 15, 10],
        backgroundColor: [
          "rgba(117, 51, 204, 0.77)",
          "rgba(157, 75, 173, 1)",
          "rgba(235, 140, 253, 1)",
        ],
        hoverBackgroundColor: ["#3B267B", "#E08CF5", "rgba(157, 75, 173, 1)"],
        borderWidth: 0,
      },
    ],
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;
    const chart = chartRef.current;
    if (!chart) return;

    chart.config.options!.animation = {
      duration: 1500,
      easing: "easeInOutQuart",
      animateRotate: true,
      animateScale: true,
    };
    chart.data = data;
    chart.update();
  }, [hasAnimated]);

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

  const options: ChartOptions<"doughnut"> = {
    animation: {
      duration: 1500,
      animateRotate: true,
      animateScale: true,
    },
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
          title: (context) => {
            const index = context[0].dataIndex;
            if (index === 1 || index === 2) return "Female";
            return "Male";
          },
          label: (context) => {
            if (context.dataIndex === 1 || context.dataIndex === 2) {
              return "25%";
            }
            return `75%`;
          },
        },
      },
    },
  };

  return (
    <div ref={containerRef} style={{ width, height }} className={className}>
      <Doughnut ref={chartRef} data={{ labels: [], datasets: [] }} options={options} />
    </div>
  );
}