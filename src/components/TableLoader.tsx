export default function TableLoader({ text }: { text: string }) {
    return (
        // <div className="w-full border border-gray-200 rounded-lg overflow-hidden">
        //     {/* Table Header Skeleton */}
        //     <div className="bg-gray-200 animate-pulse py-3 px-4 flex">
        //         <div className="w-1/4 h-4 bg-gray-300 rounded"></div>
        //         <div className="w-1/4 h-4 bg-gray-300 rounded ml-auto"></div>
        //     </div>

        //     {/* Table Rows Skeleton */}
        //     <div className="divide-y divide-gray-200">
        //         {Array.from({ length: 5 }).map((_, index) => (
        //             <div key={index} className="flex items-center px-4 py-3 animate-pulse">
        //                 <div className="w-1/6 h-4 bg-gray-300 rounded"></div>
        //                 <div className="w-1/4 h-4 bg-gray-300 rounded ml-4"></div>
        //                 <div className="w-1/4 h-4 bg-gray-300 rounded ml-4"></div>
        //                 <div className="w-1/6 h-4 bg-gray-300 rounded ml-auto"></div>
        //             </div>
        //         ))}
        //     </div>
        // </div>
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
