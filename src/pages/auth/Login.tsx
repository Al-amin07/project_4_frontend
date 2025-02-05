/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import { useLoginMutation } from "../../redux/features/user/userApi";
import { useAppDispatch } from "../../redux/hooks";
import { tokenDecoded } from "../../utils/tokenDecoded";
import { setUser } from "../../redux/features/user/userSlice";
import toast from "react-hot-toast";
import loginImage from '../../assets/login.png'
// import axios from 'axios'
// import { toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa6";
// import { zodResolver } from "@hookform/resolvers/zod"
// import { zodResolver } from "@hookform/resolvers/zod";
// import { loginSchema } from "./auth.schema";
const Login = () => {
    const { handleSubmit, register } = useForm();
    // const { handleSubmit, register, formState: { errors } } = useForm({ resolver: zodResolver(loginSchema) });
    const [login, { isLoading }] = useLoginMutation();
    const dispatch = useAppDispatch()
    const location = useLocation();

    const navigate = useNavigate()
    const path = location?.state?.from || '/dashboard'
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            const result = await login(data).unwrap()
            console.log({ result })
            if (result?.success) {
                const user = tokenDecoded(result?.data)
                dispatch(setUser({ user, token: result?.data }))
                toast.success(result?.message)
                navigate(path)
            }

        } catch (error: any) {
            toast.error(error?.message)
        }
    }

    return (

        <div className="flex  items-center w-full max-w-lg mx-auto overflow-hidden md:max-w-3xl bg-white rounded-lg  dark:bg-gray-800 lg:max-w-5xl">
            <div className="hidden h-[550px] bg-center bg-cover lg:block lg:w-1/2"
                style={{
                    backgroundImage: `url('${loginImage}')`
                }} ></div>
            {/* <div className="hidden h-[550px] bg-cover lg:block lg:w-1/2"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80')`
                }} ></div> */}

            <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                <div className="flex justify-center mx-auto">
                    <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="" />
                </div>

                <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
                    Welcome back!
                </p>



                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

                    <a href="#" className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"> login
                        with email</a>

                    <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="mt-4">
                        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" >Email Address</label>
                        <input id="LoggingEmailAddress" required
                            {...register('email')}
                            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 border-gray-600 focus:border-teal-400 focus:ring-opacity-40 dark:focus:border-teal-300 focus:outline-none focus:ring focus:ring-teal-300" type="email" />
                    </div>

                    <div className="mt-4">
                        <div className="flex justify-between">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" >Password</label>
                            <a href="#" className="text-xs text-gray-500 dark:text-gray-300 hover:underline">Forget Password?</a>
                        </div>

                        <input id="loggingPassword"
                            {...register('password')}
                            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-teal-400 focus:ring-opacity-40 dark:focus:border-teal-300 focus:outline-none focus:ring focus:ring-teal-300" type="password" />
                    </div>

                    <div className="mt-6">
                        <button
                            disabled={isLoading}
                            type='submit'
                            className="block mb-4 w-full shrink-0 rounded-md border border-teal-600 bg-teal-600 px-12 py-2  font-medium text-white cursor-pointer transition hover:bg-teal-700 focus:outline-none focus:ring active:text-teal-500"
                        >
                            Sign In
                            {isLoading && <FaSpinner size={20} className='animate-spin ml-3 inline-block my-auto' />}
                        </button>
                    </div>
                </form>



                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

                    <Link to={'/register'} className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:text-teal-500 hover:underline">or sign up</Link>

                    <span className="w-1/5 border-b  dark:border-gray-600 md:w-1/4"></span>
                </div>
            </div>
        </div>



    );
};

export default Login;



