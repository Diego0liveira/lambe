import React, { Component } from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'

class Feed extends Component {
    state = {
        posts: [{
            id: Math.random(),
            nickname: 'Mario Luiz Pereira',
            email: 'mario@gmail.com',
            image: require('../../assets/imgs/fence.jpg'),
            comments: [{
                nickname: 'Diego Oliveira',
                comment: 'Excelente foto! Preciso de umas dicas para tirar fotos tão perfeitas.'
            },
            {
                nickname: 'Paulo Andrade',
                comment: 'Bem maneira essa foto'
            }]
        }, {
                id: Math.random(),
                nickname: 'Fernando Nunes',
                email: 'mario@gmail.com',
                image: require('../../assets/imgs/bw.jpg'),
                comments: [{
                    nickname: 'Ana Julia Oliveira',
                    comment: 'Excelente foto! Preciso de umas dicas para tirar fotos tão perfeitas.'
                }, {
                    nickname: 'Felipe Guimarães',
                    comment: 'Bem maneira essa foto'
                }, {
                    nickname: 'Mario Vergara',
                    comment: 'Excelente foto! Preciso de umas dicas para tirar fotos tão perfeitas.'
                }, {
                    nickname: 'Maria da Penha',
                    comment: 'Bem maneira essa foto'
                }]
        }]
    }

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <FlatList
                    data={this.state.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) =>
                        <Post key={item.id} {...item} />
                    }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})

export default Feed