import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Pressable, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';


const login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
                <Text style={{ fontSize: 20, fontWeight: 600, textAlign: 'center', marginTop: 30, color: "#041E42", }}>Log in to your account</Text>
            </View>
            <KeyboardAvoidingView>
                <View style={{ marginTop: 80, width: 320 }}>
                    <View style={{ gap: 45 }}>
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
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
                        <Text>Keep me logged in</Text>
                        <Text style={{ fontWeight: 500, color: '#007FFF' }}>Forgot password?</Text>
                    </View>
                    <Pressable
                        style={{ backgroundColor: '#007FFF', width: '100%', marginTop: 40, padding: 14, borderRadius: 4 }}>
                        <Text style={{ fontSize: 20, fontWeight: 600, color: 'white', textAlign: 'center' }}>Login</Text>
                    </Pressable>
                    <Pressable onPress={() => router.push('/register')} style={{ marginTop: 15 }}>
                        <Text style={{ fontSize: 16, color: 'gray', textAlign: 'center' }}>Don't have any account, resister?</Text>
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default login

const styles = StyleSheet.create({})