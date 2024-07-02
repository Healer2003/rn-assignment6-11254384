import { Image,StyleSheet,View,Text } from "react-native"
import {Ionicons,MaterialIcons} from '@expo/vector-icons'
import { useContext } from "react"
import { BagContext } from "./BagContext"


export default function BagComponent({item,deleteFromBag}){
    
    return(   
     <View style={styles.main}>
        <View>
           <Image source={item.image}/> 
        </View>
        
        <View style={styles.textView}>
        <Text style={styles.text}>{item.name}</Text>
        <Text style={[styles.text,{color:"#898993"}]}>reversible angora cardigan</Text>
        <Text style={styles.amount}>${120}</Text>
        </View>
        <MaterialIcons name="highlight-remove" size={25} color={"red"} onPress={()=>{deleteFromBag(item)}}/>
     </View>
    )
}

const styles = StyleSheet.create({
    main:{
        height:230,
        marginBottom:30,
        flexDirection:"row",
        borderWidth:1
    },
    textView:{
        flex:1,
        justifyContent:"center",
        paddingHorizontal:10
    },
    text:{
        fontSize:17,
        fontWeight:"500"
    },
    amount:{
        fontSize:20,
        color:"#df8b62",
        fontWeight:"500"
    }

})