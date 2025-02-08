/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ImSpinner10 } from "react-icons/im"
import MainForm from "../form/MainForm"
import MainSelect from "../form/MainSelect"


import { TOrder } from "@/types/order.type"

const options = [
    { value: "pending", label: "Pending" },
    { value: "processing", label: "Processing" },
    { value: "shipped", label: "Shipped" },
    { value: "delivered", label: "Delivered" },
    { value: "canceled", label: "Canceled" },
];

export default function OrderModal({ isLoading = false, onSubmit, defaultValue }: { isLoading?: boolean, onSubmit: any, defaultValue: Partial<TOrder> }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className=" rounded-full cursor-pointer text-blue-600 text-xs border-0 hover:bg-blue-100 bg-blue-50 px-2.5 py-1.5">Change  Status</button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md [&>button]:hidden">
                <DialogHeader>
                    <DialogTitle>Change Order Status</DialogTitle>
                </DialogHeader>
                <MainForm defaultValues={defaultValue} onSubmit={onSubmit}>
                    <MainSelect options={options} name="status" label="Status" />
                    <DialogFooter className="flex mt-4 ">
                        <DialogClose asChild>

                            <Button disabled={isLoading} className="bg-blue-100 disabled:cursor-not-allowed disabled:bg-blue-50  text-blue-600" type="submit" variant="secondary">
                                Update {isLoading && <ImSpinner10 size={18} className="my-auto animate-spin ml-3" />}
                            </Button>
                        </DialogClose>
                        <DialogClose asChild>
                            <Button type="button" className="  text-blcak" variant="default">
                                Cancel
                            </Button>
                        </DialogClose>

                    </DialogFooter>
                </MainForm>



            </DialogContent>
        </Dialog>
    )
}
