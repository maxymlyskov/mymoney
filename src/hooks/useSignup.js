import { useState } from "react"
import { projectAuth } from '../firebase/config'

export const useSignup = () =>{
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

    const singup = async ( email, password , displayName )=>{
        setError(null);
        setIsPending(true)

        try {
            const response = await projectAuth.createUserWithEmailAndPassword(email, password)

            console.log(response.user)

            if(!response){
                throw new Error('Could not register')
            }

            await response.user.updateProfile({displayName})
            
            setIsPending(false)
            
        } catch (error) {
            console.log(error.message)
            setError(error.message)
            setIsPending(false)
        }
    }


    return {error, isPending, singup}
}