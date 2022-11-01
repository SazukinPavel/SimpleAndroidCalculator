import React from 'react'
import { View, StyleSheet } from 'react-native'
import MyButton from '../MyButton'

const variables = ['1', '2', '3', '4', '5', '6', '7', '8', '9']


export default function Numbers() {
    return (
        <View style={styles.container}>
            {
                variables.map(
                    (val, index) => <MyButton text={val} key={index} />)
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        flexDirection: 'row',
        margin: 10,
        flexWrap: 'wrap'
    },
})
