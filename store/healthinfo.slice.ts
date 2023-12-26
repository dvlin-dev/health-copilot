import { createSlice } from '@reduxjs/toolkit';

export const userListSlice = createSlice({
  name: 'healthinfo',
  initialState: {
    sleepAnalysis: [], // 睡眠分析
    sleepChanges: [], // 睡眠变化
    highHeartRateEvent: [], // 高心率事件
    lowHeartRateEvent: [], // 低心率事件
    heartRate: [], // 心率
    respiratoryRate: [], // 呼吸速率
    oxygenSaturation: [], // 血氧饱和度
    height:[], // 身高
    distanceWalkingRunning: [], // 步行+跑步距离
    basalEnergyBurned: [], // 基础能量消耗
    activeEnergyBurned: [], // 活动能量消耗
    flightsClimbed: [], // 爬楼层数
    appleExerciseTime: [], // 运动时间
    distanceCycling: [], // 骑行距离
    cyclingSpeed: [] // 骑行速度
  },
  reducers: {
    setSleepAnalysis: (state, { payload }) => {
      console.log('setSleepAnalysis', payload)
      state.sleepAnalysis = payload;
    },
    setSleepChanges: (state, { payload }) => {
      state.sleepChanges = payload;
    },
    setHighHeartRateEvent: (state, { payload }) => {
      state.highHeartRateEvent = payload;
    },
    setLowHeartRateEvent: (state, { payload }) => {
      state.lowHeartRateEvent = payload;
    },
    setHeartRate: (state, { payload }) => {
      state.heartRate = payload;
    },
    setRespiratoryRate: (state, { payload }) => {
      state.respiratoryRate = payload;
    },
    setOxygenSaturation: (state, { payload }) => {
      state.oxygenSaturation = payload;
    },
    setHeight: (state, { payload }) => {
      state.height = payload;
    },
    setDistanceWalkingRunning: (state, { payload }) => {
      state.distanceWalkingRunning = payload;
    },
    setBasalEnergyBurned: (state, { payload }) => {
      state.basalEnergyBurned = payload;
    },
    setActiveEnergyBurned: (state, { payload }) => {
      state.activeEnergyBurned = payload;
    },
    setFlightsClimbed: (state, { payload }) => {
      state.flightsClimbed = payload;
    },
    setAppleExerciseTime: (state, { payload }) => {
      state.appleExerciseTime = payload;
    },
    setDistanceCycling: (state, { payload }) => {
      state.distanceCycling = payload;
    },
    setCyclingSpeed: (state, { payload }) => {
      state.cyclingSpeed = payload;
    },
  },
  
});

export default userListSlice.reducer;
export const {
  setSleepAnalysis,
  setSleepChanges,
  setHighHeartRateEvent,
  setLowHeartRateEvent,
  setHeartRate,
  setRespiratoryRate,
  setOxygenSaturation,
  setHeight,
  setDistanceWalkingRunning,
  setBasalEnergyBurned,
  setActiveEnergyBurned,
  setFlightsClimbed,
  setAppleExerciseTime,
  setDistanceCycling,
  setCyclingSpeed,
} = userListSlice.actions;
