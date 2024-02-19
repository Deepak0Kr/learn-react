import { useState } from "react"

function App() {
  let [counter,setcountere]=useState(15)
  
  const addvalue=()=>{
    if(counter<20){
      setcountere(counter+1)
    }
  }
 
 
  const removeValue =()=>{
    if(counter>0){
    setcountere(counter-1)
    
    }
  }

  return (
    <>
    <h1>React with vite | Deepak Kumar</h1>
    <h2>counter:{counter}</h2>
    <button onClick={addvalue}>add value</button>
    <br></br>
    <button onClick={removeValue}>removeValue</button>
    </>
  )
}

export default App
