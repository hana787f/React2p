import React,{createContext,useContext,useState} from "react";


const NotificationContext =createContext();

 function Notification(){
  
    const[message,setMessage]=useState("");
     
    const showNotification =(msg)=>{
        setMessage(msg);

        setTimeout(()=>{
             setMessage("");
              },3000);
    };
    return (
        <NotificationContext.Provider value={{message,showNotification}}>
            <div style={{ padding:"20px" }}>

                <h1> Notification system</h1>

                <Navbar/>
                <Home/>
                <NotificationUI/>
                

            </div>
        </NotificationContext.Provider>
    )
 }
  function Navbar(){

    const {showNotification}=useContext(NotificationContext);

    return(
        <div>
            <button onClick={()=> showNotification("Logged in!")}>
                Login
            </button>
        </div>
    )
  }
   function Home(){
     const{showNotification}=useContext(NotificationContext);
      return(
        <div>
            <button onClick={() => showNotification("Welcome Home!")}>
            Click Me
            </button>
        </div>
      )
   }
function NotificationUI(){
    const { message}=useContext(NotificationContext)

     if(!message)return null;

      return(
        <div
         style={{
            position:"fixed",
            top:"20px",
            right:"20px",
            background:"black",
            color:"white",
            padding:"10px",
            borderRadius:"5px"
         }}
        >
            {message}

        </div>
      )

}
export default Notification;