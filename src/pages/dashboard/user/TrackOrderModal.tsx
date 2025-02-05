/* eslint-disable @typescript-eslint/no-explicit-any */

import {
    Dialog,

    DialogContent,

    DialogHeader,

    DialogTrigger,
} from "@/components/ui/dialog"
import OrderTrack from "./OrderTrack"







export default function TrackOrderModal({ open, setOpen, status }: { setOpen: (open: boolean) => void, open: boolean, status: string }) {



    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <button
                    onClick={() => setOpen(true)}
                    className={` text-sm px-2 py-0.5 rounded-full bg-blue-50 text-blue-600  font-semibold $`}
                >
                    Track
                </button>
            </DialogTrigger>

            <DialogContent className="max-w-md md:max-w-2xl">
                <DialogHeader>

                </DialogHeader>

                <OrderTrack status={status} />

            </DialogContent>
        </Dialog>
    )
}
