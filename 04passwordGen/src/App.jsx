
import { useState ,useCallback,useEffect,useRef} from 'react'

function App() {
  const [length, setLenght] = useState(8)
  const [numAllow, setNumAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")
  
  const passwordRef=useRef(null)

const passwordGen=useCallback(()=>{
  let pass=""
  let str="aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ"
  if(numAllow)str+="0123456789"
  if(charAllow)str+="!@#$%^&*()_+-=[]{}`~"

  for (let i = 0; i <= length; i++) {
    let char= Math.floor(Math.random()*str.length+1)    
    pass+=str.charAt(char)
  }

  setPassword(pass)

},[length,numAllow,charAllow,setPassword])

const passwordCopyToClipBoard=()=>{
  passwordRef.current?.select()
  window.navigator.clipboard.writeText(password)
}


  useEffect(()=>{passwordGen()},[length,numAllow,charAllow,passwordGen])

  return (
  <>
 
  <div className=' bg-slate-700 w-full max-w-md shadow-md mx-auto  rounded-xl px-4 py-3 my-8 text-orange-500'>
    
    <h1 className='text-white text-center mx-3 my-2'>password generater</h1>
    <div className='flex shadow rounded-xl overflow-hidden mb-4'>
      
       <input type="text" 
       placeholder='password' 
       value={password}
       readOnly
       ref={passwordRef}
       className='flex rounded-xl px-4 outline-none py-1 w-full' />
       <button 
       onClick={passwordCopyToClipBoard}
       className=' rounded-xl  mx-1 px-2 shrink-4 w-fit text-white bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 '
       >COPY</button>

    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex  items-center gap-x-1'>
     
      <input 
      
      type="range"
      min={8}
      max={28} 
      value={length}
      className='cursor-pointer accent-violet-600'
      onChange={(e)=>{
        setLenght(e.target.value)
      }} />
      <label >length: {length}</label>
      </div>

      <div className='flex items-center gap-x-1'>

      <input 
      type="checkbox"
      className='accent-lime-400'
      defaultValue={numAllow}
      onChange={()=>{
        setNumAllow((prev)=>!prev)
        }} />

      <label >Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
    
      <input 
      type="checkbox"
      defaultValue={charAllow}
      onChange={()=>{
        setCharAllow((prev)=>!prev)
        }} />

      <label >Characters</label>
      </div>
    
    </div>
  </div>
  </>
  )
}

export default App
