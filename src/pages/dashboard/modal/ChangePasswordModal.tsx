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

import MainInput from "../form/MainInput"

import { zodResolver } from "@hookform/resolvers/zod"
import { changepasswordSchema } from "../admin/contains"


export default function ChangePasswordModal({ isLoading = false, onSubmit, open, setOpen }: { isLoading?: boolean, onSubmit: any, setOpen: (open: boolean) => void, open: boolean }) {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <button
                    onClick={() => setOpen(true)}
                    className="bg-cyan-500 hover:bg-cyan-600 px-10 py-1 rounded-lg text-white cursor-pointer block mb-1"
                >
                    Change Password
                </button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-md [&>button]:hidden">
                <DialogHeader>
                    <DialogTitle>Change Password</DialogTitle>
                </DialogHeader>

                <MainForm resolver={zodResolver(changepasswordSchema)} onSubmit={onSubmit}>
                    <MainInput type="password" name="password" label="Current Password" />
                    <MainInput type="password" name="newPassword" label="New Password" />

                    <DialogFooter className="flex mt-4">
                        {/* Submit Button */}
                        <Button
                            disabled={isLoading}
                            className="bg-blue-100 disabled:cursor-not-allowed disabled:bg-blue-50 text-blue-600"
                            type="submit"
                            variant="secondary"
                        >
                            Change {isLoading && <ImSpinner10 size={18} className="my-auto animate-spin ml-3" />}
                        </Button>

                        {/* Cancel Button */}
                        <DialogClose asChild>
                            <Button type="button" className="hover:bg-slate-100 text-black" variant="secondary">
                                Cancel
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </MainForm>
            </DialogContent>
        </Dialog>
    )
}
