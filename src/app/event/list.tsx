import { View, Text, StyleSheet } from "react-native"
import { router, useNavigation } from "expo-router"
import { useEffect } from "react"

import EventListItem from "../../components/EventListItem"
import CircleButton from "../../components/CircleButton"
import Icon from "../../components/Icon"

const handlePress = () : void => {
  router.push('event/create')
}

const List = ():JSX.Element =>{
  useEffect(() => {
    const navigation = useNavigation()
    navigation.setOptions({
      headerRigth: () => { return <Text>test</Text> }
    })
  }, [])
  return (
    <View style={styles.container}>
      {/* イベントリスト */}
      <View>
        {/* イベント */}
        <EventListItem />
        <EventListItem />
        <EventListItem />
      </View>
      {/* イベント追加ボタン */}
      <CircleButton onPress={handlePress}>
        <Icon name='plus' size={40} color="#FFFFFF"/>
      </CircleButton>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  }
})

export default List
