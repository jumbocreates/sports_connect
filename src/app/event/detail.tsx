import { View, Text, StyleSheet } from "react-native"
import { router } from "expo-router"

import CircleButton from "../../components/CircleButton"
import Icon from "../../components/Icon"

const handlePress = () : void => {
  router.push('event/edit')
}

const Detail = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.eventHeader}>
        <Text style={styles.eventTitle}>Lv.1 男女混合バレーボール</Text>
      </View>
      <View>
        <View style={styles.eventInfo}>
          <View style={styles.eventDetailContainer}>
            <Text style={styles.eventDateTitle}>日付:</Text>
            <Text style={styles.eventDate}>2024/7/21(日) 16:00~18:30</Text>
            <View style={styles.eventCapacityContainer}>
              <Text style={styles.eventCapacity}>定員</Text>
              <Text style={styles.eventCapacity}>21名</Text>
            </View>
          </View>
          <View style={styles.eventPlaceContainer}>
            <Text style={styles.eventPlaceTitle}>場所:</Text>
            <Text style={styles.eventPlace}>京都テルサ</Text>
          </View>
          <View style={styles.eventAddressContainer}>
            <Text style={styles.eventAddress}>京都府京都市南区 京都府民総合交流プラザ内 4F</Text>
          </View>
        </View>
        <View style={styles.eventRuleContainer}>
          <View style={styles.eventRuleTitleContainer}>
            <Text style={styles.eventRuleTitle}>ルール</Text>
          </View>
          <Text style={styles.eventRule}>ネット高:224cm</Text>
          <Text style={styles.eventRule}>得点:25点1セット(デュースなし)</Text>
          <Text style={styles.eventRule}>・審判のジャッジは絶対。クレームや抗議をしないこと。</Text>
          <Text style={styles.eventRule}>・審判や相手チームにクレームや抗議、煽り行為を行ったプレーヤーはイエローカード(1ラリーの間退場)とする。</Text>
          <Text style={styles.eventRule}>・イエローカードが2枚になったプレーヤーはその試合は出場することができない。</Text>
          <Text style={styles.eventRule}>・ワンタッチなど自己申告した場合やはグリーンカードを出すこと。</Text>
          <Text style={styles.eventRule}>※大会の時はグリーンカード最多の方は景品くじ挑戦権を獲得</Text>
          <Text style={styles.eventRule}>・未経験者の方のみサーブ権は2回</Text>
          <Text style={styles.eventRule}>※届かない場合はエンドラインより前、アタックラインより後ろから打つことも🉑</Text>
        </View>
        <View style={styles.eventSpecialRulesContainer}>
          <View style={styles.eventSpecialRulesTitleContainer}>
            <Text style={styles.eventSpecialRulesTitle}>Lv.1 特別ルール</Text>
          </View>
          <Text style={styles.eventSpecialRules}>・タッチネット、軽度なドリブル•ホールディングなし</Text>
          <Text style={styles.eventSpecialRules}>・上級者の方は3点差以上離れて負けている場合のみ強打🉑</Text>
          <Text style={styles.eventSpecialRules}>※3点差以上離れていない場合は軟打、フェイント、オーバー、プッシュなどで返球すること</Text>
          <Text style={styles.eventSpecialRules}>・バックアタック、ジャンプサーブ禁止</Text>
          <Text style={styles.eventSpecialRules}>・中級者以上の方が未経験者の方をサーブで連続して狙うことは禁止</Text>
          <Text style={styles.eventSpecialRules}>・前衛のセンタープレーヤーがセッターをすること</Text>
        </View>
      </View>
        <CircleButton onPress={handlePress} style={{ top:0, right:10,  bottom: 'auto' }}>
          <Icon name="pencil" size={40} color='#FFFFFF'/>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 19,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.15)',
  },
  eventTitle: {
    fontSize: 24
  },
  // イベント詳細
  eventInfo: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.15)',
    paddingVertical: 8,
  },
  eventDetailContainer: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  // 日時
  eventDateTitle: {
    fontSize: 20
  },
  eventDate: {
    fontSize: 20
  },
  // 定員
  eventCapacityContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  eventCapacity: {
    fontSize: 20,
  },
  // 場所
  eventPlaceContainer: {
    flexDirection: 'row',
  },
  eventPlaceTitle: {
    fontSize: 20,
  },
  eventPlace: {
    fontSize: 20,
  },
  // 住所
  eventAddressContainer: {
    flexDirection: 'row',
  },
  eventAddress: {
    fontSize: 16,
  },

  // ルール
  eventRuleContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.15)',
  },
  eventRuleTitleContainer: {
    backgroundColor: '#dddddd',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.15)',
  },
  eventRuleTitle: {
    fontSize: 20,
  },
  eventRule: {
    fontSize: 16,
  },

  //特別ルール
  eventSpecialRulesContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.15)',
  },
  eventSpecialRulesTitleContainer: {
    backgroundColor: '#dddddd',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.15)',
  },
  eventSpecialRulesTitle: {
    fontSize: 18,
  },
  eventSpecialRules: {
    fontSize: 16,
  }
})

export default Detail
