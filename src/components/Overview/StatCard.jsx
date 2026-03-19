export default function StatCard({ title, value, subtitle, color }) {
    return (
        <div className="bg-white p-5 rounded-xl shadow-sm border">
            <p className="text-gray-500 text-sm">{title}</p>
            <h2 className="text-xl font-semibold mt-2">{value}</h2>
            {subtitle && (
                <p className={`text-sm mt-1 ${color || "text-gray-400"}`}>
                    {subtitle}
                </p>
            )}
        </div>
    );
}