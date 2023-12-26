import { 
  HKAuthorizationRequestStatus,
  HKCategoryTypeIdentifier,
  HKQuantityTypeIdentifier, 
  useHealthkitAuthorization 
} from '@kingstinct/react-native-healthkit';
import getInfo from './getInfo';

export default () => {
  const [
    authorizationStatus, 
    requestAuthorization
  ] = useHealthkitAuthorization([
    HKCategoryTypeIdentifier.sleepAnalysis, // 睡眠分析
    // 心率
    HKCategoryTypeIdentifier.highHeartRateEvent, // 高心率事件
    HKCategoryTypeIdentifier.lowHeartRateEvent, // 低心率事件
    HKCategoryTypeIdentifier.irregularHeartRhythmEvent, // 心律失常事件
    HKCategoryTypeIdentifier.sleepChanges, // 睡眠变化
    
    HKQuantityTypeIdentifier.heartRate, // 心率
    HKQuantityTypeIdentifier.respiratoryRate, // 呼吸速率
    HKQuantityTypeIdentifier.oxygenSaturation, // 血氧饱和度
    HKQuantityTypeIdentifier.bodyMassIndex, // 体重指数
    HKQuantityTypeIdentifier.height, // 身高

    // 运动信息
    HKCategoryTypeIdentifier.appleStandHour, // 站立时间
    HKQuantityTypeIdentifier.stepCount, // 步数
    HKQuantityTypeIdentifier.distanceWalkingRunning, // 步行+跑步距离
    HKQuantityTypeIdentifier.distanceCycling, // 骑行距离
    HKQuantityTypeIdentifier.distanceSwimming, // 游泳距离
    HKQuantityTypeIdentifier.basalEnergyBurned, // 基础能量消耗
    HKQuantityTypeIdentifier.activeEnergyBurned, // 活动能量消耗
    HKQuantityTypeIdentifier.flightsClimbed, // 爬楼层数
    HKQuantityTypeIdentifier.appleExerciseTime, // 运动时间
    HKQuantityTypeIdentifier.cyclingSpeed, // 骑行速度
  ])

  if(authorizationStatus === HKAuthorizationRequestStatus.unknown || authorizationStatus === HKAuthorizationRequestStatus.shouldRequest) {
    requestAuthorization().then((status) => {
      console.log('requestAuthorization', status)
      getInfo()
      console.info('getInfo')

    })
  } else {
    getInfo()
    console.info('getInfo')
  }

  return {
    authorizationStatus,
    requestAuthorization
  }
}
