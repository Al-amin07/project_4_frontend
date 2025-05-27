export default function TableLoader({ text }: { text: string }) {
    return (

        <div className="p-4">
            <h1 className="text-2xl font-bold mb-6">{text}</h1>
            <div className="bg-white rounded-lg shadow-md">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        {/* Table Header Skeleton */}
                        <thead className="bg-gray-50">
                            <tr>
                                {Array.from({ length: 6 }).map((_, index) => (
                                    <th key={index} className="px-6 py-3">
                                        <div className="h-4 bg-gray-300 rounded w-24 animate-pulse"></div>
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        {/* Table Rows Skeleton */}
                        <tbody className="bg-white divide-y divide-gray-200">
                            {Array.from({ length: 4 }).map((_, index) => (
                                <tr key={index} className="animate-pulse">
                                    {Array.from({ length: 6 }).map((_, tdIndex) => (
                                        <td key={tdIndex} className="px-6 py-4">
                                            <div className="h-4 bg-gray-300 rounded w-28"></div>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
