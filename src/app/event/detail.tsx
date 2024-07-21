import { View, Text, ScrollView, StyleSheet } from "react-native"
import Header from "../../components/Header"
import CircleButton from "../../components/CircleButton"



const Detail = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <Text>Lv.1 男女混合バレーボール</Text>
      </View>
      <Text>イベント詳細</Text>
      <View>
        <ScrollView>
          <View>
            <Text>日付</Text>
            <Text>2024/7/21(日) 16:00~18:30</Text>
          </View>
          <View>
            <Text>場所</Text>
            <Text>京都テルサ</Text>
          </View>
          <View>
            <Text>住所</Text>
            <Text>京都府京都市中京区上京都1-1-1</Text>
          </View>
          <View>
            <Text>コート数</Text>
            <Text>1コート</Text>
          </View>
          <View>
            <Text>Lv.</Text>
            <Text>1</Text>
            <Text>初心者向け</Text>
          </View>
          <View>
            <Text>ネット高</Text>
            <Text>224cm</Text>
          </View>
          <View>
            <Text>定員</Text>
            <Text>21名</Text>
          </View>
          <View>
            <Text>ネット高</Text>
            <Text>224cm</Text>
          </View>
          <View>
            <Text>ルール</Text>
            <Text>得点:25点1セット(デュースなし)</Text>
            <Text>・審判のジャッジは絶対。クレームや抗議をしないこと。</Text>
            <Text>・審判や相手チームにクレームや抗議、煽り行為を行ったプレーヤーはイエローカード(1ラリーの間退場)とする。</Text>
            <Text>・イエローカードが2枚になったプレーヤーはその試合は出場することができない。</Text>
            <Text>・ワンタッチなど自己申告した場合やはグリーンカードを出すこと。</Text>
            <Text>※大会の時はグリーンカード最多の方は景品くじ挑戦権を獲得</Text>
            <Text>・未経験者の方のみサーブ権は2回</Text>
            <Text>※届かない場合はエンドラインより前、アタックラインより後ろから打つことも🉑</Text>
          </View>
          <View>
            <Text>Lv.1 特別ルール</Text>
            <Text>・タッチネット、軽度なドリブル、軽度なホールディングなし</Text>
            <Text>・上級者の方は3点差以上離れて負けている場合のみ強打🉑</Text>
            <Text>※3点差以上離れていない場合は軟打、フェイント、オーバー、プッシュなどで返球すること</Text>
            <Text>・バックアタック、ジャンプサーブ禁止</Text>
            <Text>・中級者以上の方が未経験者の方をサーブで連続して狙うことは禁止</Text>
            <Text>・前衛のセンタープレーヤーがセッターをすること</Text>
          </View>
        </ScrollView>
        <CircleButton>+</CircleButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  }
})

export default Detail
