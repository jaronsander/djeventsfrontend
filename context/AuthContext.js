import { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { NEXT_URL } from '@/config/index'

const AuthContext = createContext()


export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    const router = useRouter();

    useEffect(() => {
            async function checkUserLoggedIn() {
            const res = await fetch(`${NEXT_URL}/api/user`)
            const data = await res.json()

            if(res.ok){
                setUser(data.user)
            } else {
                setUser(null)
            }
        }
        checkUserLoggedIn()}, [])

    // Register User
    const register = async (user) => {
        const res = await fetch(`${NEXT_URL}/api/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        const data = await res.json()

        //console.log(data)
        if(res.ok){
            setUser(data.user)
            router.push('/account/dashboard')
        } else {
            setError(data)
            console.log(data)
            setError(null)
        }
    }

    // Login user
    const login = async ({email:identifier, password}) => {
        const res = await fetch(`${NEXT_URL}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                identifier,
                password
            })
        })
        const data = await res.json()

        console.log(data)
        if(res.ok){
            setUser(data.user)
            router.push('/account/dashboard')
        } else {
            setError(data)
            console.log(data)
            //setError(null)
        }
        
    }

    // Logout User
    const logout = async () => {
        const res = await fetch(`${NEXT_URL}/api/logout`, {
            method: 'POST',
        })
        if(res.ok){
            setUser(null)
            router.push('/')
        }
    }

    return (
        <AuthContext.Provider value={{user, error, register, login, logout}}>
        {children}
        </AuthContext.Provider>
    )
}

export default AuthContext