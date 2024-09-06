import React from 'react'

const login = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className='text-3xl font-semibold text-center text-black-300'>
                    Login
                    <span className='text-blue-500'> ChatApp</span>
                </h1>

                <form action="">

                    <div>
                        <label className="label p-2">
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input type="text" placeholder="Please Enter Username" className="input input-bordered w-full h-10" />
                    </div>

                    <div>
                        <label className="label p-2">
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input type="password" placeholder="Please Enter Password" className="input input-bordered w-full h-10" />
                    </div>

                    <a href="#" className="text-sm hover:underline text-blue-600 mt-2 mr-4 inline-block">Create Account</a>
                    <a href="#" className="text-sm hover:underline text-blue-600 mt-2 inline-block">Forgot Password?</a>

                    <div>
                        <button className="btn btn-sm w-full mt-2">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default login;

// import React from 'react'

// const login = () => {
//     return (
//         <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//             <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//                 <h1 className='text-3xl font-semibold text-center text-black-300'>
//                     Login
//                     <span className='text-blue-500'> ChatApp</span>
//                 </h1>

//                 <form action="">

//                     <div>
//                         <label className="label p-2">
//                             <span className='text-base label-text'>Username</span>
//                         </label>
//                         <input type="text" placeholder="Please Enter Username" className="input input-bordered w-full h-10" />
//                     </div>

//                     <div>
//                         <label className="label p-2">
//                             <span className='text-base label-text'>Password</span>
//                         </label>
//                         <input type="password" placeholder="Please Enter Password" className="input input-bordered w-full h-10" />
//                     </div>

//                     <a href="#" className="text-sm hover:underline text-blue-600 mt-2 mr-4 inline-block">Create Account</a>
//                     <a href="#" className="text-sm hover:underline text-blue-600 mt-2 inline-block">Forgot Password?</a>

//                     <div>
//                         <button className="btn btn-sm w-full mt-2">Login</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default login;