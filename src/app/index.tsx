import { View, Text, StyleSheet } from "react-native"

const Index = ():JSX.Element =>{
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text>Sports Connect</Text>
          <Text>ログアウト</Text>
        </View>
      </View>
      <View>

        <View>
          <View>
            <Text>Lv.1 男女混合バレーボール</Text>
            <Text>2024/7/21(日) 16:00~18:30</Text>
            <Text>京都テルサ</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View>
          <View>
            <Text>男女混合バレーボール大会</Text>
            <Text>2024/8/4(日) 12:00~18:00</Text>
            <Text>正雀体育館</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View>
          <View>
            <Text>Lv.1 男女混合バレーボール</Text>
            <Text>2024/8/25(日) 15:00~18:00</Text>
            <Text>NASアクアパーク扇町プール</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

      </View>

      <View>
        <Text>+</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})

export default Index
