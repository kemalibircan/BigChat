import React, { useState ,useEffect,useRef} from "react";
import {
  Button,
  FlatList,
  Image,
  ProgressViewIOSBase,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Messages from "./messages";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Home = () => {
  const [req, setReq] = useState("");
  const inputRef = useRef(null);
  const [data, setData] = useState([]);
  const flatListRef = useRef(data);

  const SendReq = () =>{
    const newData = [...data, { id: data.length + 1, title: req }];
    setData(newData)


    fetch('http://localhost:3000/',{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        message:req
      })
    }) 
    .then(response => {
      // Sunucudan gelen yanıtı kontrol edin
      if (!response.ok) {
        throw new Error('Sunucu hatası: ' + response.status);
      }
      return response.json();
    })
    .then(veri => {
      newData.push({ id: newData.length + 1, title: veri.choices[0].message.content });
      setData(newData); 

    })
    .catch(error => {
      console.error('Bir hata oluştu:', error);
    })
    .catch(e => console.log(e))

    inputRef.current.clear(); // Clear the input value
    inputRef.current.blur();   
  }

  renderItem = ({ item, index }) => {
    return <Messages item={item} index={index}></Messages>;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.bigContainer}>
        <View style={styles.headTextContainer}>
          <Text style={styles.headText}>GPT-3.5</Text>
        </View>
        <View style={styles.contentContainer}>
          <FlatList
            data={data}
            renderItem={renderItem}
            style={styles.flatListContainer}
            ref={flatListRef}
            keyExtractor={(item) => item.id}
            extraData={data}

          />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              value={req}
              onChangeText={(req) =>setReq(req)}
              placeholder="Type your message..."
              ref={inputRef}
            />
            <TouchableOpacity style={styles.sendButton} onPress={SendReq}>
              <FontAwesome5 name="paper-plane" size={20} color="black" />
            </TouchableOpacity>
          </View> 
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  bigContainer: {
    flex: 1,
  },
  headTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    borderBottomWidth: 2,
    height: 50,
    alignItems: "center",
  },
  headText: {
    fontSize: 25,
    fontWeight: "500",
    color: "black",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  flatListContainer: {
    flex: 1,
    width: "100%",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopWidth: 2,
  },
  textInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 10,
 
  }})