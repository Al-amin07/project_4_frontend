const SingleProductSkeleton = () => {
    return (
        <div className="max-w-7xl mx-auto min-h-[300px] p-6 bg-white border rounded-lg">
            <div className="flex flex-col md:flex-row animate-pulse gap-6">
                {/* Left Image Skeleton */}
                <div className="md:w-1/2 w-full h-64 md:h-auto bg-gray-200 rounded-lg" />

                {/* Right Content Skeleton */}
                <div className="md:w-1/2 w-full space-y-4">
                    <div className="h-8 w-3/4 bg-gray-200 rounded" />
                    <div className="h-4 w-1/2 bg-gray-200 rounded" />
                    <div className="h-4 w-1/3 bg-gray-200 rounded" />
                    <div className="h-4 w-1/2 bg-gray-200 rounded" />
                    <div className="h-4 w-1/3 bg-gray-200 rounded" />
                    <div className="h-4 w-1/4 bg-gray-200 rounded" />
                    <div className="h-20 w-full bg-gray-200 rounded" />

                    {/* Quantity Controller */}
                    <div className="flex w-32 items-center gap-3 border border-gray-300 rounded-lg p-2">
                        <div className="w-8 h-8 bg-gray-200 rounded" />
                        <div className="w-10 h-6 bg-gray-200 rounded" />
                        <div className="w-8 h-8 bg-gray-200 rounded" />
                    </div>

                    {/* Button Skeleton */}
                    <div className="h-10 w-40 bg-gray-200 rounded-md mt-4" />
                </div>
            </div>
        </div>
    );
};

export default SingleProductSkeleton;
