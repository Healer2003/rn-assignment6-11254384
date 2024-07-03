import { FlatList, StyleSheet, View } from "react-native"
import Header from "../Components/Header"
import Story from "../Components/Story"
import {product} from '../Components/Data'
import Product from "../Components/Product"
import { useContext } from "react"
import { useNavigation } from "@react-navigation/native"
import { BagContext } from "../Components/BagContext"


export default function Home(){
    const navigation = useNavigation()
    const {bags,addToBag} = useContext(BagContext)
    
    const add = (item)=>{
        

        bags.length == 0 ? addToBag(item) && navigation.navigate('Bag'):addToBag(item)
        
    }
    

    const render = ({item}) =>{
        return(
            <Product name={item.name} src={item.image} press={()=>{add(item)}}/>
        )
    }
    return(
        <View style={styles.main}>
            <Header/>
            <Story/>

            <View style={{flex:1,alignItems:"center"}}>
                <FlatList data={product} renderItem={render} keyExtractor={item=>item.id} numColumns={2} columnWrapperStyle={{columnGap:10}} showsVerticalScrollIndicator={false}/>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    main:{
        flex:1,
        paddingHorizontal:15,
        paddingTop:20,
    
    }
})