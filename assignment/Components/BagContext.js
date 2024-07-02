import { createContext, useState } from "react";

export const BagContext = createContext();

export const BagProvider = ({children}) =>{
    const [bags, setBags] = useState([1,2,3,4,5,,6,7,8]);
    const product = {
        bags
    }
    return(
        <BagContext.Provider value={product} >
            {children}
        </BagContext.Provider>
    )

}