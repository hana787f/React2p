import React,{createContext,useContext,useState} from "react";
const Authcontext = createContext();
 function Login(){
     const [user,setUser ]= useState(null);
      return(
        <Authcontext.Provider value={{user,setUser}}>
               <Profile/>
        </Authcontext.Provider>
      )
 }
  function Profile(){
     const {user ,setUser}= useContext(Authcontext);
      return (
        <div>
            {user ? (
                <>
                <h3>Wellcome {user}</h3>
                <button onClick={()=>setUser(null)}>
                    GetOut
                </button>
                </>
            ):(
                <button onClick={()=>setUser("HANA")}>
                    Login
                </button>

            )}
        </div>
      );
  }
  export default Login