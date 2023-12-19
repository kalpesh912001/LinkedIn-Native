import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, Image, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { MaterialIcons, Ionicons, FontAwesome5, Entypo } from '@expo/vector-icons';

const register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');

    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
            <View >
                <Image source={{
                    uri: "https://www.freepnglogos.com/uploads/linkedin-logo-transparent-png-25.png",
                }}
                    style={{ width: 150, height: 100, resizeMode: 'contain' }} />
            </View>
            <View>
                <Text style={{ fontSize: 20, fontWeight: 600, textAlign: 'center', marginTop: 30, color: "#041E42", }}>Resister to your account</Text>
            </View>
            <KeyboardAvoidingView>
                <View style={{ marginTop: 50, width: 320 }}>
                    <View style={{ gap: 30 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, backgroundColor: '#f2f1ed', paddingHorizontal: 16, paddingVertical: 12, borderRadius: 4 }}>
                            <FontAwesome5 name="user-alt" size={24} color="black" />
                            <TextInput
                                value={name}
                                onChangeText={(text) => setName(text)}
                                placeholder={'Enter your name'}
                                style={{ paddingHorizontal: 14, flex: 1, fontSize: 17 }}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, backgroundColor: '#f2f1ed', paddingHorizontal: 16, paddingVertical: 12, borderRadius: 4 }}>
                            <MaterialIcons name="email" size={30} color="black" />
                            <TextInput
                                value={email}
                                onChangeText={(text) => setEmail(text)}
                                placeholder={'Enter your email'}
                                style={{ paddingHorizontal: 14, flex: 1, fontSize: 17 }}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, backgroundColor: '#f2f1ed', paddingHorizontal: 16, paddingVertical: 12, borderRadius: 4 }}>
                            <Ionicons name="lock-closed" size={30} color="black" />
                            <TextInput
                                secureTextEntry
                                value={password}
                                onChangeText={(text) => setPassword(text)}
                                placeholder={'Enter your password'}
                                style={{ paddingHorizontal: 14, flex: 1, fontSize: 17 }}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, backgroundColor: '#f2f1ed', paddingHorizontal: 16, paddingVertical: 12, borderRadius: 4 }}>
                            <Entypo name="image-inverted" size={24} color="black" />
                            <TextInput
                                value={image}
                                onChangeText={(text) => setImage(text)}
                                placeholder={'Enter your image url'}
                                style={{ paddingHorizontal: 14, flex: 1, fontSize: 17 }}
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
                        <Text>Keep me logged in</Text>
                        <Text style={{ fontWeight: 500, color: '#007FFF' }}>Forgot password?</Text>
                    </View>
                    <Pressable
                        style={{ backgroundColor: '#007FFF', width: '100%', marginTop: 40, padding: 14, borderRadius: 4 }}>
                        <Text style={{ fontSize: 20, fontWeight: 600, color: 'white', textAlign: 'center' }}>Register</Text>
                    </Pressable>
                    <Pressable onPress={() => router.push('/login')} style={{ marginTop: 15 }}>
                        <Text style={{ fontSize: 16, color: 'gray', textAlign: 'center' }}>Already have an account?, login</Text>
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default register

const styles = StyleSheet.create({})