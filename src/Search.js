import React from 'react';
import {View,Text} from 'react-native';
import {Header,Item,Input,Button, Icon} from 'native-base';
import PokeLoader from './PokeLoader';
import SearchBody from './SearchBody';
import axios from 'axios';

class Search extends React.Component {
    state = {
        pokeSearch:"",
        isCall:true,
        data: {}
    }

    searchPoke = () => {
        this.setState({isCall:true});
        if(this.state.pokeSearch == "") {
            return
        }
        var self = this;
        axios.get("http://pokeapi.co/api/v2/pokemon/"+this.state.pokeSearch.toLowerCase())
        .then(function(response){
            console.log(response.data);
            self.setState({data:response.data});
            self.setState({isCall:false});
        })
        .catch(function(error){
            console.log('Me');
            console.log(error);
        });
    }
    renderBody = () => {
        if(this.state.isCall){
            return(
                <PokeLoader/>
            )
        }else {
            return(
                <SearchBody data={this.state.data}/>
            )
        }
    }
    render(){
        return(
            <View style={{flex:1}}>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" onPress={this.searchPoke}/>
                        <Input placeholder="search Pokemon"
                        value={this.state.pokeSearch}
                        onChangeText={(pokeSearch)=>this.setState({pokeSearch})}
                        />
                    </Item>
                
                </Header>
                {this.renderBody()}
            </View>
        );
    }
}

export default Search;