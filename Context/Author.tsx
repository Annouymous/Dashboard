'use client'
import React, { createContext, useState, Dispatch, SetStateAction } from 'react'

interface AuthorContextType {
  user: any; 
  setUser: Dispatch<SetStateAction<any>>;
}

export const AuthorContext = createContext<AuthorContextType | null>(null);
export const AuthorProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [user,setUser] = useState()
  return (
    <AuthorContext.Provider value={{user,setUser}}>
      {
        children
      }
    </AuthorContext.Provider>
  )
}