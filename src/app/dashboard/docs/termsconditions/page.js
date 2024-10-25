'use client'
import { Button } from '@/components/ui/button'
import HeadFragment from '@/library/components/HeadFragment'
import TextEditor from '@/library/components/TextEditor'
import { GetDoc, saveContent } from '@/library/Firebase/Services'
import React, { useEffect, useState } from 'react'

function page() {
    const n = '_termsconditions'
    const [FirsLoad,setFirsLoad] = useState('')
    const [content,setContent] = useState('')

    const ff = async() =>{
        const r = await GetDoc(n)
        setContent(r?.content)
        setFirsLoad(r?.content)
    }

    useEffect(()=>{
        ff()
    },[])
    const HandleSaveContent = async() =>{
        try {
            await saveContent(content,n)
            alert('Doc Update Success')
            ff()
        } catch (error) {
            alert('Doc Update Failed')
        }
    }
    const HandleContent = (e) =>{
        setContent(e)
    }
  return (
    <div className=''>
        <div className='px-3 mb-2 flex justify-end items-center'>
            <Button disabled={content===FirsLoad} onClick={HandleSaveContent} className='disabled:cursor-not-allowed disabled:text-gray-600 disabled:bg-indigo-950 bg-indigo-600 hover:bg-indigo-800'>Update Terms Conditions</Button>
        </div>
        <TextEditor onEditorChange={HandleContent} initialValue={content}/>
    </div>
  )
}

export default page