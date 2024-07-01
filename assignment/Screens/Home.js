import { FlatList, StyleSheet, View } from "react-native"
import Header from "../Components/Header"
import Story from "../Components/Story"
import {product} from '../Components/Data'
import Product from "../Components/Product"

export default function Home(){

    const render = ({item}) =>{
        return(
            <Product name={item.name} src={item.image}/>
        )
    }
    return(
        <View style={styles.main}>
            <Header/>
            <Story/>

            <View style={{flex:1}}>
                <FlatList data={product} renderItem={render} keyExtractor={item=>item.id} numColumns={2} columnWrapperStyle={{columnGap:20}} showsVerticalScrollIndicator={false}/>
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