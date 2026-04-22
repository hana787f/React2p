import React,{createContext,useContext,useState} from "react";
 
const userContext =createContext();

function Navbar(){
     const {user}= useContext(userContext)
     return(
        <div>
            <h3>Welcome,{user.name}</h3>
        </div>
     )
}

 function Profile(){
    const {user,setUser}=useContext(userContext);
    const changeName =()=>{
        setUser({ ...user ,name:"Hana Fathima",
                              email: "newhana@gmail.com",age:22
        });
    }
     return(
        <div>
            <h2> profile page </h2>
            <p>Name:{ user.name }</p>
            <p>Email:{user.email}</p>
            <p>Age:{user.age}</p>

            <button onClick={changeName}>
                change Name 
            </button>
        </div>
     )
 }

  function UserProfile(){
     const[user,setUser]=useState({
        name:"Hana",
        email:"hana@gmail.com",
        age:21
     });
     return(
        <userContext.Provider value={{user,setUser}}>
            <Navbar/>
            <Profile/>
        </userContext.Provider>
     )
  }
  export default UserProfile;