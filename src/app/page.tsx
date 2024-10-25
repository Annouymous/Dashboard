'use client'
import React, { useCallback, useContext, useEffect, useState } from "react"
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from "next/navigation"
import { Auth } from "@/library/Firebase/config";
import { signInEmail } from "@/library/Firebase/Services";
import { AuthorContext } from "../../Context/Author";
import Login from "@/library/screens/Login";
import LoadingFragment from "@/library/screens/LoadingFragment";

export default function LoginForm() {
  const router = useRouter()
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [Error,setError] = useState('')
  const [loading,setLoading] = useState(true)
  const [LoadingStatus,setLoadingStatus] = useState(false)
  const Author = useContext(AuthorContext)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (user) => {
      if (!user) { 
        setLoading(false)
      } else {
        router.push('/dashboard')
        Author?.setUser(user)
      }
    });
    return () => unsubscribe();
  }, [router]);


  const FormHandling = async(event:React.FormEvent) =>{
        setLoadingStatus(true)
        event.preventDefault()
        try {
          console.log(Email,Password)
          await signInEmail(Email,Password)
          setLoadingStatus(false)
        } catch (Error) {
          console.log((Error as Error)?.message);
          setError((Error as Error)?.message || "Unknown error occurred");
          setLoadingStatus(false)
        }
      }
  
    const HandleEmail = 
      useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
      },[Email])

    const HandlePassword =useCallback(
      (e:React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
      },[Password])

  if(loading) return <LoadingFragment/>
  return (
    <div className="flex w-full h-screen flex-col bg-gray-300 justify-center items-center">
      <Login Error={Error} onPasswordChange={HandlePassword} onEmailChange={HandleEmail} loadingStatus={LoadingStatus} HandleForm={FormHandling}/>
    </div>
  )
}
