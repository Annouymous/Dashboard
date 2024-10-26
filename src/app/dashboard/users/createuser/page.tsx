'use client'
import AccountCreateFragment from '@/library/components/users/AccountCreateFragment'
import React, { useCallback, useState } from 'react'

function page() {
  const [Email,setEmail] = useState('')
  const [Password,setPassword] = useState('')

  const HandleEmailChange = useCallback((event: React.ChangeEvent<HTMLInputElement>)=>{
    setEmail(event.target.value)
  },[])
  const HandlePasswordChange = useCallback((event: React.ChangeEvent<HTMLInputElement>)=>{
    setPassword(event.target.value)
  },[])

  const HandleUserCreate = () => {
    fetch('/api/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: Email, password: Password }),
    })
      .then((response) => {
        if (!response.ok) {
          alert('Internal Error: Not able to create user');
          return response.json().then(err => { throw new Error(err.error) });
        }
        return response.json();
      })
      .then((data) => {
        alert('User created successfully!');
      })
      .catch((error) => {
        alert(error.message || 'Internal Error: Not able to create user');
      });
  };

  return (
    <div className='flex w-full h-full justify-center items-center'>
      <AccountCreateFragment onClick={HandleUserCreate} onEmailChange={HandleEmailChange} onPasswordChange={HandlePasswordChange}/>
    </div>
  )
}

export default page