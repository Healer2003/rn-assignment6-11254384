import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState} from "react"

export const BagContext = createContext()

export const BagProvider = ({children})=>{

    const [bags, setBags] = useState([])
    useEffect(()=>{
        storeItems();
    })

    const storeItems = async () => {
        let bags = await AsyncStorage.getItem('bags');
        bags = bags ? JSON.parse(bags):[];
        setBags(bags)
      };

    const addToBag = async (item)=>{
        const itemExists = bags.findIndex((item)=> bags.id === item.id)
        if(itemExists === -1){
            const newItems = [...bags, item]
            await AsyncStorage.setItem('bags',JSON.stringify(newItems))
            setBags(newItems);
        }

    const deleteFromBag = async (item) =>{
        const newItems = bags.filter((bag)=>bag.id !== item.id)
        await AsyncStorage.setItem('bags', JSON.stringify(newItems))
        setBags(newItems)
    }
    }
    const product = {
        bags,
        addToBag,
        deleteFromBag
    }

    return(
        <BagContext.Provider value={product}>
            {children}
        </BagContext.Provider>
    )
}