import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Modal } from 'react-native';
import { useRouter } from 'expo-router';

export default function CheckoutModal({ visible, onClose, payWithCard, payOnDelivery }: { visible: boolean; onClose: () => void; payWithCard?: () => void; payOnDelivery?: () => void }) {
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const router = useRouter();

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.modalCard}>
          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <Text style={styles.closeIcon}>×</Text>
          </TouchableOpacity>
          <Text style={styles.label}>Delivery address</Text>
          <TextInput
            style={styles.input}
            placeholder="10th avenue, Lekki, Lagos State"
            value={address}
            onChangeText={setAddress}
          />
          <Text style={styles.label}>Number we can call</Text>
          <TextInput
            style={styles.input}
            placeholder="09090605708"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.payDeliveryBtn} onPress={payOnDelivery}>
              <Text style={styles.payBtnText}>Pay on delivery</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.payCardBtn} onPress={payWithCard}>
              <Text style={styles.payBtnText}>Pay with card</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.12)',
    justifyContent: 'flex-end',
  },
  modalCard: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 24,
    minHeight: 340,
    shadowColor: '#000',
    shadowOpacity: 0.10,
    shadowRadius: 12,
    elevation: 3,
    position: 'relative',
  },
  closeBtn: {
    position: 'absolute',
    top: -28,
    left: '50%',
    marginLeft: -24,
    backgroundColor: '#fff',
    borderRadius: 24,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.10,
    shadowRadius: 8,
    elevation: 2,
    zIndex: 2,
  },
  closeIcon: {
    fontSize: 32,
    color: '#687076',
    fontWeight: 'bold',
  },
  label: {
    color: '#11181C',
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 6,
    fontSize: 15,
  },
  input: {
    backgroundColor: '#F6F6F6',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 15,
    color: '#687076',
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 24,
  },
  payDeliveryBtn: {
    backgroundColor: '#FFEED9',
    borderRadius: 16,
    flex: 1,
    alignItems: 'center',
    paddingVertical: 14,
  },
  payCardBtn: {
    backgroundColor: '#FFA94D',
    borderRadius: 16,
    flex: 1,
    alignItems: 'center',
    paddingVertical: 14,
  },
  payBtnText: {
    color: '#F2994A',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
