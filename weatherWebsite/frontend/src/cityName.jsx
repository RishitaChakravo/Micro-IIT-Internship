import { useState, createContext } from "react";

const myContext = createContext()

function CityProvider({children}){
    const [city, setCity] = useState("Delhi");

    return(
        <myContext.Provider value={{city, setCity}}>
            {children}
        </myContext.Provider>
    )
}

export {myContext, CityProvider}