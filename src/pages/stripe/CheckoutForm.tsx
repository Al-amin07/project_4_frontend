/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import toast from "react-hot-toast";
import { TOrder } from '@/types/order.type';
import { useNavigate } from 'react-router';
type TProp = {

    orderData: Partial<TOrder>;
    setOpen: (open: boolean) => void;
    refetch: () => void;
}
const CheckoutForm = ({ orderData, setOpen, refetch }: TProp) => {

    const navigate = useNavigate()
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        if (!stripe || !elements) return;

        setLoading(true);
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/orders/client-secret`, { amount: orderData?.totalPrice }, { withCredentials: true })

            const clientSecret = data.data;

            // Confirm payment with Stripe
            const { error, paymentIntent } = await stripe.confirmCardPayment(
                clientSecret,
                {
                    payment_method: {
                        card: elements.getElement(CardElement) ?? { token: '' },
                    },
                }
            );
            console.log({ paymentIntent })
            if (error) {
                toast.error(error.message as string);
            } else if (paymentIntent.status === "succeeded") {
                toast.success("Payment request created successfully!");

            }
            orderData.transactionId = paymentIntent?.id
            const { data: paymentData } = await axios.post(`${import.meta.env.VITE_API_URL}/orders`, orderData, { withCredentials: true })
            console.log({ paymentData });
            if (paymentData?.status) {
                refetch()
            }

        } catch (err: any) {
            toast.error(err?.message || "Failed to create payment request. Please try again.");
        } finally {
            setLoading(false);
            setOpen(false)
            navigate('/dashboard')
        }
    };


    return (
        <form onSubmit={handleSubmit} className="w-full  mx-auto space-y-6">
            <div className="bg-white border-red-400 px-4  py-3 rounded-lg shadow-sm border">
                <CardElement

                    options={{
                        style: {
                            base: {
                                fontSize: "16px",
                                color: "#424770",
                                "::placeholder": {
                                    color: "#aab7c4",

                                },
                            },
                            invalid: {
                                color: "#9e2146",
                            },

                        },
                    }}
                />
            </div>

            <button
                type="submit"
                disabled={!stripe || loading}
                className="w-full text-base bg-teal-600 text-white py-2.5  rounded-lg hover:bg-teal-700 
          transition-colors disabled:bg-teal-400 disabled:cursor-not-allowed flex items-center justify-center"
            >
                {loading ? (
                    <span className="flex border-2 items-center gap-2">
                        Processing...
                        <svg
                            className="animate-spin h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                        </svg>
                    </span>
                ) : (
                    `Pay  $${orderData?.totalPrice}`
                )}
            </button>

        </form>
    );
};

export default CheckoutForm;