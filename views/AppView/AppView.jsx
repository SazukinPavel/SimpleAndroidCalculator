import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import MainOperations from '../../components/MainOperations'
import Numbers from '../../components/Numbers'
import Operations from '../../components/Operations'

export default function App() {

    const { calculateString } = useSelector((state) => state.app)

    return (
        <View style={styles.container}>
            <Text>{calculateString}</Text>
            <View style={styles.operationsContainer}>
                <View style={styles.topContainer}>
                    <MainOperations />
                </View>
                <View style={styles.center}>
                    <View style={styles.leftCenter}>
                        <Numbers />
                    </View>
                    <View style={styles.rightCenter}>
                        <Operations />
                    </View>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    operationsContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    topContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    center: {
        flex: 7,
        flexDirection: 'row'
    },
    leftCenter: {
        flex: 3,
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    rightCenter: {
        flex: 1,
        flexDirection: 'column'
    }
})
