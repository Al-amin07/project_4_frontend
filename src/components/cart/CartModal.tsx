
import {
    Sheet,

    SheetContent,

    SheetTrigger,
} from "@/components/ui/sheet"
import { addCar, deleteCar, ICartItem, removeCar } from "@/redux/features/cart/cartSlice"
import { FaTrash } from "react-icons/fa6"
import { RiShoppingCart2Fill } from "react-icons/ri"
import { Button } from "../ui/button"
import { Separator } from "@radix-ui/react-separator"
import { useAppDispatch } from "@/redux/hooks"
import { TCar } from "@/types"
import { Link } from "react-router"

export function CartModal({ cart }: { cart: { cars: ICartItem[], totalPrice: number } }) {

    const dispatch = useAppDispatch()



    const handleIncrease = (car: TCar) => {
        dispatch(addCar(car))
    };

    const handleDecrease = (car: TCar) => {
        dispatch(removeCar(car._id))
    };
    const handleRemove = (car: TCar, quentity: number) => {
        dispatch(deleteCar({ car, quentity }))
    }
    return (
        <Sheet>
            <SheetTrigger asChild>
                <div className="relative text-slate-800 hover:text-teal-600 transition-all duration-300 cursor-pointer">
                    <RiShoppingCart2Fill size={34} />
                    <span className="absolute -top-1 -right-1 text-white bg-red-600 rounded-full h-5 w-5 p-1 flex items-center justify-center">{cart.cars.length}</span>
                </div>
            </SheetTrigger>
            <SheetContent className="p-0 border-l-0">
                <div className=" h-full  flex flex-col">
                    <div className="bg-[#031b33] p-5 text-white  flex justify-between items-center">
                        <h2 className="text-lg font-semibold">YOUR CART</h2>
                        {/* <button className="text-white text-xl">&times;</button> */}
                    </div>

                    <div className="p-4 flex-1 overflow-y-auto">
                        {
                            cart?.cars?.length === 0 ? <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
                                <div className="text-4xl mb-2">🛒</div>
                                <p className="text-lg font-medium">Your cart is empty</p>
                            </div> : cart?.cars?.map((car) => (
                                <div key={car?.car?._id} className="flex items-center justify-between mb-4">
                                    <img src={car?.car?.image} alt="product" className="w-24 h-28 object-contain" />
                                    <div className="flex-1 mx-3">
                                        <h3 className="text-sm font-semibold">{car?.car?.brand}</h3>
                                        <div className="flex items-center gap-2 mt-2">
                                            <button
                                                className="px-2 hover:bg-teal-600 hover:text-white transition-all duration-300 py-0 border rounded"
                                                onClick={() => handleDecrease(car?.car)}
                                            >−</button>
                                            <span>{car?.quentity}</span>
                                            <button
                                                className="px-2 hover:bg-teal-600 hover:text-white transition-all duration-300 py-0 border rounded"
                                                onClick={() => handleIncrease(car?.car)}
                                            >+</button>
                                        </div>
                                        <p className="text-sm mt-1">
                                            {car?.car?.price} X {car?.quentity} = <strong>{car?.car?.price * car?.quentity}৳</strong>
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => handleRemove(car?.car, car?.quentity)}
                                        className="text-red-500 hover:text-red-600 p-2 hover:bg-gray-300 rounded-full"><FaTrash /></button>
                                </div>
                            ))
                        }
                    </div>

                    {
                        cart?.cars?.length > 0 && <div className="px-4 pb-4">
                            <div className="flex gap-2 ">
                                <input type="text" placeholder="Promo Code" className="flex-1 px-3 py-1 border border-gray-300 rounded mb-5" />
                                <Button className="">Apply</Button>
                            </div>
                            <Separator />
                            <div className="flex justify-between text-sm mb-3">
                                <span>Sub-Total</span>
                                <span>{cart?.totalPrice} ৳</span>
                            </div>
                            <div className="flex justify-between text-sm font-bold">
                                <span>Total</span>
                                <span>{cart?.totalPrice} ৳</span>
                            </div>

                            <Link to={'/checkout'}>
                                <Button className="mt-4 w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded">
                                    Checkout
                                </Button>
                            </Link>
                        </div>
                    }
                </div>
            </SheetContent>
        </Sheet>
    )
}
