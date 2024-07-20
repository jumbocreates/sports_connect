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
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
    marginBottom: 16,
  },
  headerRight: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 12,
    lineHeight: 16,
  },

});

export default Header;
