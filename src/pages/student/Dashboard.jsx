import StatCard from "../../components/Overview/StatCard";
import Roadmap from "../../components/Overview/Roadmap";
import SubmissionItem from "../../components/Overview/SubmissionItem";

export default function Dashboard() {
    return (
        <div className="space-y-6">

            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold">Dashboard Overview</h1>
                    <p className="text-gray-500">
                        Welcome back, Alex. Your project is on track.
                    </p>
                </div>

                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                    + Submit Update
                </button>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-4 gap-6">
                <StatCard
                    title="Project Status"
                    value="Approved"
                    subtitle="✓ Fully validated"
                    color="text-green-500"
                />

                <div className="bg-white p-5 rounded-xl border">
                    <p className="text-gray-500 text-sm">Overall Progress</p>
                    <h2 className="text-xl font-semibold mt-2">75%</h2>
                    <div className="w-full bg-gray-200 h-2 mt-3 rounded">
                        <div className="bg-blue-600 h-2 w-[75%] rounded"></div>
                    </div>
                </div>

                <StatCard
                    title="Next Deadline"
                    value="Oct 20"
                    subtitle="Final Draft Submission"
                />

                <StatCard
                    title="Latest Feedback"
                    value="Review Received"
                    subtitle="Dr. Sarah Smith • 2h ago"
                />
            </div>

            {/* Roadmap */}
            <Roadmap />

            {/* Submissions */}
            <div className="bg-white p-6 rounded-xl border">
                <div className="flex justify-between mb-4">
                    <h2 className="font-semibold">Recent Submissions</h2>
                    <span className="text-gray-400 text-sm">Past 30 days</span>
                </div>

                <div className="space-y-4">
                    <SubmissionItem
                        name="Literature_Review_v2.pdf"
                        date="Submitted Oct 02 • 4.2 MB"
                        status="ACCEPTED"
                    />
                    <SubmissionItem
                        name="Initial_Prototype_Source.zip"
                        date="Submitted Sep 25 • 12.8 MB"
                        status="REVIEWED"
                    />
                </div>
            </div>

        </div>
    );
}