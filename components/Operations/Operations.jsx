import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { pushOperation, resetOperations, delLastOperation, resultOfOperations } from '../../store/slices/OperationSlice'
import MyButton from '../MyButton'

export default function () {

    const dispatch = useDispatch()

    const baseOperation = (key) => {
        dispatch(pushOperation(key))
    }

    const choseOperation = (handler, key) => {
        if (handler) {
            handler(key)
        } else {
            baseOperation(key)
        }
    }

    const delOperation = (key) => {
        dispatch(delLastOperation(key))
    }

    const resetOperation = () => {
        dispatch(resetOperations())
    }

    const resultOperation = () => {
        dispatch(resultOfOperations())
    }

    const operations = [
        { key: 'res', handler: resetOperation },
        { key: '()', },
        { key: '%', },
        { key: '/', },
        { key: '7', },
        { key: '8', },
        { key: '9', },
        { key: 'x', },
        { key: '4', },
        { key: '5', },
        { key: '6', },
        { key: '-', },
        { key: '1', },
        { key: '2', },
        { key: '3', },
        { key: '+', },
        { key: '0', },
        { key: ',', },
        { key: 'del', handler: delOperation },
        { key: '=', handler: resultOperation },
    ]

    return (
        <View style={styles.container}>
            {operations.map(({ key, handler }) => <MyButton text={key} onPress={() => choseOperation(handler, key)} key={key} />)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row'
    }
})