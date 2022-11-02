import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { useSelector } from 'react-redux'

export default function Board() {

    const { operations } = useSelector((state) => state.operation)

    return (
        <Text style={styles.text}>
            {operations}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 60
    }
})