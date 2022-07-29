import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Linking,
  Pressable,
} from "react-native";
 
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      no: "",
      sms: ""
    };
  }
  WhatsApp = () => {
    let msg = this.state.sms;
    let number = this.state.no;
    if (number) {
      if (msg) {
        let url =
          "whatsapp://send?text=" +
          this.state.sms +
          "&phone=91" +
          this.state.no;
        Linking.openURL(url)
          .then(data => {
            console.log("WhatsApp Opened successfully " + data);
          })
          .catch(() => {
            alert("Make sure WhatsApp installed on your device");
          });
      } else {
        alert("Please enter sms ");
      }
    } else {
      alert("Please enter number");
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{ textAlign: "center", fontSize: 25,fontWeight:'bold', paddingVertical: 30 }}
        >
         Send Whatsapp.
        </Text>
 
        <TextInput
          value={this.state.sms}
          onChangeText={sms => this.setState({ sms })}
          placeholder={"Whatsapp SMS"}
          multiline={true}
          style={[styles.input, { height: 80 }]}
        />
 
        <TextInput
          value={this.state.no}
          onChangeText={no => this.setState({ no })}
          placeholder={"Number"}
          style={styles.input}
          keyboardType={"numeric"}
        />
        <View style={{ marginTop: "auto",width:'100%', }}>
          <Pressable style={{backgroundColor:'#25D366',paddingHorizontal:20,paddingVertical:10,borderRadius:4}} onPress={this.WhatsApp}>
            <Text style={{textAlign:'center',color:'white',fontSize:20,fontWeight:'bold'}}>Send</Text>
          </Pressable>
        </View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 30,
    backgroundColor: "#ffffff"
  },
  input: {
    width: 320,
    height: 44,
    padding: 10,
    margin: 10,
    backgroundColor: "#FFF",
    borderColor: "gray",
    borderRadius: 5,
    borderWidth: 0.5
  }
});