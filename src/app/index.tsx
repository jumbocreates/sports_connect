import { View, StyleSheet } from "react-native"
import Header from "../components/Header"
import EventListItem from "../components/EventListItem"
import CircleButton from "../components/CircleButton"

const Index = ():JSX.Element =>{
  return (
    <View style={styles.container}>
      {/* ヘッダー */}
      <Header />

      {/* イベントリスト */}
      <View>
        {/* イベント */}
        <EventListItem />
        <EventListItem />
        <EventListItem />
      </View>
      {/* イベント追加ボタン */}
      <CircleButton>
        +
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

export default Index
