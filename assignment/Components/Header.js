import { Image, StyleSheet, View } from "react-native"
import {Ionicons,SimpleLineIcons,EvilIcons} from '@expo/vector-icons'

export default function Header(){
    return(
        <View style={styles.head}>
            <SimpleLineIcons name="menu" size={28} color={"black"}/>
            <View style={{flex:0.99}}>
            <Image style={styles.img} source={require('../assets/Logo.png')} alt="app-logo"/>
            </View>
            <EvilIcons name="search" size={48} color={"black"}/>
            <SimpleLineIcons style={{marginLeft:10}} name="handbag" size={33} color={"black"}/>
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
        
    }

})