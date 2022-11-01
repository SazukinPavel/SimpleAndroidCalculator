import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

export default function ({ text, onPress }) {
    return (
        <Pressable style={styles.action} onPress={onPress}><Text>{text}</Text></Pressable>
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
    action: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        width: 80,
        height: 80,
        margin: 5
    }
})