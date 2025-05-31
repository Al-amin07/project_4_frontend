import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/redux/hooks";
import { selectCart } from "@/redux/features/cart/cartSlice";





const formSchema = z.object({
    name: z.string().min(1, "Full name is required"),
    email: z.string().email("Invalid email"),
    phone: z.string().min(10, "Phone number is required"),
    address: z.string().min(5, "Address is required"),
});

const CheckoutPage = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            address: "",
        },
    });
    const cart = useAppSelector(selectCart)

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);
    };

    return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 py-8">
            {/* Left: User Info */}
            <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-semibold mb-6">Customer Information</h2>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="John Doe" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="john@example.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone</FormLabel>
                                    <FormControl>
                                        <Input placeholder="+880123456789" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Address</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="123 Main St, Dhaka, Bangladesh"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="w-full mt-4">
                            Place Order
                        </Button>
                    </form>
                </Form>
            </div>

            {/* Right: Cart Summary */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-semibold mb-6">Your Order</h2>
                <div className="space-y-4 max-h-[500px] overflow-auto">
                    {cart?.cars.map((car) => (
                        <div
                            key={car?.car._id}
                            className="flex items-center justify-between  border-b pb-4"
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    src={car?.car?.image || "https://via.placeholder.com/100"}
                                    alt={car?.car.model}
                                    className="w-24 h-28 object-contain rounded-lg"
                                />
                                <div>
                                    <h3 className="font-semibold">
                                        {car?.car.brand} {car?.car.model} ({car?.car.year})
                                    </h3>
                                    <p className="text-sm text-gray-500">{car?.car.category}</p>

                                </div>
                            </div>
                            <p className="">
                                {car?.car.price} x {car?.quentity} =
                                <span className="font-semibold">
                                    {(car?.car.price * car?.quentity).toFixed(2)} ৳
                                </span>
                            </p>
                        </div>
                    ))}
                </div>
                <div className="text-xl font-bold text-right pt-6">
                    Total: {cart?.totalPrice} ৳
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
