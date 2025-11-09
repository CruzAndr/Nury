import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function OrderSuccess() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.iconCircle}>
        <Text style={styles.checkIcon}>✓</Text>
      </View>
      <Text style={styles.title}>Congratulations!!!</Text>
      <Text style={styles.subtitle}>Your order have been taken and is being attended to</Text>
      <TouchableOpacity style={styles.trackBtn} onPress={() => router.push('/delivery-status')}>
        <Text style={styles.trackBtnText}>Track order</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.continueBtn} onPress={() => router.push('/') }>
        <Text style={styles.continueBtnText}>Continue shopping</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  iconCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#D6F5D6',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
    borderWidth: 2,
    borderColor: '#4CD964',
  },
  checkIcon: {
    fontSize: 48,
    color: '#4CD964',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2D2150',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    color: '#687076',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 32,
  },
  trackBtn: {
    backgroundColor: '#FFA94D',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginBottom: 16,
  },
  trackBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  continueBtn: {
    borderColor: '#FFA94D',
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 32,
  },
  continueBtnText: {
    color: '#FFA94D',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
