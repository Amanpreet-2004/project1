import { useState, createContext } from "react";
const Usercontext = createContext();
const UserProvider =({children})=>{
    const [name,setName]= useState("");
    return(
        <Usercontext.Provider value={{name,setName}}>
            {children}
        </Usercontext.Provider>
    )
}


export {UserProvider,Usercontext}