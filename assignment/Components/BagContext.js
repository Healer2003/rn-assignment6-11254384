import { createContext, useState} from "react"

export const BagContext = createContext()

export const BagProvider = ({children})=>{

    const [bags, setBags] = useState([])

    const addToBag =(item)=>{
        const itemExists = bags.findIndex((item)=> bags.id === item.id)
        if(itemExists === -1){
            setBags([...bags, item])
        }
    }
    const product = {
        bags,
        addToBag,
    }

    return(
        <BagContext.Provider value={product}>
            {children}
        </BagContext.Provider>
    )
}