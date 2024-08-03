import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Link } from 'expo-router';
import { deleteDoc, doc } from 'firebase/firestore';

import Icon from './Icon';
import { type Event } from '../../types/event';
import { auth, db } from '../config';


interface Props {
  event: Event
}

const handlePress = (id: string): void => {
  if (auth.currentUser === null) { return }
  const ref = doc(db, `users/${auth.currentUser.uid}/events`, id)
  Alert.alert('メモを削除します。', 'よろしいでしょうか?', [
    {
      text: 'キャンセル'
    },
    {
      text: '削除する',
      style: 'destructive',
      onPress: () => {
        deleteDoc(ref)
          .catch(() => { Alert.alert('削除に失敗しました') })
      }
    }
  ])
}

const EventListItem = (props: Props): JSX.Element | null => {
  const { event } = props
  const { bodyText, updatedAt } = event
  if (bodyText === null || updatedAt === null) { return null }
  const dateString = updatedAt.toDate().toLocaleString('ja-JP')
  return (
    <Link
      href={
        {
          pathname: '/event/detail',
          params: { id: event.id }
        }
      }
      asChild
    >
      <TouchableOpacity style={styles.eventListItem}>
        <View>
          <Text
            numberOfLines={1}
            style={styles.eventListTitle}
          >
            {bodyText}
          </Text>
          <Text
            style={styles.eventListItemDate}
          >
            {dateString}
          </Text>
        </View>
        <TouchableOpacity onPress={() => { handlePress(event.id) }}>
          <Icon name='delete' size={40} color='#B0B0B0' />
        </TouchableOpacity>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  eventListItem: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.15)',
  },
  eventListTitle: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  eventListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  eventListItemPlace: {
    fontSize: 12,
    lineHeight: 16,
    color: 'rgba(0, 0, 0, 0.5)',
  },

});

export default EventListItem;
