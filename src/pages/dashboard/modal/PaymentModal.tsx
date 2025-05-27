/* eslint-disable @typescript-eslint/no-explicit-any */

import {
    Dialog,

    DialogContent,

    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import CheckoutForm from "@/pages/stripe/CheckoutForm";
import { selectUser } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hooks";
import { TCar } from "@/types";
import { TOrder } from "@/types/order.type";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation, useNavigate } from "react-router";


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);


export default function PaymentModal({ open, setOpen, car, totalPrice, quantity, refetch }: { setOpen: (open: boolean) => void, open: boolean, car: TCar, totalPrice: number, quantity: number, refetch: () => void }) {
    console.log(car)
    const location = useLocation()
    const user = useAppSelector(selectUser);
    const navigate = useNavigate()
    if (!user) {
        navigate('/login', { state: { from: location.pathname } })
    }

    const orderData: Partial<TOrder> = {
        email: user?.email,
        quantity,
        totalPrice,
        car: car
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <button
                    onClick={() => setOpen(true)}
                    className={`mt-6 px-5 py-2  font-semibold ${car?.inStock
                        ? 'bg-teal-600 text-white border border-teal-600 hover:text-teal-600 hover:bg-transparent transition-all duration-500 ease-in-out'
                        : 'bg-gray-400 text-gray-700  cursor-not-allowed'
                        }`}
                >
                    {car.inStock ? 'Buy Now' : 'Out of Stock'}
                </button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-xl [&>button]:hidden">
                <DialogHeader>
                    <DialogTitle className="text-2xl">Car Details</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <p className="text-sm text-gray-600">Email</p>
                        <p className="font-medium text-base">{user?.email}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600">role</p>
                        <p className="font-medium text-base">{user?.role}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600">Model</p>
                        <p className="font-medium text-base">{car?.model}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600">Brand </p>
                        <p className="font-medium text-base">
                            {car?.brand}
                        </p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600">Category</p>
                        <p className="font-medium text-base">
                            {car?.category}
                        </p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600">Price</p>
                        <span
                            className={` inline-flex text-base leading-5 font-medium rounded-full`}
                        >
                            $ {car?.price}
                        </span>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600">Quantity</p>
                        <p className="font-medium text-base">
                            {quantity}
                        </p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600">Total Price</p>
                        <p className="font-medium text-base">
                            $ {totalPrice}
                        </p>
                    </div>
                </div>
                <div>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm refetch={refetch} setOpen={setOpen} orderData={orderData} />
                    </Elements>
                </div>

            </DialogContent>
        </Dialog>
    )
}
