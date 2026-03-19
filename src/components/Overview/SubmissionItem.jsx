export default function SubmissionItem({ name, date, status }) {
    return (
        <div className="flex items-center justify-between p-3 border rounded-lg">
            <div>
                <p className="font-medium">{name}</p>
                <p className="text-sm text-gray-400">{date}</p>
            </div>

            <span className={`
                px-3 py-1 rounded-full text-sm
                ${status === "ACCEPTED" && "bg-green-100 text-green-600"}
                ${status === "REVIEWED" && "bg-blue-100 text-blue-600"}
            `}>
                {status}
            </span>
        </div>
    );
}