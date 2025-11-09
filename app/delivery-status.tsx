import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function DeliveryStatus() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.headerBg}>
        <TouchableOpacity style={styles.goBack} onPress={() => router.back()}>
          <Text style={styles.goBackText}>Go back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Delivery Status</Text>
      </View>
      <View style={styles.statusRow}>
        <View style={styles.statusIconBox}>
          <Text style={styles.statusIcon}>📄</Text>
        </View>
        <View style={styles.statusTextBox}>
          <Text style={styles.statusTitle}>Order Taken</Text>
        </View>
        <Text style={styles.statusCheck}>✓</Text>
      </View>
      <View style={styles.statusRow}>
        <View style={styles.statusIconBox}>
          <Text style={styles.statusIcon}>📋</Text>
        </View>
        <View style={styles.statusTextBox}>
          <Text style={styles.statusTitle}>Order Is Being Prepared</Text>
        </View>
        <Text style={styles.statusCheck}>✓</Text>
      </View>
      <View style={styles.statusRow}>
        <View style={styles.statusIconBox}>
          <Text style={styles.statusIcon}>🛵</Text>
        </View>
        <View style={styles.statusTextBox}>
          <Text style={styles.statusTitle}>Order Is Being Delivered</Text>
          <Text style={styles.statusSub}>Your delivery agent is coming</Text>
        </View>
        <Text style={styles.statusDelivering}>🔗</Text>
      </View>
      <View style={styles.mapBox}>
        <Image source={{ uri: 'https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png' }} style={styles.mapImg} />
      </View>
      <View style={styles.statusRow}>
        <View style={styles.statusIconBox}>
          <Text style={styles.statusIcon}>✅</Text>
        </View>
        <View style={styles.statusTextBox}>
          <Text style={styles.statusTitle}>Order Received</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerBg: {
    backgroundColor: '#FFA94D',
    paddingBottom: 24,
    paddingTop: 40,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    alignItems: 'center',
    position: 'relative',
    marginBottom: 16,
  },
  goBack: {
    position: 'absolute',
    left: 16,
    top: 16,
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 6,
    zIndex: 2,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 1,
  },
  goBackText: {
    color: '#0a7ea4',
    fontWeight: 'bold',
  },
  headerTitle: {
    color: '#11181C',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 8,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 24,
    marginBottom: 18,
  },
  statusIconBox: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  statusIcon: {
    fontSize: 28,
  },
  statusTextBox: {
    flex: 1,
  },
  statusTitle: {
    fontWeight: 'bold',
    color: '#11181C',
    fontSize: 15,
  },
  statusSub: {
    color: '#687076',
    fontSize: 13,
  },
  statusCheck: {
    color: '#4CD964',
    fontWeight: 'bold',
    fontSize: 22,
    marginLeft: 8,
  },
  statusDelivering: {
    color: '#FFA94D',
    fontWeight: 'bold',
    fontSize: 22,
    marginLeft: 8,
  },
  mapBox: {
    marginHorizontal: 24,
    marginBottom: 18,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#F6F6F6',
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
