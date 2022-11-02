import React from 'react'
import { useDispatch } from 'react-redux'
import { pushInCalculateString } from '../../store/slices/AppSlice'
import MyButton from '../MyButton'
import { StyleSheet } from 'react-native'

const operations = ['+', '-', '/', '*']

export default function () {

    const dispatch = useDispatch()

    const onOperationPress = (operation) => {
        dispatch(pushInCalculateString(operation))
    }

    return (
        <>
            {operations.map(operation => <MyButton onPress={() => onOperationPress(operation)} text={operation} />)}
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
})
