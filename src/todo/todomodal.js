import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import Products from '../services/Products';
import Header from '../components/Header';


function  todomodal({ navigation, route }) {
	const { idJob } = route.params;
	const job = Products.filter((item) => item.id === idJob)[0];
	console.log(job);
	
	return (
		<View style={styles.container}>
			<Header
				title={
                <Text>
                    <View>
                        <View style={styles.divider}/>
                        <Text style={styles.titlet}>
                             Chi tiết <Text style={{ fontWeight: "300", color: "#24A6D9" }}> 
                              công việc</Text>
                 </Text>
            
            </View></Text>}
			></Header>
			<ScrollView>
				<View style={styles.wrapper}>
					

					<View style={styles.element}>
						<Text style={styles.title}>Ghi chú</Text>
						<Text style={styles.content}>{job.Detail}</Text>
					</View>
					
					
				</View>
			</ScrollView>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	wrapper: {
		flex: 1,
	},
	element: {
		marginHorizontal: 8,
		marginVertical: 8,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	content: {
		fontSize: 15,
	},
    divider: {
        backgroundColor: "#A7CBD9",
        height: 1,
        flex : 1,
        alignSelf: "center",

    },
    titlet: {
        color:"#2D3436",
        fontSize: 30,
        paddingHorizontal: 48,
        fontWeight: "800",
    },
});
export default todomodal;