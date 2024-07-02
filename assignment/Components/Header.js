import { Image, StyleSheet, View,Text} from "react-native"
import {Ionicons,SimpleLineIcons,EvilIcons} from '@expo/vector-icons'
import { useContext } from "react"
import { BagContext } from "./BagContext"

export default function Header(){
    const {bags} = useContext(BagContext)
    return(
        <View style={styles.head}>
            <SimpleLineIcons name="menu" size={28} color={"black"}/>
            <View style={{flex:0.97}}>
            <Image style={styles.img} source={require('../assets/Logo.png')} alt="app-logo"/>
            </View>
            <EvilIcons name="search" size={48} color={"black"}/>
            <View style={{position:"relative",}}>
            <SimpleLineIcons style={{marginLeft:18}} name="handbag" size={33} color={"black"}/>
            <View style={{
                backgroundColor:"#df8b62",
                width:15,
                height:15,
                borderRadius:50,
                justifyContent:"center",
                position:"absolute",
                right:-8,
                top:-2,
                
                }}>

                    <Text style={styles.text}>
                        {bags.length}
                    </Text>

            </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    head:{
        flexDirection:"row",
        alignItems:"center"
    },
    img:{
        width:120,
        height:50,
        alignSelf:"center"
    },
    text:{
        fontSize:11,
        color:"white",
        alignSelf:"center",
        fontWeight:"500",
        

    }

})