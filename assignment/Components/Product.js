import { Image, StyleSheet,View,Text } from "react-native"
import {Ionicons} from '@expo/vector-icons'

export default function Product({name}){
    return(
        <View style={styles.main}>
            <View style={styles.imgview}>
            <Image style={styles.img} source={require('../assets/dress1.png')}/>
            <Ionicons style={styles.add} name="add-circle-outline" size={34} color={"black"}/>
            </View>
           <View style={{flex:1,paddingLeft:3}}>
            <Text style={styles.text}>
                {name}
            </Text>
            <Text style={[styles.text,{color:"#898993"}]}>reversible angora cardigan</Text>
            <Text style={styles.amount}>
                $120
            </Text>
           </View>

        </View>

    )
}

const styles = StyleSheet.create({
    main:{
        width:'50%',
        height:'50%',
        borderWidth:1,
    },
    img:{
        objectFit:"cover",
        width:'100%',
        height:'100%'
    },
    imgview:{
        width:"100%",
        borderWidth:1,
        borderColor:"red",
        flex:4,
    },
    add:{
        position:"absolute",
        top:215,
        left:148
    },
    text:{
        fontSize:15,
        fontWeight:"500"
    },
    amount:{
        fontSize:20,
        color:"#df8b62",
        fontWeight:"500"
    }

})