import React, { useState } from 'react';

export default function RegisterProject() {
  const [selectedTech, setSelectedTech] = useState([]);
  const [inputValue, setInputValue] = useState("");
  
  // Danh sách gợi ý sẵn
  const suggestions = ["Python", "TensorFlow", "React", "Node.js", "MongoDB"];

  // Hàm thêm công nghệ (dùng chung cho cả bấm và nhập)
  const addTech = (tech) => {
    const trimmedTech = tech.trim();
    if (trimmedTech && !selectedTech.includes(trimmedTech)) {
      setSelectedTech([...selectedTech, trimmedTech]);
    }
  };

  // Hàm xóa công nghệ
  const removeTech = (techToRemove) => {
    setSelectedTech(selectedTech.filter(tech => tech !== techToRemove));
  };

  // Xử lý khi nhấn Enter trong ô input
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Ngăn form submit linh tinh
      addTech(inputValue);
      setInputValue(""); // Xóa trống ô nhập sau khi thêm
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-slate-50 min-h-screen">
      <button className="flex items-center text-blue-600 font-semibold mb-4 text-sm hover:opacity-80 transition">
        <span className="mr-1">←</span> BACK TO DASHBOARD
      </button>

      <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Register New Project</h1>
      <p className="text-gray-500 mb-8">Submit project details for approval. Combine suggestions or type your own.</p>

      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-8">
        
        {/* Project Name & Description (Giữ nguyên) */}
        <div className="space-y-4">
            <div className="space-y-2">
                <label className="block font-bold text-slate-800">Project Name</label>
                <input type="text" placeholder="e.g., AI-Driven Traffic Management" className="w-full p-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition" />
            </div>
            <div className="space-y-2">
                <label className="block font-bold text-slate-800">Description</label>
                <textarea rows="3" placeholder="Overview of goals..." className="w-full p-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition" />
            </div>
        </div>

        {/* TECHNOLOGY STACK: VỪA CHỌN VỪA NHẬP */}
        <div className="space-y-4">
          <label className="block font-bold text-slate-800">Technology Stack</label>
          
          {/* 1. Khu vực bấm chọn nhanh (Suggestions) */}
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="text-sm text-gray-400 self-center mr-2 font-medium">Suggestions:</span>
            {suggestions.map((tech) => (
              <button
                key={tech}
                onClick={() => addTech(tech)}
                disabled={selectedTech.includes(tech)}
                className={`px-3 py-1 rounded-full text-xs font-semibold border transition ${
                  selectedTech.includes(tech)
                    ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                    : 'bg-blue-50 text-blue-600 border-blue-100 hover:bg-blue-600 hover:text-white'
                }`}
              >
                + {tech}
              </button>
            ))}
          </div>

          {/* 2. Ô nhập và hiển thị kết quả kết hợp */}
          <div className="w-full p-2 border border-gray-200 rounded-xl bg-gray-50 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-500 transition min-h-[56px] flex flex-wrap gap-2 items-center">
            {/* Hiển thị các tag đã chọn */}
            {selectedTech.map(tech => (
              <span key={tech} className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm flex items-center shadow-sm">
                {tech}
                <button onClick={() => removeTech(tech)} className="ml-2 hover:text-red-300 font-bold leading-none">×</button>
              </span>
            ))}
            
            {/* Ô input để gõ thêm */}
            <input 
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={selectedTech.length === 0 ? "Type tech and press Enter..." : "Add more..."}
              className="flex-1 bg-transparent border-none outline-none p-1 text-sm text-slate-700 min-w-[150px]"
            />
          </div>
          <p className="text-[11px] text-gray-400 italic font-medium">Tip: Click suggestions above OR type and press Enter for custom tech.</p>
        </div>

        {/* Info Box (Giữ nguyên) */}
        <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl border border-blue-100 italic">
          <p className="text-sm text-blue-700">📌 Faculty will review the stack once submitted.</p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-6 pt-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold shadow-lg shadow-blue-100 transition transform active:scale-95">
            Submit for Approval ▷
          </button>
          <button className="text-gray-400 font-bold hover:text-slate-600 transition">Save as Draft</button>
        </div>
      </div>
    </div>
  );
}