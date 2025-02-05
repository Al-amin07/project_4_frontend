/* eslint-disable @typescript-eslint/no-explicit-any */

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
import { useRegisterMutation } from '../../redux/features/user/userApi';
import { FaSpinner } from "react-icons/fa6";
import toast from 'react-hot-toast';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { registerationSchema } from './auth.schema';
// import { z } from 'zod';
// const registerationSchema = z.object({
//     name: z.string({ required_error: "Name is required" }),
//     email: z
//         .string({ required_error: "Email is required" }),
//     // .email({ message: "Invalid email" }),
//     password: z.string({ required_error: "Password is required" }),
// });
const Registration = () => {
    const { handleSubmit, register } = useForm();
    const navigate = useNavigate()
    const [registerUser, { isLoading }] = useRegisterMutation()
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        console.log({ data })
        try {
            const result = await registerUser(data).unwrap()
            console.log(result)
            if (result?.success) {
                toast.success(result?.message);
                navigate('/login')
            }

        } catch (error: any) {
            console.log(error)
            toast.error(error?.data?.message)
        }
    };



    return (


        <section className="bg-white">
            <div className="lg:grid  lg:grid-cols-12">
                <section className="relative flex h-36 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        className="absolute inset-0 h-full w-full object-cover opacity-80"
                    />

                    <div className="hidden lg:relative lg:block lg:p-12">


                        <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                            Welcome to Squid 🦑
                        </h2>

                        <p className="mt-4 leading-relaxed text-white/90">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
                            quibusdam aperiam voluptatum.
                        </p>
                    </div>
                </section>

                <main
                    className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                >
                    <div className="max-w-xl lg:max-w-3xl">


                        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 ">
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-semibold capitalize">Name</label>
                                <input
                                    type="text"
                                    id="name"

                                    {...register('name')}
                                    required
                                    className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                />
                                {/* {errors?.name && <p className="text-red-500">{errors?.name?.message as string}</p>} */}

                            </div>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-semibold capitalize">Email</label>
                                <input
                                    type="email"
                                    id="name"
                                    required
                                    {...register('email')}
                                    // required
                                    className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                />
                                {/* {errors?.email && <p className="text-red-500">{errors?.email?.message as string}</p>} */}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-semibold capitalize">Password</label>
                                <input
                                    type="password"
                                    id="name"

                                    {...register('password')}
                                    // required
                                    className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                />
                            </div>






                            <div className=" mb-5">
                                <p className=" text-gray-500">
                                    By creating an account, you agree to our
                                    <a href="#" className="text-gray-700 underline"> terms and conditions </a>
                                    and
                                    <a href="#" className="text-gray-700 underline">privacy policy</a>.
                                </p>
                            </div>

                            <div className="  ">
                                <button
                                    disabled={isLoading}
                                    type='submit'
                                    className="block mb-4 w-full shrink-0 rounded-md border border-teal-600 bg-teal-600 px-12 py-2  font-medium text-white cursor-pointer transition hover:bg-teal-700 focus:outline-none focus:ring active:text-blue-500"
                                >
                                    Create an account
                                    {isLoading && <FaSpinner size={20} className='animate-spin ml-3 inline-block my-auto' />}
                                </button>

                                <p className="mt-8 text-center  text-gray-500 sm:mt-0">
                                    Already have an account?
                                    <Link to={'/login'} className="text-gray-700 underline">Log in</Link>.
                                </p>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </section>
        // <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        //     <div className="mx-auto max-w-lg text-center">
        //         <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

        //         <p className="mt-4 text-gray-500">
        //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque
        //             ipsa culpa autem, at itaque nostrum!
        //         </p>
        //     </div>

        //     <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
        //         <div className="mb-4">
        //             <label htmlFor="name" className="block text-gray-700">Name</label>
        //             <input
        //                 type="text"
        //                 id="name"

        //                 {...register('name')}
        //                 required
        //                 className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        //             />
        //         </div>

        //         <div className="mb-4">
        //             <label htmlFor="name" className="block text-gray-700">Email</label>
        //             <input
        //                 type="email"
        //                 id="email"
        //                 {...register('email')}

        //                 required
        //                 className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        //             />
        //         </div>

        //         <div className="mb-4">
        //             <label htmlFor="name" className="block text-gray-700">Password</label>
        //             <input
        //                 type="password"
        //                 id="password"
        //                 {...register('password')}

        //                 required
        //                 className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        //             />
        //         </div>

        //         <div className="flex items-center justify-between">
        //             <p className="text-sm text-gray-500">
        //                 Already have an account?
        //                 <Link to={'/login'} className="underline" >Login</Link>
        //             </p>

        //             <button
        //                 type="submit"
        //                 className="inline-block rounded-lg cursor-pointer bg-blue-500 px-5 py-3 text-sm font-medium text-white"
        //             >
        //                 Register {isLoading && <FaSpinner size={18} className='animate-spin ml-2 inline-block' />}
        //             </button>
        //         </div>
        //     </form>
        // </div>
    );
};

export default Registration;





// <div className="flex justify-center items-center min-h-screen bg-gray-100">
//     <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
//         <form onSubmit={handleSubmit}>
// <div className="mb-4">
//     <label htmlFor="name" className="block text-gray-700">Name</label>
//     <input
//         type="text"
//         id="name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         required
//         className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//     />
// </div>
//             <div className="mb-4">
//                 <label htmlFor="email" className="block text-gray-700">Email</label>
//                 <input
//                     type="email"
//                     id="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                     className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//                 />
//             </div>
//             <div className="mb-4">
//                 <label htmlFor="password" className="block text-gray-700">Password</label>
//                 <input
//                     type="password"
//                     id="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                     className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//                 />
//             </div>
//             <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
//                 Register
//             </button>
//         </form>
//     </div>
// </div>