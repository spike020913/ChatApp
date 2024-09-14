import { set } from 'mongoose'
import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/authContext'
const useSignUp = () => {

    const [loading, setLoading] = useState(false)
    const { setAuthUser } = useAuthContext()

    const signup = async ({fullName, username, password, confirmPassword, gender}) => {
        const success = handleInputErrors({ fullName, username, password, confirmPassword})
        if (!success) return

        setLoading(true)

        try {
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ fullName, username, password, confirmPassword, gender })
            })

            const data = await res.json()
            if (data.error) {
                throw new Error(data.error)
            } 
            console.log(data)
            // Save user data in local storage
            if (data) {
                localStorage.setItem('chat-user', JSON.stringify(data))
                setAuthUser(data)
                console.log('User data saved:', data)
            } else {
                throw new Error('User data not found in the response')
            }
        } catch (error) {
            console.error(error)
            toast.error('Error in SignUp')
        } finally {
            setLoading(false)
        }   
    }

    return { loading, signup }
}

export default useSignUp

function handleInputErrors({ fullName, username, password, confirmPassword }) {
  if (!fullName || !username || !password || !confirmPassword) {
    toast.error('All fields are required')
    return false
  }
  if (password !== confirmPassword) {
    toast.error('Passwords do not match')
    return false
  }
  // if (password.length < 6) {
  //   toast.error('Password must be at least 6 characters long')
  //   return false
  //}

  return true
}