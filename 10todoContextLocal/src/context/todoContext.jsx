import { createContext ,useContext} from "react";

export const todoContext=createContext({
    todo:[{
        id:1,
        todo:"todo Messege",
        completed:false
    }],
    addTodo:(todo)=>{},
    updateTdo:(id, todo)=>{},
    deleteTodo:(id)=>{},
    toggle:(id)=>{}
})

export const useTodo=()=>{
    return useContext(todoContext)
}

export const todoProvider =todoContext.Provider