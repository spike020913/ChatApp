import { useState } from 'react'
import { useAuthContext } from '../context/authContext'
import toast from 'react-hot-toast'
import { set } from 'mongoose'

const useLogOut = () => {
    const [loading, setLoading] = useState(false)
    
    // Get the setAuthUser function from the AuthContext
    const { setAuthUser } = useAuthContext()

    const logout = async () => {
        setLoading(true)

        try {
            const res = await fetch('/api/auth/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const data = await res.json()
            if (data.error) {
                throw new Error(data.error)
            }
            console.log(data)
            // Remove user data from local storage
            if (data) {
                localStorage.removeItem('chat-user')
                console.log('User data removed')
            } else {
                throw new Error('User data not found in the response')
            }
            // Set the authUser to null
            setAuthUser(null)
        } catch (error) {
            console.error(error)
            toast.error('Error in Logout')
        } finally {
            setLoading(false)
        }
    }

    return { loading, logout }
}

export default useLogOut