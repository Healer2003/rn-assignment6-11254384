import { FlatList, StyleSheet, View } from "react-native"
import Header from "../Components/Header"
import Story from "../Components/Story"
import {product} from '../Components/Data'
import Product from "../Components/Product"

export default function Home(){
    return(
        <View style={styles.main}>
            <Header/>
            <Story/>

            <View style={{flex:1}}>
                <Product/>
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