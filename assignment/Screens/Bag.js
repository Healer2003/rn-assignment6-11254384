import { FlatList, StyleSheet, Text ,View} from "react-native"
import BagComponent from "../Components/BagComponent"
import {Ionicons} from '@expo/vector-icons'
import { useNavigation} from "@react-navigation/native"
import { useContext } from "react"
import { BagContext } from "../Components/BagContext"



export default function Bag(){
    const {bags,deleteFromBag} = useContext(BagContext)
    const navigation = useNavigation()
    return(
        <View style={{
            flex:1,
            paddingTop:40,
            paddingHorizontal:15,
        }}>
            <View style={{flexDirection:"row",alignItems:"center"}}>
                <Ionicons style={{flex:0.5}} name="arrow-back" size={25} color={"#df8b62"} onPress={()=>{navigation.goBack()}}/>
            <Text style={styles.text}>Shopping Bag</Text>
            </View>
            
            <View style={{flex:1}}>
                <FlatList data={bags} renderItem={({item})=>(<BagComponent item={item} deleteFrom={deleteFromBag}/>)} keyExtractor={item=>item.id} showsVerticalScrollIndicator={false}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize:24,
        color:'#df8b62',
        fontWeight:"500",
    }
})