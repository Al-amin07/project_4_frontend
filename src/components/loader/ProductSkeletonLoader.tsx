
const ProductSkeletonCard = () => {
    return (
        <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-3 gap-6 p-4">
            {[1, 2, 3, 4, 5, 6].map((_, index) => <div key={index} className="animate-pulse bg-white  shadow-md overflow-hidden">
                <div className="h-52 bg-gray-200" />
                <div className="p-4 space-y-2">
                    <div className="h-5 w-3/4 bg-gray-200 rounded" />
                    <div className="h-4 w-1/2 bg-gray-200 rounded" />
                    <div className="h-4 w-full bg-gray-200 rounded" />
                    <div className="h-4 w-5/6 bg-gray-200 rounded" />
                    <div className="flex justify-between items-center pt-2">
                        <div className="h-4 w-1/3 bg-gray-200 rounded" />
                        <div className="h-8 w-20 bg-gray-200 rounded" />
                    </div>
                </div>
            </div>)}
        </div>
    );
};

export default ProductSkeletonCard;
