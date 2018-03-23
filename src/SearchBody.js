import React from 'react';
import { Text, ScrollView, View,Image,Dimensions, ImageBackground } from 'react-native';
import { ListItem, List } from 'native-base';
var width = Dimensions.get('window').width
var height = Dimensions.get('window').height

class SearchBody extends React.Component {
    render(){
        var poke = this.props.data;
        if(!poke){
            return<View/>
        }
        return(
            <ImageBackground
                style={styles.backgroundImage}
                source={{uri:'https://pokemongolive.com/img/posts/halloween_loading.png'}}
            >
            <ScrollView style={{flex:1}}>
               <Text style={styles.header}>#{poke.id} - {poke.name.toUpperCase()}</Text>
               <View style={styles.viewStyle}>
                   <Image
                    source={{uri:poke.sprites.front_default}}
                    style={styles.img}
                   />
                </View>
                <View style={styles.info}>
                    <ListItem itemDivider>
                        <Text style={{fontWeight:'bold'}}>
                            Size
                        </Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>
                        {' '}Weight: {poke.weight}kg
                        </Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>
                        {' '}Height: {poke.height/10}m
                        </Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text style={{fontWeight:'bold'}}>
                            Abilities
                        </Text>
                    </ListItem>
                   <List dataArray ={poke.abilities}
                      renderRow={(item)=>
                        <ListItem>
                            <Text>
                               {item.ability.name}
                            </Text>
                        </ListItem>
                        }>
                    </List>
                </View>
            </ScrollView>
            </ImageBackground>
        )
    }
}
const styles = {
    backgroundImage:{
        flex:1,
        resizeMode:'cover',
        width:width,
        height:height
    },
    header: {
        fontSize:30,
        color:'white',
        textAlign:'center'
    },
    viewStyle: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    img:{
        width:200,
        height:200,
        marginTop:10,
        justifyContent:'center',
        alignItems:'center'
    },
    info: {
        color:'white'
    }
}
export default SearchBody;