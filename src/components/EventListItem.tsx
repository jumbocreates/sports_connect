import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from './Icon';
import { Link } from 'expo-router';

const EventListItem = (): JSX.Element => {
  return (
    <Link href='/event/detail' asChild>
      <TouchableOpacity style={styles.eventListItem}>
        <View>
          <Text style={styles.eventListTitle}>Lv.1 男女混合バレーボール</Text>
          <Text style={styles.eventListItemDate}>2024/7/21(日) 16:00~18:30</Text>
          <Text style={styles.eventListItemPlace}>京都テルサ</Text>
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
