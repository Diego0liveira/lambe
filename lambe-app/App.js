import React, {Component} from 'react';
import Header from './src/components/Header';
import Post from './src/components/Post';
import { View } from 'react-native'

export default class App extends Component {
    render() {

        const comments = [{
           nickname: 'Diego Oliveira',
           comment: 'Excelente foto! Preciso de umas dicas para tirar fotos tão perfeitas.' 
        },
        {            
            nickname: 'Paulo Andrade',
            comment: 'Bem maneira essa foto'
        }]

        return (
            <View style={{ flex: 1}}> 
                <Header />
                <Post image={require('./assets/imgs/fence.jpg')} 
                    comments={comments} />
            </View>
        )
    }
}
