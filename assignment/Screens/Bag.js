import { StyleSheet, Text ,View} from "react-native"


export default function Bag(){
    return(
        <View style={{
            flex:1,
            alignItems:"center",
            paddingTop:40,
            paddingHorizontal:15,
        }}>
            <Text style={styles.text}>Shopping Bag</Text>
            <View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize:24,
        color:'#df8b62',
        fontWeight:"500"
    }
})