"use client";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
} from "chart.js";
import { Radar, Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale, PointElement, LineElement, Filler,
  Tooltip, Legend, CategoryScale, LinearScale, BarElement, ArcElement
);

const NEON = "rgba(57,255,20,1)";
const NEON_DIM = "rgba(57,255,20,0.4)";
const NEON_FILL = "rgba(57,255,20,0.12)";
const CYAN = "rgba(6,182,212,1)";
const CYAN_FILL = "rgba(6,182,212,0.12)";
const AMBER = "rgba(245,158,11,1)";
const AMBER_FILL = "rgba(245,158,11,0.12)";

const CHART_FONT = { family: "'JetBrains Mono', monospace", size: 11 };

// ── Skill Radar ───────────────────────────────────────────
export function SkillRadarChart() {
  const data = {
    labels: ["IoT", "FPGA/DSP", "VLSI", "Embedded", "Linux/Dev", "ASIC"],
    datasets: [
      {
        label: "Proficiency",
        data: [85, 80, 78, 92, 75, 68],
        backgroundColor: NEON_FILL,
        borderColor: NEON,
        borderWidth: 2,
        pointBackgroundColor: NEON,
        pointBorderColor: "rgba(57,255,20,0.5)",
        pointHoverBackgroundColor: "#fff",
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "rgba(3,8,5,0.96)",
        borderColor: "rgba(57,255,20,0.3)",
        borderWidth: 1,
        titleColor: NEON,
        bodyColor: "#4ade80",
        titleFont: CHART_FONT,
        bodyFont: CHART_FONT,
        callbacks: {
          label: (ctx: any) => ` ${ctx.parsed.r}%`,
        },
      },
    },
    scales: {
      r: {
        min: 0, max: 100,
        backgroundColor: "transparent",
        grid: { color: "rgba(57,255,20,0.08)" },
        angleLines: { color: "rgba(57,255,20,0.12)" },
        ticks: {
          color: "rgba(57,255,20,0.35)",
          font: { family: CHART_FONT.family, size: 9 },
          backdropColor: "transparent",
          stepSize: 25,
        },
        pointLabels: {
          color: "#4ade80",
          font: CHART_FONT,
        },
      },
    },
  };

  return <Radar data={data} options={options} />;
}

// ── Toolchain Bar Chart ───────────────────────────────────
export function ToolchainBarChart() {
  const data = {
    labels: ["Verilog", "SPICE", "Python", "MATLAB", "Vivado", "Cadence", "Arduino", "ESP32"],
    datasets: [
      {
        label: "Experience",
        data: [82, 78, 72, 70, 80, 75, 90, 88],
        backgroundColor: [
          NEON_FILL, CYAN_FILL, AMBER_FILL, NEON_FILL,
          CYAN_FILL, AMBER_FILL, NEON_FILL, CYAN_FILL,
        ],
        borderColor: [
          NEON, CYAN, AMBER, NEON, CYAN, AMBER, NEON, CYAN,
        ],
        borderWidth: 1,
        borderRadius: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "rgba(3,8,5,0.96)",
        borderColor: "rgba(57,255,20,0.3)",
        borderWidth: 1,
        titleColor: NEON,
        bodyColor: "#4ade80",
        titleFont: CHART_FONT,
        bodyFont: CHART_FONT,
        callbacks: {
          label: (ctx: any) => ` ${ctx.parsed.y}%`,
        },
      },
    },
    scales: {
      x: {
        grid: { color: "rgba(57,255,20,0.06)" },
        ticks: { color: "#4ade80", font: CHART_FONT },
        border: { color: "rgba(57,255,20,0.2)" },
      },
      y: {
        min: 0, max: 100,
        grid: { color: "rgba(57,255,20,0.06)" },
        ticks: {
          color: "rgba(57,255,20,0.4)",
          font: CHART_FONT,
          callback: (v: string | number) => `${v}%`,
        },
        border: { color: "rgba(57,255,20,0.2)" },
      },
    },
  };

  return (
    <div style={{ height: "240px" }} className="chart-container">
      <Bar data={data} options={options} />
    </div>
  );
}

// ── Domain Doughnut ───────────────────────────────────────
export function DomainDoughnutChart() {
  const data = {
    labels: ["IoT Systems", "VLSI Design", "Embedded Sys", "FPGA + DSP"],
    datasets: [
      {
        data: [28, 22, 30, 20],
        backgroundColor: [NEON_FILL, CYAN_FILL, "rgba(245,158,11,0.15)", "rgba(167,139,250,0.15)"],
        borderColor: [NEON, CYAN, AMBER, "#a78bfa"],
        borderWidth: 2,
        hoverBackgroundColor: [
          "rgba(57,255,20,0.25)", "rgba(6,182,212,0.25)",
          "rgba(245,158,11,0.25)", "rgba(167,139,250,0.25)",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    cutout: "72%",
    plugins: {
      legend: {
        position: "right" as const,
        labels: {
          color: "#4ade80",
          font: CHART_FONT,
          padding: 16,
          boxWidth: 10,
          boxHeight: 10,
        },
      },
      tooltip: {
        backgroundColor: "rgba(3,8,5,0.96)",
        borderColor: "rgba(57,255,20,0.3)",
        borderWidth: 1,
        titleColor: NEON,
        bodyColor: "#4ade80",
        titleFont: CHART_FONT,
        bodyFont: CHART_FONT,
        callbacks: {
          label: (ctx: { label: string; parsed: number }) => ` ${ctx.label}: ${ctx.parsed}%`,
        },
      },
    },
  };

  return <Doughnut data={data} options={options} />;
}
