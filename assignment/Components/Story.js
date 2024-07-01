import { StyleSheet, View,Text } from "react-native"
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons'

export default function Story(){
    return(
        <View style={styles.main}>
            <Text style={styles.text}>
                OUR STORY
            </Text>
            <View style={styles.subview}>
               <MaterialCommunityIcons name="format-list-checkbox" size={32} color={"#898993"}/>
            </View>
            <View style={styles.subview}>
                <Ionicons name="filter-outline" size={32} color={"#df8b62"}/>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    main:{
        flexDirection:"row",
        marginVertical:35,
        alignItems:"center"
    },
    text:{
        fontSize:24,
        fontWeight:"500",
        flex:1
    },
    subview:{
         paddingHorizontal:8,
         paddingVertical:8,
         borderRadius:50,
         backgroundColor:"#f9f9f9",
         marginLeft:15
         
    }
})