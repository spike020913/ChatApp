import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const signup = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-black-300'>
                    SignUp
                    <span className='text-blue-500'> ChatApp</span>
                </h1>

                <form action="">

                    <div>
                        <label className="label p-2">
                            <span className='text-base label-text'>Full Name</span>
                        </label>
                        <input type="text" placeholder="Please Enter Your Full Name" className="input input-bordered w-full h-10" />
                    </div>

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

                    <div>
                        <label className="label p-2">
                            <span className='text-base label-text'>Confirm Password</span>
                        </label>
                        <input type="password" placeholder="Please Enter Password Again" className="input input-bordered w-full h-10" />
                    </div>

                    <GenderCheckbox />

                    <a href="#" className="text-sm hover:underline text-blue-600 mt-2 inline-block">Already Have an Account?</a>

                    <div>
                        <button className="btn btn-sm w-full mt-3">Signup</button>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default signup