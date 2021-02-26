/** @format */

import React from 'react';
import { View, Text, StyleSheet, TextInput,Image, TouchableOpacity } from 'react-native';

function Login({navigation}) {
	return (
		<View style={styles.waper}>
			<Image
				source={require('../image/logo.png')}
				style={styles.image}
			></Image>
			<TextInput
				style={[styles.input, styles.user]}
				placeholder='Tên đăng nhập'
			></TextInput>
			<TextInput 
                style={styles.input} placeholder='Mật khẩu'
                secureTextEntry
            ></TextInput>

            <TouchableOpacity 
                style={styles.Login}
				onPress={() => navigation.navigate('Products')}
            >
                <Text style={styles.textLogin}>Đăng nhập</Text>
            </TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	waper: {
		flex: 10,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff'
	},
	input: {
		width: 300,
		height: 40,
		backgroundColor: 'rgba(0,0,0,.1)',
		borderRadius: 7,
		fontSize: 20,
		paddingHorizontal: 25,
	},
	user: {
		marginBottom: 5
	},
	image: {
		width: 300,
		resizeMode: 'contain',
	},
    Login: {
        width: 300,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#FF99CC',
        marginTop: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textLogin: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold'
    }
});

export default Login;
