import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function PriceGrowthChart({ products }) {
  if (!Array.isArray(products) || products.length === 0) {
    return <p style={{ textAlign: "center" }}>No data available for chart.</p>;
  }

  // ✅ Format data for chart
  const chartData = products.map((p) => ({
    name: p.name,
    Base: p.basePrice,
    Smart: p.smartPrice,
  }));

  return (
    <div
      style={{
        width: "80%",
        height: 350,
        marginBottom: "20px",
        background: "white",
        borderRadius: "12px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        padding: "40px",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "15px" }}>
        📈 Price Growth Comparison
      </h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis label={{ value: "KES", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Base"
            stroke="#8884d8"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="Smart"
            stroke="#82ca9d"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
