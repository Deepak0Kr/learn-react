import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200 top-0 left-0 absolute "
    style={{backgroundColor:color}}
  >
    <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2 " >
      
    <div className="flex flex-wrap justify-center gap-3 shadow-lg  bg-white px-3 py-2 rounded-3xl">
      <button className="outlin-none px-4 py-1 rounded-full text-white shadow-md"
      onClick={()=>setColor("red")}
      style={{backgroundColor:"red"}} >Red</button>

      <button className="outlin-none px-4 py-1 rounded-full text-white shadow-md"
      onClick={()=>setColor("green")}
      style={{backgroundColor:"green"}} >Green</button>

      <button className="outlin-none px-4 py-1 rounded-full text-white shadow-md"
      onClick={()=>setColor("blue")}
      style={{backgroundColor:"blue"}} >Blue</button>

      
<button className="outlin-none px-4 py-1 rounded-full text-white shadow-md"
      onClick={()=>setColor("yellow")}
      style={{backgroundColor:"yellow"}} >Yellow</button>
      
      <button className="outlin-none px-4 py-1 rounded-full text-white shadow-md"
      onClick={()=>setColor("purple")}
      style={{backgroundColor:"purple"}} >Purple</button>
      
      <button className="outlin-none px-4 py-1 rounded-full text-white shadow-md"
      onClick={()=>setColor("black")}
      style={{backgroundColor:"black"}} >black</button>

    </div>
    </div>
  </div>
  )
}

export default App

