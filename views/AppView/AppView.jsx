import React from 'react'
import { View, StyleSheet } from 'react-native'
import Board from '../../components/Board'
import Operations from '../../components/Operations'

export default function App() {

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Board/>
            </View>
            <View style={styles.bottom}>
            <Operations/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column'
    },
  top:{
    flex:2
  },
  bottom:{
    flex:3
  }
})
