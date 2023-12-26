import { 
  HKQuantityTypeIdentifier,
  HKCategoryTypeIdentifier,
  queryQuantitySamples,
  queryCategorySamples,
} from '@kingstinct/react-native-healthkit';
import { setActiveEnergyBurned, setAppleExerciseTime, setBasalEnergyBurned, setDistanceCycling, setDistanceWalkingRunning, setFlightsClimbed, setHeartRate, setHeight, setHighHeartRateEvent, setLowHeartRateEvent, setOxygenSaturation, setRespiratoryRate, setSleepAnalysis, setSleepChanges } from '../store/healthinfo.slice';
import { useAppDispatch } from '../store';

export default () => {
  const dispatch = useAppDispatch()

  queryCategorySamples(
    HKCategoryTypeIdentifier.sleepAnalysis, {
      limit: 7
    }
  ).then((sleepAnalysis) => {
      console.log('sleepAnalysis', sleepAnalysis)
      dispatch(setSleepAnalysis(sleepAnalysis))
  })

  queryCategorySamples(
    HKCategoryTypeIdentifier.sleepChanges, {
      limit: 7
    }
  ).then((sleepChanges) => {
    dispatch(setSleepChanges(sleepChanges))
  })

  queryCategorySamples(
    HKCategoryTypeIdentifier.highHeartRateEvent, {
      limit: 7
    }
  ).then((highHeartRateEvent) => {
    dispatch(setHighHeartRateEvent(highHeartRateEvent))
  })

  queryCategorySamples(
    HKCategoryTypeIdentifier.lowHeartRateEvent, {
      limit: 7
    }
  ).then((lowHeartRateEvent) => {
    dispatch(setLowHeartRateEvent(lowHeartRateEvent))
  })
 

  queryQuantitySamples(
    HKQuantityTypeIdentifier.heartRate, {
      limit: 7
    }
  ).then((heartRate) => {
    dispatch(setHeartRate(heartRate))
  })

  queryQuantitySamples(
    HKQuantityTypeIdentifier.respiratoryRate, {
      limit: 7
    }
  ).then((respiratoryRate) => {
    dispatch(setRespiratoryRate(respiratoryRate))
  })

  queryQuantitySamples(
    HKQuantityTypeIdentifier.oxygenSaturation, {
      limit: 7
    }
  ).then((oxygenSaturation) => {
    dispatch(setOxygenSaturation(oxygenSaturation))
  })

  queryQuantitySamples(
    HKQuantityTypeIdentifier.height, {
      limit: 7
    }
  ).then((height) => {
    dispatch(setHeight(height))
  })

  queryQuantitySamples(
    HKQuantityTypeIdentifier.distanceWalkingRunning, {
      limit: 7
    }
  ).then((distanceWalkingRunning) => {
    dispatch(setDistanceWalkingRunning(distanceWalkingRunning))
  })

  queryQuantitySamples(
    HKQuantityTypeIdentifier.distanceCycling, {
      limit: 7
    }
  ).then((distanceCycling) => {
    dispatch(setDistanceCycling(distanceCycling))
  })
  
  queryQuantitySamples(
    HKQuantityTypeIdentifier.basalEnergyBurned, {
      limit: 7
    }
  ).then((basalEnergyBurned) => {
    dispatch(setBasalEnergyBurned(basalEnergyBurned))
  })

  queryQuantitySamples(
    HKQuantityTypeIdentifier.activeEnergyBurned, {
      limit: 7
    }
  ).then((activeEnergyBurned) => {
    dispatch(setActiveEnergyBurned(activeEnergyBurned))
  })

  queryQuantitySamples(
    HKQuantityTypeIdentifier.flightsClimbed, {
      limit: 7
    }
  ).then((flightsClimbed) => {
    dispatch(setFlightsClimbed(flightsClimbed))
  })
  
  queryQuantitySamples(
    HKQuantityTypeIdentifier.appleExerciseTime, {
      limit: 7
    }
  ).then((appleExerciseTime) => {
    dispatch(setAppleExerciseTime(appleExerciseTime))
  })


  queryQuantitySamples(
    HKQuantityTypeIdentifier.cyclingSpeed, {
      limit: 7
    }
  ).then((cyclingSpeed) => {
    dispatch(setDistanceCycling(cyclingSpeed))
  })

}