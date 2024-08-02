import {
  View, TextInput, StyleSheet, KeyboardAvoidingView
} from "react-native";
import { router } from "expo-router";

import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icon";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config";

const handlePress = async (): void => {
  addDoc(collection(db, 'events'), {
    bodyText: 'test'
  })
    .then((docRef) => {
      console.log('成功', docRef.id)
      router.back()
    })
    .catch((error) => {
      console.log(error)
    })
}

const create = (): JSX.Element => {
  return (
    <KeyboardAvoidingView behavior='height' style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput multiline style={styles.input} value='' />
      </View>
      <CircleButton onPress={handlePress}>
        <Icon name='check' size={40} color="#FFFFFF" />
      </CircleButton>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingVertical: 32,
    paddingHorizontal: 27,
    flex: 1
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24
  }
})

export default create
