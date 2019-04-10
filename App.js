
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      visible: false,
      posts:[
        {key: 1, username: 'Henrique Dias', image:'https://sujeitoprogramador.com/wp-content/uploads/2019/03/como.png'},
        {key: 2, username: 'Sujeito Programador', image: 'https://sujeitoprogramador.com/wp-content/uploads/2019/02/js.png'},
        {key: 3, username: 'Luana Souza', image: 'https://sujeitoprogramador.com/wp-content/uploads/2019/01/coverCodeEdit.png'}
      ]
    }
  }

  componentDidMount(){
    setTimeout(() => this.setState({visible: !this.state.visible}), 2000);
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={{width:'100%', height:55, backgroundColor: '#DDD', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 25, color: '#000'}}>Instagram</Text>
      </View>
      <ScrollView>
      {this.state.posts.map((post)=>{
        return(
          <View key={post.key}>
          <ShimmerPlaceHolder
          style={{height: 40, margin: 10, borderRadius: 10 }}
          autoRun={true}
          visible={this.state.visible}
          >
  
        <View style={{width: '100%' ,height: 55, flexDirection:'row', alignItems: 'center'}}>
          
          <Image source={{uri:post.image}} style={{width: 40, height:40, borderRadius: 25, marginLeft:10}}/>
          
          <Text style={{color: '#000', fontWeight:'bold', marginLeft: 10}}>
            {post.username}
          </Text>
        </View>
        </ShimmerPlaceHolder>
  
        <ShimmerPlaceHolder
          style={{width: '100%' ,height: 300 }}
          autoRun={true}
          visible={this.state.visible}
        >
  
        <View style={{backgroundColor:'#DDD', width: '100%' ,height: 300}}>
         <Image source={{uri:post.image}} style={{height:300}}/>
        </View>
        </ShimmerPlaceHolder>
        </View>
        );
      })}
      </ScrollView>

      
      </View>
    );
  }
}

const Lista = () => {
    return(
      <Text>123123</Text>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
