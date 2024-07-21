import { View, Text, StyleSheet } from 'react-native';

const Header = (): JSX.Element => {
  return (
  <View style={styles.header}>
    <View style={styles.headerInner}>
      <Text style={styles.headerTitle}>Sports Connect</Text>
      <Text style={styles.headerRight}>ログアウト</Text>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFFFFF',
    height: 104,
    justifyContent: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.6)',
  },
  headerInner: {
    alignItems: 'center',
  },
  headerTitle: {
    color: '#000000',
    fontSize: 40,
    fontWeight: 'bold',
    lineHeight: 48,
    marginBottom: 16,
  },
  headerRight: {
    position: 'absolute',
    right: 8,
    bottom: 30,
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 10,
    lineHeight: 12,
  },

});

export default Header;
