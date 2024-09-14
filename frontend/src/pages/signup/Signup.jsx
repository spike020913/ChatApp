import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignUp from '../../hooks/useSignUp'

const signup = () => {

    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: '',
    })

    const { loading, signup } = useSignUp()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(inputs);
    }

    const handleCheckboxChange = (selectedGender) => {
        setInputs({ ...inputs, gender: selectedGender });
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-black-300'>
                    SignUp
                    <span className='text-blue-500'> ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit}>

                    <div>
                        <label className="label p-2">
                            <span className='text-base label-text'>Full Name</span>
                        </label>
                        <input type="text" placeholder="Please Enter Your Full Name" className="input input-bordered w-full h-10"
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })} />
                    </div>

                    <div>
                        <label className="label p-2">
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input type="text" placeholder="Please Enter Username" className="input input-bordered w-full h-10"
                            value={inputs.username}
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />
                    </div>

                    <div>
                        <label className="label p-2">
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input type="password" placeholder="Please Enter Password" className="input input-bordered w-full h-10"
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="label p-2">
                            <span className='text-base label-text'>Confirm Password</span>
                        </label>
                        <input type="password" placeholder="Please Enter Password Again" className="input input-bordered w-full h-10"
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        />
                    </div>

                    <GenderCheckbox onCheckBoxChange={handleCheckboxChange} selectedGender={inputs.gender} />

                    <Link to='/login' className="text-sm hover:underline text-blue-600 mt-2 inline-block">Already Have an Account?</Link>

                    <div>
                        <button className="btn btn-sm w-full mt-3" disabled={loading}>
                            {loading ? <span className='loading loading-spinner'></span> : 'SignUp'}

                        </button>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default signup