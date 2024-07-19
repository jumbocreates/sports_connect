import { View, Text, StyleSheet } from "react-native"

const Index = ():JSX.Element =>{
  return (
    <View style={styles.container}>

      {/* ヘッダー */}
      <View style={styles.header}>
        <View style={styles.headerInner}>
          <Text style={styles.headerTitle}>Sports Connect</Text>
          <Text style={styles.headerRight}>ログアウト</Text>
        </View>
      </View>

      {/* イベントリスト */}
      <View>

        {/* イベント */}
        <View style={styles.eventListItem}>
          <View>
            <Text style={styles.eventListTitle}>Lv.1 男女混合バレーボール</Text>
            <Text style={styles.eventListItemDate}>2024/7/21(日) 16:00~18:30</Text>
            <Text style={styles.eventListItemPlace}>京都テルサ</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View style={styles.eventListItem}>
          <View>
            <Text style={styles.eventListTitle}>男女混合バレーボール大会</Text>
            <Text style={styles.eventListItemDate}>2024/8/4(日) 12:00~18:00</Text>
            <Text style={styles.eventListItemPlace}>正雀体育館</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View style={styles.eventListItem}>
          <View>
            <Text style={styles.eventListTitle}>Lv.1 男女混合バレーボール</Text>
            <Text style={styles.eventListItemDate}>2024/8/25(日) 15:00~18:00</Text>
            <Text style={styles.eventListItemPlace}>NASアクアパーク扇町プール</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

      </View>

      {/* イベント追加ボタン */}
      <View>
        <Text>+</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  // ヘッダー
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

  // イベントリスト
  eventListItem:{
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal:19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.15)',
  },
  eventListTitle:{
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  eventListItemDate:{
    fontSize: 12,
    lineHeight: 16,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  eventListItemPlace:{
    fontSize: 12,
    lineHeight: 16,
    color: 'rgba(0, 0, 0, 0.5)',
  },
})

export default Index
