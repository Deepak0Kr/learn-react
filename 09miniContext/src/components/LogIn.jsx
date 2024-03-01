import React ,{useContext,useState}from 'react'
import userContext from '../context/UserContext'

function LogIn() {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")

    const {setUser} = useContext(userContext)

    const handleSubmit=(e)=>{
        e.preventDefalt()
        setUser({username,password})
    }
  return (
    <div>
        <h1>
        LogIn
        </h1>
        <input type='text' placeholder='username' value={{username}} onChange={(e)=>(setusername(e.target.value))}/>
        <input type='text' placeholder='password' value={{password}} onChange={(e)=>(setpassword(e.target.value))}/>
        <button onClick={handleSubmit}>submit</button>
        </div>
  )
}

export default LogIn