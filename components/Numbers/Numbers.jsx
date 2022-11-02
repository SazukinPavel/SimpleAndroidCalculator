import React from 'react'
import { useDispatch } from 'react-redux'
import { pushInCalculateString } from '../../store/slices/AppSlice'
import MyButton from '../MyButton'

const variables = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']

export default function Numbers() {

    const dispatch = useDispatch()

    const onNumberPress = (val) => {
        dispatch(pushInCalculateString(val))
    }

    return (
        <>
            {
                variables.map(
                    (val, index) => <MyButton onPress={() => onNumberPress(val)} text={val} key={index} />)
            }
        </>
    )
}
