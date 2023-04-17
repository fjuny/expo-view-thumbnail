import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Pdf from "react-native-pdf";

//Project made possible with this youtube video: https://www.youtube.com/watch?v=xUNPlK1A1N8&t=781s&pp=ygUGZXhwbyAg

export default function App() {
  const onlineSource1 = {
    uri: "http://samples.leanpub.com/thereactnativebook-sample.pdf",
    cache: true,
  };
  const onlineSource2 = {
    uri: "https://www.africau.edu/images/default/sample.pdf",
    cache: true,
  };
  const onlineSource3 = {
    uri: "https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf",
    cache: true,
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.thumbnail}>
        <Pdf trustAllCerts={false} source={onlineSource3} style={styles.pdf} />
        <View style={styles.text}><Text >Amogus moment 1📮</Text></View>
      </View>
      <View style={styles.thumbnail}>
        <Pdf trustAllCerts={false} source={onlineSource2} style={styles.pdf} />
        <View style={styles.text}><Text >Amogus moment 2📮</Text></View>
      </View>
      <View style={styles.thumbnail}>
      <View ><Pdf trustAllCerts={false} source={onlineSource1} style={styles.pdf} /></View>
        <View style={styles.text}><Text >Amogus moment 3📮</Text></View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    margin: 32,
  },
  pdf: {
    width: 105,
    height: 135,
  },
  thumbnail: {
    flexDirection: "row",
    alignItems: "center",borderWidth: 1,
    margin:10,
  },text:{
    justifyContent: "center",alignItems: "center",flex:1
  }
});
