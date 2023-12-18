import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Pressable } from 'react-native'
import React from 'react';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import Input from '../components/input';
import { Formik } from 'formik/dist';
import { loginInitials } from '../../utils/formikInitialValues';
import { loginValidations } from '../../utils/formikValidations';


const login = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
            <View >
                <Image source={{
                    uri: "https://www.freepnglogos.com/uploads/linkedin-logo-transparent-png-25.png",
                }}
                    style={{ width: 150, height: 100, resizeMode: 'contain' }} />
            </View>
            <View>
                <Text style={{ fontSize: 20, fontWeight: 600, textAlign: 'center', marginTop: 30, color: "#041E42", }}>Log in to your account</Text>
            </View>
            <View style={{ marginTop: 80, width: '90%' }}>
                <Formik
                    initialValues={loginInitials}
                    validationSchema={loginValidations}
                    handleSubmit={() => { }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <View style={{ gap: 45 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, backgroundColor: '#f2f1ed', paddingHorizontal: 16, paddingVertical: 12, borderRadius: 4 }}>
                                <MaterialIcons name="email" size={30} color="black" />
                                <Input
                                    name={'email'}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    inputStyle={{ paddingHorizontal: 14, flex: 1, fontSize: 16 }}
                                    placeHolder={'Enter your email'}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, backgroundColor: '#f2f1ed', paddingHorizontal: 16, paddingVertical: 12, borderRadius: 4 }}>
                                <Ionicons name="lock-closed" size={30} color="black" />
                                <Input
                                    secureTextEntry={true}
                                    name={'password'}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.email}
                                    inputStyle={{ paddingHorizontal: 14, flex: 1, fontSize: 16 }}
                                    placeHolder={'Enter your password'}
                                />
                            </View>
                        </View>
                    )}
                </Formik>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
                    <Text>Keep me logged in</Text>
                    <Text style={{ fontWeight: 500, color: '#007FFF' }}>Forgot password?</Text>
                </View>
                <Pressable
                    style={{ backgroundColor: '#007FFF', width: '100%', marginTop: 40, padding: 14, borderRadius: 4 }}>
                    <Text style={{ fontSize: 20, fontWeight: 600, color: 'white', textAlign: 'center' }}>Login</Text>
                </Pressable>
                <Pressable style={{ marginTop: 15 }}>
                    <Text style={{ fontSize: 16, color: 'gray', textAlign: 'center' }}>Don't have any account, resister?</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default login

const styles = StyleSheet.create({})