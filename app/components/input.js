import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react';
import { useField } from 'formik';


const input = ({
    label,
    labelStyle,
    inputStyle,
    placeHolder,
    secureTextEntry = false,
    onChangeText,
    onBlur,
    value,
    name
}) => {

    const [meta, helpers, field] = useField(name);
    return (
        <View style={{ gap: 8 }}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                {...field}
                name={name}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                style={inputStyle}
                placeholder={placeHolder}
                onBlur={onBlur}
                value={value}
            />
            <Text style={{ color: 'red', text: '14', marginTop: 5 }}>Required</Text>
        </View>
    )
}

export default input

const styles = StyleSheet.create({})