import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

  const data = useLoaderData() 
  return (
    <div
    // href='https://github.com/Deepak0Kr'
       // target="_blank"
    // rel="noreferrer"



    className='text-center m-4 bg-gray-400 text-white'
 
    >Github followers:{data.followers}
    </div>
  )
}

export default Github

export const  githubInfo =async()=>{
  const res= await fetch('https://api.github.com/users/Deepak0Kr')
  return res.json()
}