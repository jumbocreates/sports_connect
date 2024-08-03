import { View, StyleSheet, FlatList } from "react-native"
import { router, useNavigation } from "expo-router"
import { useEffect, useState } from "react"
import { collection, onSnapshot, query, orderBy } from "firebase/firestore"

import EventListItem from "../../components/EventListItem"
import CircleButton from "../../components/CircleButton"
import Icon from "../../components/Icon"
import LogOutButton from "../../components/LogOutButton"
import { auth, db } from "../../config"
import { type Event } from "../../../types/event"

const handlePress = (): void => {
  router.push('event/create')
}

const List = (): JSX.Element => {
  const [events, setEvents] = useState<Event[]>([])
  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => { return <LogOutButton /> }
    })
  }, [])

  useEffect(() => {
    if (auth.currentUser === null) { return }
    const ref = collection(db, `users/${auth.currentUser.uid}/events`)
    const q = query(ref, orderBy('updatedAt', 'desc'))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const remoteEvents: Event[] = []
      snapshot.forEach((doc) => {
        const { bodyText, updatedAt } = doc.data()
        remoteEvents.push({
          id: doc.id,
          bodyText,
          updatedAt
        })
      })
      setEvents(remoteEvents)
    })
    return unsubscribe
  }, [])
  return (
    <View style={styles.container}>
      {/* イベントリスト */}
      <FlatList
        data={events}
        renderItem={({ item }) => <EventListItem event={item} />}
      />
      {/* イベント追加ボタン */}
      <CircleButton onPress={handlePress}>
        <Icon name='plus' size={40} color="#FFFFFF" />
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
