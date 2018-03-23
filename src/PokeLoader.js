import React from 'react';
import { View,Text,Image, ImageBackground} from 'react-native';

class PokeLoader extends React.Component {
    render(){
        return(
            <View style={{flex:1}}>
                <ImageBackground source={{uri:'https://thumbs.gfycat.com/GrandEnlightenedGyrfalcon-size_restricted.gif'}}
                style={styles.img}
                />
            </View>
        )
    }
}
const styles = {
    img:{
        width:400,
        height:400,
        justifyContent:'center',
        alignItems:'center'
    }
}
export default PokeLoader;