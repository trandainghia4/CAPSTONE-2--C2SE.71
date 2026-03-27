import React, { useState } from "react";

const members = [
  {
    name: "Julian Sterling",
    id: "#GP-8829",
    topic: "Quantum Algorithmic Structures",
    desc: "Efficiency in Neural Networks",
    status: "ON TRACK",
    progress: 82,
  },
  {
    name: "Amara Okafor",
    id: "#GP-7412",
    topic: "Bio-Metric Data Security",
    desc: "Multi-factor Privacy Layers",
    status: "BEHIND",
    progress: 34,
  },
  {
    name: "Leo Chen",
    id: "#GP-1092",
    topic: "Sustainable Urban IoT",
    desc: "Energy Efficient Sensor Nets",
    status: "ON TRACK",
    progress: 61,
  },
  {
    name: "Elena Rodriguez",
    id: "#GP-3321",
    topic: "Ethics in NLP Models",
    desc: "Bias Detection Frameworks",
    status: "COMPLETED",
    progress: 100,
  },
  {
    name: "David Kim",
    id: "#GP-5521",
    topic: "AI in Healthcare",
    desc: "Diagnosis prediction models",
    status: "ON TRACK",
    progress: 75,
  },
  {
    name: "Sarah Lee",
    id: "#GP-6633",
    topic: "Blockchain Security",
    desc: "Smart contract auditing",
    status: "BEHIND",
    progress: 40,
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "ON TRACK":
      return "text-green-600";
    case "BEHIND":
      return "text-red-500";
    case "COMPLETED":
      return "text-blue-600";
    default:
      return "text-gray-500";
  }
};

const getProgressColor = (status) => {
  switch (status) {
    case "ON TRACK":
      return "bg-green-500";
    case "BEHIND":
      return "bg-red-500";
    case "COMPLETED":
      return "bg-blue-600";
    default:
      return "bg-gray-400";
  }
};

export default function Team() {
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 4;

  const totalPages = Math.ceil(members.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentData = members.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="p-6 space-y-6">

      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-800">
        Team Management
      </h1>

      {/* Filter */}
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-gray-100 rounded-lg text-sm">
            Filter by Group
          </button>
          <button className="px-4 py-2 bg-gray-100 rounded-lg text-sm">
            Progress Status
          </button>
          <button className="px-4 py-2 bg-gray-100 rounded-lg text-sm">
            2024 Academic Year
          </button>
        </div>

        <p className="text-sm text-gray-500">
          Showing {startIndex + 1}-{startIndex + currentData.length} of {members.length} students
        </p>
      </div>

      {/* List */}
      <div className="space-y-4">
        {currentData.map((m, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow-sm border flex items-center justify-between"
          >

            {/* Left */}
            <div className="flex items-center gap-4 w-1/3">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                👨‍🎓
              </div>
              <div>
                <p className="font-semibold">{m.name}</p>
                <p className="text-sm text-gray-400">
                  ID: {m.id}
                </p>
              </div>
            </div>

            {/* Middle */}
            <div className="w-1/3">
              <p className="text-xs text-gray-400">
                PROJECT & TOPIC
              </p>
              <p className="font-medium text-blue-600">
                {m.topic}
              </p>
              <p className="text-sm text-gray-400">
                {m.desc}
              </p>
            </div>

            {/* Progress */}
            <div className="w-1/4">
              <div className="flex justify-between text-sm mb-1">
                <span className={getStatusColor(m.status)}>
                  {m.status}
                </span>
                <span>{m.progress}%</span>
              </div>

              <div className="w-full bg-gray-200 h-2 rounded">
                <div
                  className={`h-2 rounded ${getProgressColor(m.status)}`}
                  style={{ width: `${m.progress}%` }}
                ></div>
              </div>
            </div>

            {/* Button */}
            <div className="w-1/6 text-right">
              <button className="px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-gray-200">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination (GIỮ UI, chỉ thêm logic) */}
      <div className="flex justify-center items-center gap-2 pt-4">

        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          &lt;
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          &gt;
        </button>

      </div>

    </div>
  );
}