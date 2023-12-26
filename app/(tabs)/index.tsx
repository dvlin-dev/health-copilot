import React, { useEffect, useState } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { View, Text } from '../../components/Themed';
import HealthKit from '@kingstinct/react-native-healthkit';
import Authorize from '../../utils/getAuthorize';
import Launch from '../../components/Launch';
import Info from '../../components/Info';

export default function Index() {
  useEffect(() => {
    
  }, []);

  return (
    <View style={styles.container}>
     <Launch />
     <Info />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  healthData: {
    marginTop: 15,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
});
