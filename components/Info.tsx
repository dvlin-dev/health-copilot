import { 
  ScrollView,
  View,
  Text
} from 'react-native';
import { useAppSelector } from '../store';


export default () => {
  const {
    sleepAnalysis, // 睡眠分析
    sleepChanges, // 睡眠变化
    highHeartRateEvent, // 高心率事件
    lowHeartRateEvent, // 低心率事件
    heartRate, // 心率
    respiratoryRate, // 呼吸速率
    oxygenSaturation, // 血氧饱和度
    height, // 身高
    distanceWalkingRunning, // 步行+跑步距离
    basalEnergyBurned, // 基础能量消耗
    activeEnergyBurned, // 活动能量消耗
    flightsClimbed, // 爬楼层数
    appleExerciseTime, // 运动时间
    distanceCycling, // 骑行距离
    cyclingSpeed // 骑行速度
   } = useAppSelector((state) => state.healthinfo)
  
   console.log('sleepAnalysis-----', useAppSelector((state) => state.healthinfo))
  return <ScrollView>
          <View>
            <Text>睡眠分析: {JSON.stringify(sleepAnalysis)}</Text>
            <Text>睡眠变化: {JSON.stringify(sleepChanges)}</Text>
            <Text>高心率事件: {JSON.stringify(highHeartRateEvent)}</Text>
            <Text>低心率事件: {JSON.stringify(lowHeartRateEvent)}</Text>
            <Text>心率: {JSON.stringify(heartRate)}</Text>
            <Text>呼吸速率: {JSON.stringify(respiratoryRate)}</Text>
            <Text>血氧饱和度: {JSON.stringify(oxygenSaturation)}</Text>
            <Text>身高: {JSON.stringify(height)}</Text>
            <Text>步行+跑步距离: {JSON.stringify(distanceWalkingRunning)}</Text>
            <Text>基础能量消耗: {JSON.stringify(basalEnergyBurned)}</Text>
            <Text>活动能量消耗: {JSON.stringify(activeEnergyBurned)}</Text>
            <Text>爬楼层数: {JSON.stringify(flightsClimbed)}</Text>
            <Text>运动时间: {JSON.stringify(appleExerciseTime)}</Text>
            <Text>骑行距离: {JSON.stringify(distanceCycling)}</Text>
            <Text>骑行速度: {JSON.stringify(cyclingSpeed)}</Text>
          </View>
        </ScrollView>
}