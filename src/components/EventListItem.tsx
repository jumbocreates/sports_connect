import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from './Icon';
import { Link } from 'expo-router';
import { type Event } from '../../types/event';

interface Props {
  event: Event
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
        <TouchableOpacity>
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
