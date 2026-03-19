const steps = [
    { title: "Proposal", status: "done" },
    { title: "Research", status: "done" },
    { title: "Development", status: "active" },
    { title: "Final Draft", status: "upcoming" },
    { title: "Defense", status: "upcoming" },
];

export default function Roadmap() {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex justify-between mb-6">
                <h2 className="font-semibold text-gray-700">Project Roadmap</h2>
                <span className="text-blue-500 text-sm cursor-pointer">
                    View All Details
                </span>
            </div>

            <div className="relative flex items-center justify-between">
                {/* Line nền */}
                <div className="absolute top-3 left-0 right-0 h-1 bg-gray-200"></div>

                {/* Line progress */}
                <div className="absolute top-3 left-0 h-1 bg-blue-600 w-[50%]"></div>

                {steps.map((step, index) => (
                    <div key={index} className="relative z-10 flex flex-col items-center w-full">
                        <div className={`
                            w-6 h-6 rounded-full
                            ${step.status === "done" && "bg-blue-600"}
                            ${step.status === "active" && "border-4 border-blue-600 bg-white"}
                            ${step.status === "upcoming" && "bg-gray-300"}
                        `}></div>

                        <p className="mt-2 text-sm">{step.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}