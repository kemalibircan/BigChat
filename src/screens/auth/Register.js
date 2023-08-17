import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet, VirtualizedList ,SafeAreaView,TouchableOpacity} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [surname, setSurname] = useState("");

  const Register = () => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,  
        password,
        surname
      })
    })
      .then(response => {
        // Sunucudan gelen yanıtı kontrol edin
        if (!response.ok) {
          throw new Error("Sunucu hatası: " + response.status);
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error("Bir hata oluştu:", error);
      });
  };

  return (
    <SafeAreaView style={{backgroundColor:'#f5f5f5',height:'100%'}}>
        <View style={styles.container} >
        <View style={styles.textContainerSignin}><Text style={styles.textSignin}>Register</Text></View>
    
        <View style={styles.textInputContainer}><TextInput placeholder="Name" style={styles.inputplace}></TextInput></View>   
        <View style={styles.textInputContainer}><TextInput placeholder="E-mail" style={styles.inputplace}></TextInput></View>   
        <View style={styles.textInputContainer}><TextInput placeholder="Password" style={styles.inputplace}></TextInput></View>   

        <View>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Continue</Text></TouchableOpacity>

        <View style={{flexDirection:'row',marginTop:5,marginLeft:10}}>
            <Text style={{color:'black'}}>Login </Text>
             <TouchableOpacity><Text style={{fontWeight:'600',color:'black'}}>Already have an account?</Text></TouchableOpacity>
             </View>
        </View>
    
        <View style={styles.optionLoginContainer}>
    
                    <TouchableOpacity style={styles.elementLogin}>
                                <FontAwesome5 name="google" size={20} color="black" style={{height:35,width:35,marginRight:25,marginLeft:20}}/>
                                <Text style={{color:'black'}}>Continue with Google</Text>
                    </TouchableOpacity>
                   
                    
                
        </View>
        </View>
       </SafeAreaView>
    )
    
    
    
    
    
    }
    export default App;
    
    const styles = StyleSheet.create({
    container:{backgroundColor:'#454545'},
    inputplace:{height:50,width:300,backgroundColor:'white',paddingLeft:15,borderRadius:8},
    textSignin:{fontWeight:'700',fontSize:32,color:'black'},
    textContainerSignin:{marginTop:75},
    textInputContainer:{marginTop:30,},
    button:{backgroundColor:'#9747ff',height:50,justifyContent:'center',alignItems:'center',width:300,marginTop:25,borderRadius:100},
    buttonText:{color:'white',fontWeight:'500'},
    optionLoginContainer:{marginTop:80,},
    elementLogin:{borderWidth:2,borderRadius:50,height:50,width:300,justifyContent:'flex-start',alignItems:'center',flexDirection:'row',marginBottom:25,backgroundColor:'white',borderColor:'white'},
    container:{marginHorizontal:40}
    })