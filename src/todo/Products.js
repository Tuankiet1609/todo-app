import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Header from '../components/Header/index';
import {AntDesign} from '@expo/vector-icons';
import data from '../services/Products'

function ItemList({ data }) {
    return (
      <TouchableOpacity>
        <View style={styles.container}>
          
            
            <Text style={styles.tille}>Tên việc <Text style={styles.id}>
              {data.id}: 
            </Text> {data.name}</Text>
           <View style={styles.header}>
            <Text style={styles.date}>Ngày làm: {data.date}</Text>
            <Text style={[styles.time, { textTransform: "uppercase" }]}>
              Thời gian: {data.time}
            </Text>
            </View>
          
        </View>
      </TouchableOpacity>
    );
  }

function Products() {
    return (
        <View style={styles.waper}>
            <Header
				title={
                <Text>
                    <View>
                        <View style={styles.divider}/>
                        <Text style={styles.title}>
                             Danh sách <Text style={{ fontWeight: "300", color: "#24A6D9" }}> 
                              công việc</Text>
                 </Text>
            
            </View></Text>}
			></Header>
            <View style={{marginVertical: 48}}>
                <TouchableOpacity >
                    <View style={styles.add}>
                        <AntDesign name="plus" size = {16} />
                    </View>
                </TouchableOpacity>

            </View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <ItemList data={item}></ItemList>}
            ></FlatList>
            
        </View>
    );
}

const styles = StyleSheet.create({
    waper: {
        flex: 1,
        backgroundColor:"#fff",
    
    },
    add: {
        backgroundColor: "#24A6D9",
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderRadius: 10,
        padding: 16,
        marginHorizontal: 15,

        
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
    container: {
        paddingVertical: 32,
        paddingHorizontal: 16,
        borderRadius: 6,
        marginHorizontal: 15,
       marginBottom: 15,
        backgroundColor: "#A7CBD9"


    },
    tille:{
        fontSize: 24,
        fontWeight: "700",
        color: "#fff",
        marginBottom: 18,

    }

    

})

export default Products;