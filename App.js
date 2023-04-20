import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Pdf from "react-native-pdf";
//add upload & display pdf
import * as DocumentPicker from "expo-document-picker";

//Project made possible with this youtube video: https://www.youtube.com/watch?v=xUNPlK1A1N8&t=781s&pp=ygUGZXhwbyAg

export default function App() {
  const onlineSource1 = require("./assets/pdf-sample.pdf");
  const onlineSource2 = {
    uri: "https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf",
    cache: true,
  };
  const [uploadedPdf, setUploadedPdf] = useState(null);

  const handleUpload = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: ["application/pdf", "image/jpg", "image/jpeg", "image/png"],
    });

    if (result.type === "success") {
      setUploadedPdf(result);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.thumbnail}>
        <Pdf trustAllCerts={false} source={onlineSource1} style={styles.pdf} />
        <View style={styles.text}>
          <Text>Amogus moment 1📮</Text>
        </View>
      </View>
      <View style={styles.thumbnail}>
        <Pdf trustAllCerts={false} source={onlineSource2} style={styles.pdf} />
        <View style={styles.text}>
          <Text>Amogus moment 2📮</Text>
        </View>
      </View>
      <View style={styles.thumbnail}>
        <View>
          <Image style={styles.pdf} source={require("./assets/icon.png")} />
        </View>
        <View style={styles.text}>
          <Text>Amogus moment 3📮</Text>
        </View>
      </View>
      {uploadedPdf && (
        <View style={styles.thumbnail}>
          <Pdf
            trustAllCerts={false}
            source={{ uri: uploadedPdf.uri }}
            style={styles.pdf}
          />
          <View style={styles.text}>
            <Text>{uploadedPdf.name}</Text>
          </View>
        </View>
      )}

      <View style={styles.uploadButton}>
        <TouchableOpacity onPress={handleUpload}>
          <Text style={styles.uploadButtonText}>Upload PDF</Text>
        </TouchableOpacity>
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
    alignItems: "center",
    borderWidth: 1,
    margin: 10,
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
