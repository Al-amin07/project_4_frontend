







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


export default function DeleteModal({ isLoading, handleDelete }: { isLoading: boolean, handleDelete: () => void }) {
    return (
        <Dialog >
            <DialogTrigger asChild>
                <button className=" rounded-full bg-red-50 cursor-pointer text-red-600 text-xs border-0 hover:bg-red-100 px-2.5 py-1.5">Delete</button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md [&>button]:hidden">
                <DialogHeader>
                    <DialogTitle>Confirm Deletion</DialogTitle>
                </DialogHeader>
                <p className="text-slate-700 my-3">Are you sure you want to delete this item? This action cannot be undone.</p>

                <DialogFooter className="flex ">
                    <Button disabled={isLoading} onClick={handleDelete} className="bg-red-100 disabled:cursor-not-allowed disabled:bg-red-50  text-red-600" type="button" variant="secondary">
                        Delete {isLoading && <ImSpinner10 size={18} className="my-auto animate-spin ml-3" />}
                    </Button>
                    <DialogClose asChild>
                        <Button type="button" className="bg-blue-100 text-blue-600" variant="secondary">
                            Cancel
                        </Button>
                    </DialogClose>

                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
