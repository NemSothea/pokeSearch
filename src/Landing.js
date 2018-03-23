import React from 'react';
import { Text, View,Image,ImageBackground } from 'react-native';
import {Button} from 'native-base';

var myBackground = require('../assets/landing.jpg');

class Landing extends React.Component {
  render() {
    return (
        <View>
         
            <View style={styles.viewStyle}>
              <Text style={styles.titleStyle}>Welcome to PokSearch</Text>
              <Button style={styles.buttonStyle} 
                  block={true}
                  onPress={()=>this.props.switchScreen("search")}>
                  <Text style={styles.buttonText}>
                    Start Searching
                  </Text>
              </Button>
            </View>
           
        </View>
    )
  }
}
const styles = {
  viewStyle: {
    flex:1,
    flexDirection: 'column',
    marginTop:'50%',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize:30,
    color:'blue',
    alignItems:'center'
  },
  buttonStyle: {
    width:'100%',
    alignItems:'center',
    justifyContent:'center'
  }, 
  buttonText: {
    color:'white',

  }
}
export default Landing;