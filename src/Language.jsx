import React,{createContext, useContext,useState} from "react";
const LanguageContext =createContext();

  function Language (){

    const [lang,setLang]=useState("en")

    const translations={

        en:{
            greeting:"Hello",
            welcome:"Welcome to my app"
        },
        ml:{
            greeting:"Namaskaram",
            welcome:"Ente appilak swagatham"
        }
    };
    const toggleLanguage =()=>{
        setLang(lang === "en" ? "ml" : "en")
    };
    return (
        <LanguageContext.Provider value={{lang ,toggleLanguage,translations}}>
            <Home />
        </LanguageContext.Provider>
    )
  }

  function Home(){
     const {lang,toggleLanguage,translations}=useContext(LanguageContext);

     return(
        <div style={{ textAlign:"center",marginTop:"50px"}}>
            <h1>{translations[lang].greeting}</h1>
            <p>{translations[lang].welcome}</p>
            <button onClick={toggleLanguage}>
                switch language
            </button>
        </div>
        
     );

  }
  export default Language ;