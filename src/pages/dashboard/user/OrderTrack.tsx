import { useState } from "react";
export type TStatus = "pending" | "processing" | "shipped" | "delivered" | 'canceled'
const steps = ["Pending", "Processing", "Shipped", "Delivered"];
const statusMap = {
    pending: 1,
    processing: 2,
    shipped: 3,
    delivered: 4,
    canceled: 0, // Special case for canceled
} as const;
const getStatusIndex = (status: keyof typeof statusMap): number => {

    const result = statusMap[status]
    return result || 1;
};

const OrderStatusTracker = ({ status }: { status: TStatus }) => {
    // const currentStep = getStatusIndex(status);
    const isCanceled = status === "canceled";
    const [currentStep, setCurrentStep] = useState(getStatusIndex(status));
    return (
        <div className="w-full mx-auto p-6">
            <h2 className="text-lg font-semibold mb-4">Order Status: {status.toUpperCase()}</h2>

            {/* Steps */}
            <div className="flex justify-between items-center w-full">
                {steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center">
                        {/* Step Circle */}
                        <div
                            className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-semibold ${isCanceled
                                ? "bg-red-500" // Canceled color
                                : index + 1 <= currentStep
                                    ? "bg-green-500"
                                    : "bg-gray-300"
                                }`}
                        >
                            {index + 1}
                        </div>
                        {/* Step Label */}
                        <p
                            className={`mt-2 text-sm ${isCanceled
                                ? "text-red-600" // Canceled label color
                                : index + 1 <= currentStep
                                    ? "text-green-600"
                                    : "text-gray-500"
                                }`}
                        >
                            {step}
                        </p>
                    </div>
                ))}
            </div>

            {/* Progress Bar */}
            <div className="relative w-full h-2 bg-gray-300 rounded-full mt-4">
                <div
                    className={`absolute h-2 rounded-full ${isCanceled ? "bg-red-500" : "bg-green-500"
                        }`}
                    style={{
                        width: isCanceled ? "100%" : `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
                    }}
                ></div>
            </div>
            {/* Buttons for Simulating Status Change */}
            <div className="mt-4 flex justify-center gap-4">
                <button
                    onClick={() => setCurrentStep((prev: number) => Math.max(1, prev - 1))}
                    className="px-4 text-sm py-1.5 bg-black text-white  rounded-full"
                >
                    Prev
                </button>
                <button
                    onClick={() => setCurrentStep((prev: number) => Math.min(steps.length, prev + 1))}
                    className="px-4 text-sm py-1.5 bg-teal-500 text-white rounded-full"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default OrderStatusTracker

