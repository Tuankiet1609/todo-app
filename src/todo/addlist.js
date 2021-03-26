import React, { useContext, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  TextInput,
} from "react-native";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";
import Context from "../todo/Context";
import styles from '../todo/styles';
import { ApplicationStyles } from '../themes';

function ItemInputTodo({ value, onChange, index, }) {
  return (
    <TextInput
      onChangeText={(text) => onChange(text, index)}
      style={[styles.input, styles.inputTodo]}
      value={value}
    ></TextInput>
  );
}

ItemInputTodo.defaultProps = {
  value: "",
  onChange: () => {},
  index: -1,
};

function addl(props) {
  const [title, setTitle] = useState("");
  const [listTodo, setListTodo] = useState([]);
  const navigation = useNavigation();
  const [context, setContext] = useContext(Context);

  const handleBuy = () => {
    if (!title.trim()) {
      return Alert.alert("Chưa nhập công việc.");
    }

    if (listTodo.length === 0) {
      return Alert.alert("Chưa nhập nội dung.");
    }

    var time = new Date();
    const currentTime = `${time.getHours()}:${time.getMinutes()} ${time.getDate()}/${
      time.getMonth() + 1
    }/${time.getFullYear()}`;
    setContext((state) => [
      ...state,
      {
        id: context.length + 1,
        name: title,
        time: currentTime,
		    date: currentTime,
        Detail: listTodo,
      },
    ]);
    navigation.navigate("Products");
  };

  const handleAddItemTodo = () => {
    setListTodo((state) => {
      return [...state, ""];
    });
  };

  const handleChangeText = (text, index) => {
    if (index === -1) {
      return setListTodo([text]);
    }

    setListTodo((state) => {
      const cloneList = [...state];
      cloneList[index] = text;
      return cloneList;
    });
  };

  const renderItemTodo = () => {
    if (listTodo.length < 2) {
      return (
        <ItemInputTodo
          onChange={handleChangeText}
          index={-1}
          value={listTodo[0]}
        ></ItemInputTodo>
      );
    }

    return (
      <>
        {listTodo.map((item, index) => {
          return (
            <ItemInputTodo
              onChange={handleChangeText}
              index={index}
              key={index.toString()}
              value={item}
            ></ItemInputTodo>
          );
        })}
      </>
    );
  };

  return (
    <View style={ApplicationStyles.screen.container}>
      <Header

				title={
                <Text>
                    <View>
                        <View style={styles.divider}/>
                        <Text style={styles.titlet}>
                             Thêm  <Text style={{ fontWeight: "300", color: "#24A6D9" }}> 
                              công việc</Text>
                 </Text>
            
            </View></Text>}
			></Header>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.header}>Công việc:</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={(text) => setTitle(text)}
          ></TextInput>

          <View style={styles.inputGroup}>
            <Text style={styles.header}>Nội dung: </Text>
            {renderItemTodo()}
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.button} onPress={handleBuy}>
            <Text style={styles.buttonText}> Thêm</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}


export default addl;
