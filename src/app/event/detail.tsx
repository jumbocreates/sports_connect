import { View, Text, ScrollView, StyleSheet } from "react-native"
import { router, useLocalSearchParams } from "expo-router"
import { doc, onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"

import CircleButton from "../../components/CircleButton"
import Icon from "../../components/Icon"
import { auth, db } from "../../config"
import { type Event } from "../../../types/event"
const handlePress = (id: string): void => {
  router.push({ pathname: 'event/edit', params: { id } })
}

const Detail = (): JSX.Element => {
  const id = String(useLocalSearchParams().id)
  // console.log(id)
  const [event, setEvent] = useState<Event | null>(null)
  useEffect(() => {
    if (auth.currentUser === null) { return }
    const ref = doc(db, `users/${auth.currentUser.uid}/events`, id)
    const unsubscribe = onSnapshot(ref, (eventDoc) => {
      const { bodyText, updatedAt } = eventDoc.data() as Event
      setEvent({
        id: eventDoc.id,
        bodyText,
        updatedAt,
      })
    })
    return unsubscribe
  }, [])
  return (
    <View style={styles.container}>
      <View style={styles.eventHeader}>
        <Text style={styles.eventTitle} numberOfLines={1}>{event?.bodyText}</Text>
        <Text style={styles.eventDate}>{event?.updatedAt?.toDate().toLocaleString('ja-JP')}</Text>
      </View>
      <ScrollView style={styles.eventBody}>
        <Text style={styles.eventBodyText}>
          {event?.bodyText}
        </Text>
      </ScrollView>
      <CircleButton onPress={() => { handlePress(id) }} style={{ top: 65, right: 10, bottom: 'auto' }}>
        <Icon name="pencil" size={40} color='#FFFFFF' />
      </CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  eventHeader: {
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.15)',
  },
  eventTitle: {
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold'
  },
  eventDate: {
    fontSize: 12,
    lineHeight: 16
  },
  eventBody: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.15)',
    paddingHorizontal: 27
  },
  eventBodyText: {
    paddingVertical: 32,
    fontSize: 16,
    lineHeight: 24
  },
})

export default Detail
