'use client'
import { Auth } from "@/library/Firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";
import { AuthorContext } from "../../../Context/Author";
import HeaderFragment from "@/library/components/Basic/HeaderFragment";
import MultiColumnFragment from "@/library/components/Basic/MultiColumnFragment";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const router = useRouter()
  const Author = useContext(AuthorContext)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (user) => {
      console.log(user)
      if (!user) { 
        router.push('/');
      }else(
        
        Author?.setUser(user)
      )
    });
    return () => unsubscribe();
  }, [router]);


  return (
    <div className="flex flex-col md:flex-row overflow-y-hidden">
      <HeaderFragment ProfileIconUrl={Author?.user?.photoURL} />
      <MultiColumnFragment />
      <div className="bg-blue-50 py-[80px] h-screen overflow-y-auto flex w-full flex-col">
        {children}
      </div>
    </div>
  );
}
