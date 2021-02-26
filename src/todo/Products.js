import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Products() {
    return (
        <View style={styles.waper}>
            <View style={{ flexDirection: "row"}}>
                <View style={styles.divider}/>
                <Text style={styles.title}>
                    Danh sách<Text style={{ fontWeight: "300", color: "#24A6D9" }}> công việc</Text>
                    </Text>
            
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    waper: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
    },
    divider: {
        backgroundColor: "#A7CBD9",
        height: 1,
        flex : 1,
        alignSelf: "center",

    },
    title: {
        color:"#2D3436",
        fontSize: 30,
        paddingHorizontal: 48,
        fontWeight: "800",
        
    },

})

export default Products;