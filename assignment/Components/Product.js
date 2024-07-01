import { ImageBackground, StyleSheet,View } from "react-native"
import {Ionicons} from '@expo/vector-icons'

export default function Product(){
    return(
        <View style={styles.main}>
           <ImageBackground style={styles.img} source={require('../assets/dress1.png')}>
            <Ionicons name="add-circle-outline" size={35} color={"black"}/>
           </ImageBackground>
           <View>

           </View>

        </View>

    )
}

const styles = StyleSheet.create({
    main:{
        width:'50%',
        height:'60%'
    },
    img:{
        height:260,
        resizeMode:"contain",
        flexDirection:"row",
        alignItems:"flex-end",
        justifyContent:"flex-end",
        paddingHorizontal:10,
        paddingVertical:10
    }

})