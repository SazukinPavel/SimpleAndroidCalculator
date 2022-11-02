import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

export default function ({ text, onPress }) {
    return (
        <Pressable style={styles.action} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    action: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        elevation: 3,
        width: 80,
        height: 80,
        margin: 3
    },
    text: {
        textAlign: 'center',
    }
})