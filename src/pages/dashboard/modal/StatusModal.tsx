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

import { TUser } from "@/types/user.type"

const options = [
    { value: 'active', label: 'active' },
    { value: 'blocked', label: 'blocked' },
]

export default function StatusModal({ isLoading, handleStatus, defaultValue }: { isLoading: boolean, handleStatus: any, defaultValue: Partial<TUser> }) {
    console.log('HERE')
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className=" rounded-full cursor-pointer text-blue-600 text-xs border-0 hover:bg-blue-100 bg-blue-50 px-2.5 py-1.5">Change Status</button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md [&>button]:hidden">
                <DialogHeader>
                    <DialogTitle>Change Status</DialogTitle>
                </DialogHeader>
                <MainForm defaultValues={defaultValue} onSubmit={handleStatus}>
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
